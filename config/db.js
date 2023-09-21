const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(process.env.DATABASE, process.env.DB_USER, process.env.DB_PW, {
  host: process.env.HOST,
  dialect: "postgres",
  define: {
    timestamps: false,
  },
});

// TEST DB

const testDbConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected successfully...");
  } catch (error) {
    console.error("Unable to connect database:- ", error);
  }
};

module.exports = { db: sequelize, testDbConnection };
