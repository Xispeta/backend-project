const mongoose = require("mongoose");
const breed = require("../dog/breed.model");

const subbreedSchema = new mongoose.Schema(
  {
    breed: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "breed",
      required: true,
    },
    name: {
      type: String,
      required: true,
      uppercase: true,
      unique:true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

subbreedSchema.index({breed:1});

const Subbreed = mongoose.model("subbreed", subbreedSchema);

module.exports = Subbreed;
