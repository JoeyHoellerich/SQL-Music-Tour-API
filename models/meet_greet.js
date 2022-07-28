'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class meet_greet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  meet_greet.init({
    meet_greet_id: {type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    event_id: {type: DataTypes.INTEGER, allowNull:false},
    band_id: {type:DataTypes.INTEGER, allowNull:false},
    meet_greet_start_time: {type:DataTypes.DATE, allowNull:false},
    meet_greet_end_time: {type:DataTypes.DATE, allowNull:false}
  }, {
    sequelize,
    modelName: 'meet_greet',
    tableName: 'meet_greet',
    timestamps: false
  });
  return meet_greet;
};