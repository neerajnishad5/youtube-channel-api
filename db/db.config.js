// importing Sequelize
 
const { Sequelize } = require("sequelize");

// create instance
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
  }
);

module.exports = sequelize;