'use strict';
const {
  Model
} = require('sequelize');
const categoria = require('./categoria');
const postulante = require('./postulante');
module.exports = (sequelize, DataTypes) => {
  class intereses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
  
      intereses.belongsTo(models.categoria, {foreignKey: 'id_categoria'});
      intereses.belongsTo(models.postulante, {foreignKey: 'id_postulante'});

    }
  }
  intereses.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
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

    id_postulante: {
      type: DataTypes.INTEGER,
      references:{
        model: {
          tableName:'postulante',
        },
        key: 'id'
      },
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'intereses',
    tableName: 'intereses'
  });
  return intereses;
};