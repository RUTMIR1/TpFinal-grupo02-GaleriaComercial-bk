'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('locales', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      nombre: {
        type: Sequelize.STRING,
        allowNull: false
      },
      superficie: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      habilitado: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      pathimages: {
        type: Sequelize.STRING,
        allowNull: false
      },
      alquilado: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      costoMes: {
        type: Sequelize.FLOAT,
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
    await queryInterface.dropTable('locales');
  }
};