const mongoose = require("mongoose")

const carSchema = new mongoose.Schema({
  maker: String,
  model: String,
  color: String,
  year: Number,
})

const Car = mongoose.model("Car", carSchema)

module.exports = Car
