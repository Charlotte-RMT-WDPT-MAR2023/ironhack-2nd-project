const { Schema, model } = require("mongoose");

const eventSchema = new Schema(
  {
    date: {
      type: Date,
      required: [true, "Date is required."],
      unique: true
    },
    time: {
      type: Date
    },
    location: {
      type: String,
      required: [true, "Location is required."]
    },
    guests: [guestSchema]
  },
  {
    timestamps: true
  }
);

module.exports = model("Event", eventSchema);


