'use strict';
const {
  Model
} = require('sequelize');
const usuario = require('./empleador');

module.exports = (sequelize, DataTypes) => {
  class usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      usuario.hasMany(models.empleador, { foreignKey: 'id_usuario' });
      usuario.hasMany(models.postulante, { foreignKey: 'id_usuario' });

    }
  }
  usuario.init({

    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    correo: {
      type: DataTypes.STRING,
      contrasena: DataTypes.STRING,
      allowNull: false,

    },
    contrasena: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rol: {
      type: DataTypes.STRING,
      rol: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'usuario',
    tableName: 'usuario'
  });
  return usuario;
};

/////////

