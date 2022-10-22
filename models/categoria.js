'use strict';
const {
  Model
} = require('sequelize');
const detalleoferta = require('./detalleoferta');
const intereses = require('./intereses');
module.exports = (sequelize, DataTypes) => {
  class categoria extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      categoria.hasMany(models.detalleoferta, {foreignKey: 'id_categoria'});
      categoria.hasMany(models.intereses, {foreignKey: 'id_categoria'});
    }
  }
  categoria.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    nombre: {
      type: DataTypes.STRING
    },
    descripcion: {
      type: DataTypes.STRING
    }

  }, {
    sequelize,
    modelName: 'categoria',
    tableName: 'categoria'
  });
  //categoria.belongsToMany(ofertaempleo, { through: detalleoferta });
  return categoria;
};
