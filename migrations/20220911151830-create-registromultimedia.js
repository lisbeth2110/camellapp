'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('registromultimedia', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
    

      descripcion: {
        type: Sequelize.STRING
      },
      titulo: {
        type: Sequelize.STRING
      },
      url: {
        type: Sequelize.STRING
      },
      id_registrocatalogo: {
        type: Sequelize.INTEGER,
        references:{
          model: {
            tableName:'registrocatalogo',
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
    await queryInterface.dropTable('registromultimedia');
  }
};