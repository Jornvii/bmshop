const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Category =require('./Category');

const Product = sequelize.define('Product', {
  product_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  product_name: { type: DataTypes.STRING, allowNull: false },
  img_file: { type: DataTypes.STRING, allowNull: true },
  category_id: { type: DataTypes.INTEGER, allowNull: false },
  price: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
  stock_quantity: { type: DataTypes.INTEGER },
  description: { type: DataTypes.TEXT },
});
Category.hasMany(Product, { foreignKey: 'category_id', onDelete: 'CASCADE' });
Product.belongsTo(Category, { foreignKey: 'category_id', onDelete: 'CASCADE' });


module.exports = Product;
