'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('cuotas', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      numeroCuota: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      monto: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      fechaCuota: {
        type: Sequelize.DATE,
        allowNull: false
      },
      fechaVencimiento: {
        type: Sequelize.DATE,
        allowNull: false
      },
      estado: {
        type: Sequelize.STRING,
        allowNull: false
      },
      alquilerId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'alquileres',
          key: 'id'
        },
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('cuotas');
  }
};
