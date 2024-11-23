const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Usuario = sequelize.define('Usuario', {
  nombre: { type: DataTypes.STRING, allowNull: false },
  apellido: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  username: { type: DataTypes.STRING, unique: true, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  telefono: { type: DataTypes.BIGINT, allowNull: false },
  perfil: { type: DataTypes.STRING, allowNull: false },
}, {
  tableName: 'usuarios',
  timestamps: false, // Evita las columnas createdAt y updatedAt si no son necesarias
});

module.exports = Usuario;