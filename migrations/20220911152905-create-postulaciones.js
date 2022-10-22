'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('postulaciones', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      salarioPactado: {
        type: Sequelize.STRING
      },
      fecha_postulaciones: {
        type: Sequelize.STRING
      },
      estado: {
        type: Sequelize.STRING
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
      id_ofertaempleo: {
        type: Sequelize.INTEGER,
        references:{
          model: {
            tableName:'ofertaempleo',
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
    await queryInterface.dropTable('postulaciones');
  }
};