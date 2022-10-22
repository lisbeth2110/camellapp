'use strict';
const {
  Model
} = require('sequelize');
const registrocatalogo = require('./registrocatalogo');
module.exports = (sequelize, DataTypes) => {
  class registromultimedia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
       // define association here
      registromultimedia.belongsTo(models.registrocatalogo, {foreignKey: 'id_registrocatalogo'});
    }
  }
  registromultimedia.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    id_registrocatalogo: {
      type: DataTypes.INTEGER,
      references:{
        model: {
         tableName:'registrocatalogo',
        },
        key: 'id'
      },
      allowNull: false
    },
    descripcion: DataTypes.STRING,
    titulo: DataTypes.STRING,
    url: DataTypes.STRING,

    
  }, {
    sequelize,
    modelName: 'registromultimedia',
    tableName: 'registromultimedia'
  });
  return registromultimedia;
};