const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('bmshop_db', 'postgres', '12345678', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;
