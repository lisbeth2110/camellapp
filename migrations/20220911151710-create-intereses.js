'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('intereses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_categoria: {
        type: Sequelize.INTEGER,
        references:{
          model: {
            tableName:'categoria',
          },
          key: 'id'
        },
        allowNull: false
      },

      id_postulante: {
        type: Sequelize.INTEGER,
        references:{
          model: {
            tableName:'postulante',
          },
          key: 'id'
        },
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('intereses');
  }
};