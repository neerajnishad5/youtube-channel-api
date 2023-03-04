const expressAsyncHandler = require("express-async-handler");

// importing models
const { Owner } = require("../models/owner.model");
const { Channel } = require("../models/channel.model");
const { Video } = require("../models/video.model");
const sequelize = require("../db/db.config");

// associations

Owner.Channel = Owner.hasOne(Channel, {
  foreignKey: {
    name: "owner_id",
  },
});

Channel.Owner = Channel.belongsTo(Owner, {
  foreignKey: {
    name: "owner_id",
  },
});

Channel.Video = Channel.hasMany(Video, {
  foreignKey: {
    name: "channel_id",
  },
});

Video.Channel = Video.belongsTo(Channel, {
  foreignKey: {
    name: "channel_id",
  },
});

// INSERTING DATA INTO MULTIPLE TABLES SIMULTANEOUSLY USING 'INCLUDE' AND 'ASSOCIATION'
const createOwner = expressAsyncHandler(async (req, res) => {
  const owner = req.body;
  const { channel_id } = req.body.channel;
  console.log(channel_id);
  await Owner.create(owner, {
    include: [
      {
        association: Owner.Channel,
      },
      {
        association: Channel.Video,
      },
    ],
  });

  res.send({ msg: "User created!", payload: owner });
});

const getUsers = expressAsyncHandler(async (req, res) => {
  let users = await Owner.findAll({
    include: [
      {
        model: Channel,
      }, 
    ],
  });

  let videos = await Video.findAll({
    attributes: ["video_id", "video_title"],
  });

  res.send({ Msg: "All owners!", payload: users, videos });
});

const test = expressAsyncHandler(async (req, res) => {
  res.send({ Msg: "hello test" });
});

sequelize.sync({ force: true });

module.exports = {
  createOwner,
  getUsers,
  test,
};
