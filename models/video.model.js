const { DataTypes } = require("sequelize");
const sequelize = require("../db/db.config");

exports.Video = sequelize.define(
  "video",
  {
    video_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    video_title: {
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
