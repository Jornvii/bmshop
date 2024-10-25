const Product = require('../models/Product');
const Category = require('../models/Category');
const fs = require('fs');
const path = require('path');

// Create Product
exports.createProduct = async (req, res) => {
  try {
    const { product_name, category_id, price, stock_quantity, description } = req.body;

    // Create the product (without image for now)
    const product = await Product.create({
      product_name,
      category_id,
      price,
      stock_quantity,
      description
    });

    // If an image was uploaded, rename it to Date.now() + product_id
    if (req.file) {
      const newImageName = `${Date.now()}_${product.product_id}${path.extname(req.file.filename)}`;
      
      const oldPath = path.join(__dirname, '../uploads/images', req.file.filename);
      const newPath = path.join(__dirname, '../uploads/images', newImageName);

      // Rename the file
      fs.renameSync(oldPath, newPath);

      // Update product with the new image filename
      await product.update({ img_file: newImageName });
    }

    res.status(201).json({ success: true, data: product });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
// Update Product
exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ success: false, message: 'Product not found' });

    const { product_name, category_id, price, stock_quantity, description } = req.body;

    if (req.file) {
      // Remove the old image if it exists
      if (product.img_file) {
        fs.unlinkSync(path.join(__dirname, '../uploads/images', product.img_file));
      }

      // Rename new image to Date.now() + product_id
      const newImageName = `${Date.now()}_${product.product_id}${path.extname(req.file.filename)}`;
      const oldPath = path.join(__dirname, '../uploads/images', req.file.filename);
      const newPath = path.join(__dirname, '../uploads/images', newImageName);
      
      // Rename the file
      fs.renameSync(oldPath, newPath);

      await product.update({ img_file: newImageName });
    }

    // Update the rest of the product details
    await product.update({
      product_name,
      category_id,
      price,
      stock_quantity,
      description
    });

    res.status(200).json({ success: true, data: product });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
// Get all products 
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [Category],
      order: [['product_id', 'ASC']]  
    });
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
// Get product by ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id, {
      include: [Category]
    });

    if (!product) return res.status(404).json({ success: false, message: 'Product not found' });

    res.status(200).json({ success: true, data: product });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
// Delete Product
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ success: false, message: 'Product not found' });

    // If the product has an image, delete the image file
    if (product.img_file) {
      fs.unlinkSync(path.join(__dirname, '../uploads/images', product.img_file));
    }

    // Delete the product from the database
    await product.destroy();
    res.status(200).json({ success: true, message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
