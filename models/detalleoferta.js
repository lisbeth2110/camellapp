'use strict';
const {
  Model
} = require('sequelize');
const categoria = require('./categoria');
const ofertaempleo = require('./ofertaempleo');
module.exports = (sequelize, DataTypes) => {
  class detalleoferta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      detalleoferta.belongsTo(models.ofertaempleo, {foreignKey: 'id_ofertaEmpleo'});
      detalleoferta.belongsTo(models.categoria, {foreignKey: 'id_categoria'});

    }
  }
  detalleoferta.init({

    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    id_ofertaempleo: {
      type: DataTypes.INTEGER,
        references:{
          model: {
            tableName:'ofertaempleo',
          },
          key: 'id'
        },
        allowNull: false
      },
    id_categoria: {
      type: DataTypes.INTEGER,
        references:{
          model: {
            tableName:'categoria',
          },
          key: 'id'
        },
        allowNull: false
      },
  }, {
    sequelize,
    modelName: 'detalleoferta',
    tableName: 'detalleoferta'
  });
  
  return detalleoferta;



};