const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db/conn')

const Task = sequelize.define(
  'Task',
  {
    // Model attributes are defined here
    title: {
      type: DataTypes.STRING,
      required: true
    },
    description: {
      type: DataTypes.STRING,
      required: true
    },
    done: {
      type: DataTypes.BOOLEAN,
      required: true,
      default: false
    },
  }
);

module.exports = Task