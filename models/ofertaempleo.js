'use strict';
const {
  Model
} = require('sequelize');
const detalleoferta = require('./detalleoferta');
const postulaciones = require('./postulaciones');

module.exports = (sequelize, DataTypes) => {
  class ofertaempleo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ofertaempleo.hasMany(models.detalleoferta, {foreignKey: 'id_ofertaEmpleo'});
      
      ofertaempleo.hasMany(models.postulaciones, {foreignKey: 'id_ofertaEmpleo'});
      ofertaempleo.belongsTo(models.empleador, {foreignKey: 'id_empleador'});
    }
  }
  ofertaempleo.init({
    id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
    nombres: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    salario: DataTypes.STRING,
    horario: DataTypes.STRING,
    tiempo_estimado: DataTypes.STRING,

  id_empleador: {
    type: DataTypes.INTEGER,
    references:{
      model: {
        tableName: 'empleador',
      },
      key:'id'
    },
    allowNull: false
  },
    
  }, {
    sequelize,
    modelName: 'ofertaempleo',
    tableName: 'ofertaempleo'
  });

  //ofertaempleo.belongsToMany(categoria, { through: detalleoferta });
  return ofertaempleo;
};