'use strict';
const {
  Model
} = require('sequelize');
const usuario = require('./usuario');

module.exports = (sequelize, DataTypes) => {
  class empleador extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      empleador.belongsTo(models.usuario, {foreignKey: 'id_usuario'});
      empleador.hasMany(models.ofertaempleo, {foreignKey: 'id_empleador'});
    }
  }
  empleador.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      references:{
        model: {
          tableName: 'usuario',
        },
        key:'id'
      },
      allowNull: false
    },
    tipoPersona: DataTypes.STRING,
    razonSocial: DataTypes.STRING,
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    fechaNacimiento: DataTypes.STRING,
    nacionalidad: DataTypes.STRING,
    direccion: DataTypes.STRING,
    telefono: DataTypes.STRING,
    correo: DataTypes.STRING,
    
  }, 
  {
    sequelize,
    modelName: 'empleador',
    tableName: 'empleador'
  });
  return empleador;
};