'use strict';
const {
  Model
} = require('sequelize');

const registromultimedia = require('./registromultimedia');
module.exports = (sequelize, DataTypes) => {
  class registrocatalogo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      registrocatalogo.belongsTo(models.postulante, {foreignKey: 'id_postulante'});
      
      registrocatalogo.hasMany(models.registromultimedia, {foreignKey: 'id_registrocatalogo'});
    }
  }
  registrocatalogo.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
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
    titulo: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    lugartrabajo: DataTypes.STRING,
    fechaInicioTrabajo: DataTypes.STRING,
    tiempoTrabajo: DataTypes.STRING,
  },
   {
    sequelize,
    modelName: 'registrocatalogo',
    tableName: 'registrocatalogo'
  });
  return registrocatalogo;
};