'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class shorten_links extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  shorten_links.init({
    codeLink: DataTypes.STRING,
    originalLink: DataTypes.STRING,
    shortenLink: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'shorten_links',
  });
  return shorten_links;
};