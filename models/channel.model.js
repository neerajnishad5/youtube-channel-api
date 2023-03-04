const { DataTypes } = require("sequelize");
const sequelize = require("../db/db.config");

exports.Channel = sequelize.define(
  "channel",
  {
    channel_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    channel_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    updatedAt: false,
    createdAt: false,
    freezeTableName: true,
  }
);
