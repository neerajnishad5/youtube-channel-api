const { DataTypes } = require("sequelize");
const sequelize = require("../db/db.config");

exports.Owner = sequelize.define("owner", {
  owner_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  owner_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
} ,  {
  timestamps: false,
  updatedAt: false,
  createdAt: false,
  freezeTableName: true,
});
