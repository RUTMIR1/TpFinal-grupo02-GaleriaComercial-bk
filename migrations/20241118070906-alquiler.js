'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('alquileres', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      costoAlquiler: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      fechaAlquiler: {
        type: Sequelize.DATE,
        allowNull: false
      },
      fechaVencimiento: {
        type: Sequelize.DATE,
        allowNull: false
      },
      plazoMes: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      propietarioId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'usuarios',
          key: 'id'
        },
        allowNull: false
      },
      localId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'locales',
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
    await queryInterface.dropTable('alquileres');
  }
};
