const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const breedSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      uppercase: true,
      maxLenght: 25,
      
    },
    size: {
      type: String,
      required: true,
      uppercase: true,
      enum: ["BIG", "MEDIUM", "SMALL", "TOY"],
      message: "{VALUE} is not supported, values BIG, MEDIUM, SMALL OR TOY",
    },
    adultWeight: {
      type: Number,
      min: [3, "Weight {VALUE}, weight of the dog > 3Kg"],
      max: [100, "Weight {VALUE}, weight of the dog < 100 Kg"],
      required: true,
    },
  },

  { timestamps: true }
);

breedSchema.path("size").options.enum;

breedSchema.index({ name: 1 }, { unique: true , dropDrups:true});
breedSchema.plugin(uniqueValidator);

const breed = mongoose.model("breed", breedSchema);



module.exports = breed;
