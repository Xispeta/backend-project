const mongoose = require("mongoose");

const subbreedSchema = new mongoose.Schema(
  {
    breed: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "breed",
      required:true,
    },
    name:{
      type:String,
      required: true,
    },
    image:{
      type:String,
      required:true,
    }
  },
  { timestamps: true }
);

const Subbreed = mongoose.model("subbreed", subbreedSchema);

module.exports = Subbreed;
