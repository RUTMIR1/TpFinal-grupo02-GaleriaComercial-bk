const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('db_test2', 'postgres', 'root', {
  port: 5432,
  host: 'dockerfile-loadbalancer-cluster-1',
  dialect: 'postgres',
  logging: false, // Desactiva el logging para evitar saturación de logs
});

//dockerfile-loadbalancer-cluster-1:5432/db_test2

sequelize
  .authenticate()
  .then(() => console.log('DB is connected'))
  .catch(err => console.error('Connection error:', err));

module.exports = sequelize;