const { Schema, model } = require("mongoose");

const guestSchema = new Schema({
  name: {
    type: String,
    trim: true,
  },
  plusOne: {
    type: String,
    trim: true,
  },
  alleryInfo: {
    type: String,
    trim: true,
  },
  dietaryInfo: {
    type: String,
    trim: true,
  },
  meal: {
    type: String,
    trim: true,
  },
  mealAllergens: {
    type: String,
    trim: true,
  },
  mealDietary: {
    type: String,
    trim: true,
  },
});

module.exports = model("Guest", guestSchema);
