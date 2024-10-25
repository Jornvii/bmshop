const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Customer = require('./Customer');

const Order = sequelize.define('Order', {
  order_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  customer_id: { type: DataTypes.INTEGER, allowNull: false },
  order_date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  total_amount: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
  // created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  // updated_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
});
Customer.hasMany(Order, { foreignKey: 'customer_id', onDelete: 'CASCADE' });
Order.belongsTo(Customer, { foreignKey: 'customer_id', onDelete: 'CASCADE' });


module.exports = Order;
