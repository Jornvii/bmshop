const bcrypt = require('bcryptjs');
const Customer = require('../models/Customer');
const Product = require('../models/Product');
const Category = require('../models/Category');
const Order = require('../models/Order');
const OrderItem = require('../models/OrderItem');
const Payment = require('../models/Payment');


// Customer Crud
// Create a new customer
exports.createCustomer = async (req, res) => {
    try {
      const { first_name, last_name, email, password, phone, address } = req.body;
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      const newCustomer = await Customer.create({
        first_name,
        last_name,
        email,
        password: hashedPassword,
        phone,
        address,
      });
  
      res.status(201).json({
        message: 'Customer created successfully',
        data: newCustomer
      });
    } catch (err) {
      res.status(500).json({
        message: 'Failed to create customer',
        error: err.message
      });
    }
  };
  
  // Get all customers
  exports.getCustomers = async (req, res) => {
    try {
      const customers = await Customer.findAll();
      res.status(200).json({
        message: 'Customers retrieved successfully',
        data: customers
      });
    } catch (err) {
      res.status(500).json({
        message: 'Failed to retrieve customers',
        error: err.message
      });
    }
  };
  
  // Get customer by ID
  exports.getCustomerById = async (req, res) => {
    try {
      const customer = await Customer.findByPk(req.params.id);
      if (customer) {
        res.status(200).json({
          message: 'Customer retrieved successfully',
          data: customer
        });
      } else {
        res.status(404).json({
          message: 'Customer not found',
          data: null
        });
      }
    } catch (err) {
      res.status(500).json({
        message: 'Failed to retrieve customer',
        error: err.message
      });
    }
  };
  
  // Update customer by ID
  exports.updateCustomer = async (req, res) => {
    try {
      const customer = await Customer.findByPk(req.params.id);
      if (customer) {
        const { first_name, last_name, email, password, phone, address } = req.body;
  
        let updatedFields = { first_name, last_name, email, phone, address };
  
        if (password) {
          const salt = await bcrypt.genSalt(10);
          updatedFields.password = await bcrypt.hash(password, salt);
        }
  
        await customer.update(updatedFields);
  
        res.status(200).json({
          message: 'Customer updated successfully',
          data: customer
        });
      } else {
        res.status(404).json({
          message: 'Customer not found',
          data: null
        });
      }
    } catch (err) {
      res.status(500).json({
        message: 'Failed to update customer',
        error: err.message
      });
    }
  };
  
  // Delete customer by ID
  exports.deleteCustomer = async (req, res) => {
    try {
      const customer = await Customer.findByPk(req.params.id);
      if (customer) {
        await customer.destroy();
        res.status(200).json({
          message: 'Customer deleted successfully',
        });
      } else {
        res.status(404).json({
          message: 'Customer not found',
          data: null
        });
      }
    } catch (err) {
      res.status(500).json({
        message: 'Failed to delete customer',
        error: err.message
      });
    }
  };
  


  // Create a new product
exports.createProduct = async (req, res) => {
  try {
    const { product_name, category_id, price, stock_quantity, description } = req.body;

    const newProduct = await Product.create({
      product_name,
      category_id,
      price,
      stock_quantity,
      description,
    });

    res.status(201).json({
      message: 'Product created successfully',
      data: newProduct
    });
  } catch (err) {
    res.status(500).json({
      message: 'Failed to create product',
      error: err.message
    });
  }
};

// Get all products
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json({
      message: 'Products retrieved successfully',
      data: products
    });
  } catch (err) {
    res.status(500).json({
      message: 'Failed to retrieve products',
      error: err.message
    });
  }
};

// Get product by ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (product) {
      res.status(200).json({
        message: 'Product retrieved successfully',
        data: product
      });
    } else {
      res.status(404).json({
        message: 'Product not found',
        data: null
      });
    }
  } catch (err) {
    res.status(500).json({
      message: 'Failed to retrieve product',
      error: err.message
    });
  }
};

// Update product by ID
exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (product) {
      const { product_name, category_id, price, stock_quantity, description } = req.body;

      await product.update({
        product_name,
        category_id,
        price,
        stock_quantity,
        description,
      });

      res.status(200).json({
        message: 'Product updated successfully',
        data: product
      });
    } else {
      res.status(404).json({
        message: 'Product not found',
        data: null
      });
    }
  } catch (err) {
    res.status(500).json({
      message: 'Failed to update product',
      error: err.message
    });
  }
};

// Delete product by ID
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (product) {
      await product.destroy();
      res.status(200).json({
        message: 'Product deleted successfully',
      });
    } else {
      res.status(404).json({
        message: 'Product not found',
        data: null
      });
    }
  } catch (err) {
    res.status(500).json({
      message: 'Failed to delete product',
      error: err.message
    });
  }
};

// *******************************************************

// Create a new product
exports.createProduct = async (req, res) => {
    try {
      const { product_name, category_id, price, stock_quantity, description } = req.body;
  
      const newProduct = await Product.create({
        product_name,
        category_id,
        price,
        stock_quantity,
        description,
      });
  
      res.status(201).json({
        message: 'Product created successfully',
        data: newProduct
      });
    } catch (err) {
      res.status(500).json({
        message: 'Failed to create product',
        error: err.message
      });
    }
  };
  
  // Get all products
  exports.getProducts = async (req, res) => {
    try {
      const products = await Product.findAll();
      res.status(200).json({
        message: 'Products retrieved successfully',
        data: products
      });
    } catch (err) {
      res.status(500).json({
        message: 'Failed to retrieve products',
        error: err.message
      });
    }
  };
  
  // Get product by ID
  exports.getProductById = async (req, res) => {
    try {
      const product = await Product.findByPk(req.params.id);
      if (product) {
        res.status(200).json({
          message: 'Product retrieved successfully',
          data: product
        });
      } else {
        res.status(404).json({
          message: 'Product not found',
          data: null
        });
      }
    } catch (err) {
      res.status(500).json({
        message: 'Failed to retrieve product',
        error: err.message
      });
    }
  };
  
  // Update product by ID
  exports.updateProduct = async (req, res) => {
    try {
      const product = await Product.findByPk(req.params.id);
      if (product) {
        const { product_name, category_id, price, stock_quantity, description } = req.body;
  
        await product.update({
          product_name,
          category_id,
          price,
          stock_quantity,
          description,
        });
  
        res.status(200).json({
          message: 'Product updated successfully',
          data: product
        });
      } else {
        res.status(404).json({
          message: 'Product not found',
          data: null
        });
      }
    } catch (err) {
      res.status(500).json({
        message: 'Failed to update product',
        error: err.message
      });
    }
  };
  
  // Delete product by ID
  exports.deleteProduct = async (req, res) => {
    try {
      const product = await Product.findByPk(req.params.id);
      if (product) {
        await product.destroy();
        res.status(200).json({
          message: 'Product deleted successfully',
        });
      } else {
        res.status(404).json({
          message: 'Product not found',
          data: null
        });
      }
    } catch (err) {
      res.status(500).json({
        message: 'Failed to delete product',
        error: err.message
      });
    }
  };


//   ***************************************************
// Create a new category
exports.createCategory = async (req, res) => {
    try {
      const { category_name } = req.body;
  
      const newCategory = await Category.create({ category_name });
  
      res.status(201).json({
        message: 'Category created successfully',
        data: newCategory
      });
    } catch (err) {
      res.status(500).json({
        message: 'Failed to create category',
        error: err.message
      });
    }
  };
  
  // Get all categories
  exports.getCategories = async (req, res) => {
    try {
      const categories = await Category.findAll();
      res.status(200).json({
        message: 'Categories retrieved successfully',
        data: categories
      });
    } catch (err) {
      res.status(500).json({
        message: 'Failed to retrieve categories',
        error: err.message
      });
    }
  };
  
  // Get category by ID
  exports.getCategoryById = async (req, res) => {
    try {
      const category = await Category.findByPk(req.params.id);
      if (category) {
        res.status(200).json({
          message: 'Category retrieved successfully',
          data: category
        });
      } else {
        res.status(404).json({
          message: 'Category not found',
          data: null
        });
      }
    } catch (err) {
      res.status(500).json({
        message: 'Failed to retrieve category',
        error: err.message
      });
    }
  };
  
  // Update category by ID
  exports.updateCategory = async (req, res) => {
    try {
      const category = await Category.findByPk(req.params.id);
      if (category) {
        const { category_name } = req.body;
  
        await category.update({ category_name });
  
        res.status(200).json({
          message: 'Category updated successfully',
          data: category
        });
      } else {
        res.status(404).json({
          message: 'Category not found',
          data: null
        });
      }
    } catch (err) {
      res.status(500).json({
        message: 'Failed to update category',
        error: err.message
      });
    }
  };
  
  // Delete category by ID
  exports.deleteCategory = async (req, res) => {
    try {
      const category = await Category.findByPk(req.params.id);
      if (category) {
        await category.destroy();
        res.status(200).json({
          message: 'Category deleted successfully',
        });
      } else {
        res.status(404).json({
          message: 'Category not found',
          data: null
        });
      }
    } catch (err) {
      res.status(500).json({
        message: 'Failed to delete category',
        error: err.message
      });
    }
  };



// ******************************* order controller 
// Create a new order
exports.createOrder = async (req, res) => {
    try {
      const { customer_id, total_amount } = req.body; // Make sure to include total_amount
  
      const newOrder = await Order.create({ customer_id, total_amount }); // Ensure both fields are passed
  
      res.status(201).json({
        message: 'Order created successfully',
        data: newOrder
      });
    } catch (err) {
      res.status(500).json({
        message: 'Failed to create order',
        error: err.message
      });
    }
  };
  
  
  // Get all orders
  exports.getOrders = async (req, res) => {
    try {
      const orders = await Order.findAll();
      res.status(200).json({
        message: 'Orders retrieved successfully',
        data: orders
      });
    } catch (err) {
      res.status(500).json({
        message: 'Failed to retrieve orders',
        error: err.message
      });
    }
  };
  
  // Get order by ID
  exports.getOrderById = async (req, res) => {
    try {
      const order = await Order.findByPk(req.params.id);
      if (order) {
        res.status(200).json({
          message: 'Order retrieved successfully',
          data: order
        });
      } else {
        res.status(404).json({
          message: 'Order not found',
          data: null
        });
      }
    } catch (err) {
      res.status(500).json({
        message: 'Failed to retrieve order',
        error: err.message
      });
    }
  };
  
  // Update order by ID
  exports.updateOrder = async (req, res) => {
    try {
      const order = await Order.findByPk(req.params.id);
      if (order) {
        const { customer_id } = req.body;
  
        await order.update({ customer_id });
  
        res.status(200).json({
          message: 'Order updated successfully',
          data: order
        });
      } else {
        res.status(404).json({
          message: 'Order not found',
          data: null
        });
      }
    } catch (err) {
      res.status(500).json({
        message: 'Failed to update order',
        error: err.message
      });
    }
  };
  
  // Delete order by ID
  exports.deleteOrder = async (req, res) => {
    try {
      const order = await Order.findByPk(req.params.id);
      if (order) {
        await order.destroy();
        res.status(200).json({
          message: 'Order deleted successfully',
        });
      } else {
        res.status(404).json({
          message: 'Order not found',
          data: null
        });
      }
    } catch (err) {
      res.status(500).json({
        message: 'Failed to delete order',
        error: err.message
      });
    }
  };


//   *************************************  item order 

// Create a new order item
exports.createOrderItem = async (req, res) => {
  try {
    const { order_id, product_id, quantity, price } = req.body;

    const newOrderItem = await OrderItem.create({
      order_id,
      product_id,
      quantity,
      price,
    });

    res.status(201).json({
      message: 'Order item created successfully',
      data: newOrderItem
    });
  } catch (err) {
    res.status(500).json({
      message: 'Failed to create order item',
      error: err.message
    });
  }
};

// Get all order items
exports.getOrderItems = async (req, res) => {
  try {
    const orderItems = await OrderItem.findAll();
    res.status(200).json({
      message: 'Order items retrieved successfully',
      data: orderItems
    });
  } catch (err) {
    res.status(500).json({
      message: 'Failed to retrieve order items',
      error: err.message
    });
  }
};

// Get order item by ID
exports.getOrderItemById = async (req, res) => {
  try {
    const orderItem = await OrderItem.findByPk(req.params.id);
    if (orderItem) {
      res.status(200).json({
        message: 'Order item retrieved successfully',
        data: orderItem
      });
    } else {
      res.status(404).json({
        message: 'Order item not found',
        data: null
      });
    }
  } catch (err) {
    res.status(500).json({
      message: 'Failed to retrieve order item',
      error: err.message
    });
  }
};

// Update order item by ID
exports.updateOrderItem = async (req, res) => {
  try {
    const orderItem = await OrderItem.findByPk(req.params.id);
    if (orderItem) {
      const { order_id, product_id, quantity, price } = req.body;

      await orderItem.update({
        order_id,
        product_id,
        quantity,
        price,
      });

      res.status(200).json({
        message: 'Order item updated successfully',
        data: orderItem
      });
    } else {
      res.status(404).json({
        message: 'Order item not found',
        data: null
      });
    }
  } catch (err) {
    res.status(500).json({
      message: 'Failed to update order item',
      error: err.message
    });
  }
};

// Delete order item by ID
exports.deleteOrderItem = async (req, res) => {
  try {
    const orderItem = await OrderItem.findByPk(req.params.id);
    if (orderItem) {
      await orderItem.destroy();
      res.status(200).json({
        message: 'Order item deleted successfully',
      });
    } else {
      res.status(404).json({
        message: 'Order item not found',
        data: null
      });
    }
  } catch (err) {
    res.status(500).json({
      message: 'Failed to delete order item',
      error: err.message
    });
  }
};