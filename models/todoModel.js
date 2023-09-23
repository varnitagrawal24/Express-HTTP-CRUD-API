const { DataTypes } = require("sequelize");
const { db } = require("../config/db");

const todoModel = db.define("todos", {
  text: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  isCompleted: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

module.exports = todoModel;
