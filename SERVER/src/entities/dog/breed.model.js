const mongoose = require("mongoose");

const breedSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      uppercase: true,
      maxLenght: 25,
    },
    size: {
      type: String,
      required: true,
      uppercase: true,
      enum: {
        values: ["BIG", "MEDIUM", "SMALL", "TOY"],
        message: "{VALUE} is not supported, values BIG, MEDIUM, SMALL OR TOY",
      },
    },
    adultWeight: {
      type: [Number, "{VALUE} is not an integer value"],
      // min:3 && max:100
      validate: {
        validator: function (adultWe) {
          debugger;
          console.log(adultWe);
          if (adultWe < 3 || adultWe > 100) {
            return false;
          }
        },
        message: "Weight {VALUE}, weight of the dog > 3Kg or <1 00 Kg",
      },
      required: true,
    },
  },
  { timestamps: true }
);

const Breed = mongoose.model("breed", breedSchema);

module.exports = Breed;
