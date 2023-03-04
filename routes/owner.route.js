// creating express

const express = require("express");
const ownerApi = express.Router();

// body parser middleware
ownerApi.use(express.json());

const { createOwner, test , getUsers} = require("../controllers/owner.controller");

ownerApi.post("/create-owner", createOwner);
ownerApi.get("/test", test);
ownerApi.get("/get-users", getUsers);


module.exports = ownerApi;
