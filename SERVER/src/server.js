const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const config = require("./config");
const db = require("./db");
const breedRouter = require('./entities/dog/breed.router');
const subbreedRouter = require('./entities/subbreed/subbreed.router');
//const Breed = require('./entities/dog/breed.model');
//const breedControllers= require('./entities/dog/breed.controllers');

const app = express();

//Midleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/breeds",breedRouter);
app.use("/subbreeds",subbreedRouter);

/*app.get("/breeds",breedControllers.getMany);
app.post("/breed",breedControllers.createOne);*/

const startServer = async () => {
  try {
    await db.connect();
    app.listen(config.port, () => {
      console.log(`Dog API listening on ${config.port}`);
    });
  } catch (e) {
    console.error(e);
  }
};

startServer();
