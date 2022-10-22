'use strict';
const {
  Model
} = require('sequelize');
const empleador = require('./empleador');
module.exports = (sequelize, DataTypes) => {
  class usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      usuario.hasMany(models.empleador, {foreignKey: 'id_usuario'});
      usuario.hasMany(models.postulante, {foreignKey: 'id_usuario'});
     
    }
  }
  usuario.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    correo: DataTypes.STRING,
    contrasena: DataTypes.STRING,
    rol: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'usuario',
    tableName: 'usuario'
  });
  return usuario;
};