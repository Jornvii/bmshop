const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Customer = sequelize.define('Customer', {
  customer_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  first_name: { type: DataTypes.STRING, allowNull: false },
  last_name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  phone: { type: DataTypes.STRING },
  address: { type: DataTypes.TEXT }
});

module.exports = Customer;


// const Customer = sequelize.define('Customer', {
//   customer_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
//   first_name: { type: DataTypes.STRING, allowNull: false },
//   last_name: { type: DataTypes.STRING, allowNull: false },
//   email: { type: DataTypes.STRING, unique: true, allowNull: false },
//   password: { type: DataTypes.STRING, allowNull: false },
//   phone: { type: DataTypes.STRING },
//   address: { type: DataTypes.TEXT }
// }, {
//   hooks: {
//     beforeCreate: async (customer) => {
//       const salt = await bcrypt.genSalt(10);
//       customer.password = await bcrypt.hash(customer.password, salt);
//     }
//   }
// });