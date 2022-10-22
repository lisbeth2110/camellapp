'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ofertaempleo', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      nombres: {
        type: Sequelize.STRING
      },
      descripcion: {
        type: Sequelize.STRING
      },
      salario: {
        type: Sequelize.STRING
      },
      horario: {
        type: Sequelize.STRING
      },
      tiempo_estimado: {
        type: Sequelize.STRING
      },
      id_empleador: {
        type: Sequelize.INTEGER,
        references:{
          model: {
            tableName: 'empleador',
          },
          key:'id'
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
    await queryInterface.dropTable('ofertaempleo');
  }
};