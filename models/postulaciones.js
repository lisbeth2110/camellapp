'use strict';
const {
  Model
} = require('sequelize');
const ofertaempleo = require('./ofertaempleo');
const postulante = require('./postulante');
module.exports = (sequelize, DataTypes) => {
  class postulaciones extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        
      postulaciones.belongsTo(models.ofertaempleo, {foreignKey: 'id_ofertaempleo'});
      postulaciones.belongsTo(models.postulante, {foreignKey: 'id_postulante'});
      // define association here
    }
  }
  postulaciones.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
   
    salarioPactado: DataTypes.STRING,
    fecha_postulaciones: DataTypes.STRING,
    estado: DataTypes.STRING,
          
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
  }, {
    sequelize,
    modelName: 'postulaciones',
    tableName: 'postulaciones'
  });
  return postulaciones;
};