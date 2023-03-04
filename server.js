const express = require("express");
const app = express();
require("dotenv").config();
const { Sequelize } = require("sequelize");

const PORT = 3000 || process.env.PORT;

const sequelize = require("./db/db.config");

// checking db connection

sequelize
  .authenticate()
  .then(() => console.log("DB connection success"))
  .catch((err) => console.log(err));

const ownerApi = require("./routes/owner.route");
app.use("/owner-api", ownerApi);


app.get("/test", (req, res) => {
  res.send("Hello!");
});



// wrong path middleware
app.use("*", (req, res) => {
  res.send({ Msg: "Wrong path!" });
});

// // CATCHING ERROR middleware
app.use((err, req, res, next) => {
  res.send({ errMsg: err.message });
});

app.listen(3000, console.log(`Server running at port ${PORT}!`));
