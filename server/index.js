import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import route from "./routes/userRoute.js";
import cors from "cors";

// const express = require("express");
// const mongoose = require("mongoose");
// const bodyParser = require("bodyParser");
// const dotenv = require("dotenv");

const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 7000;

const MONGOURL =
  "mongodb://user:user1234@ac-0fdj1je-shard-00-00.yjjhdo5.mongodb.net:27017,ac-0fdj1je-shard-00-01.yjjhdo5.mongodb.net:27017,ac-0fdj1je-shard-00-02.yjjhdo5.mongodb.net:27017/?ssl=true&replicaSet=atlas-jdne4u-shard-0&authSource=admin&retryWrites=true&w=majority&appName=mern-todo";

mongoose
  .connect(MONGOURL)
  .then(() => {
    console.log("DB connected successfully.");
    app.listen(PORT, () => {
      console.log(`Server is running on port :${PORT} `);
    });
  })
  .catch((error) => console.log(error));

app.use("/api", route);
