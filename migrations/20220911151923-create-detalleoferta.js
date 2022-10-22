'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('detalleoferta', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('detalleoferta');
  }
};