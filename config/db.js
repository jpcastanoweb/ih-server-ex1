const express = require("express")
const mongoose = require("mongoose")

const connectdb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })

    console.log("Database connected")
  } catch (error) {
    console.log("Error connecting to database: ", error)
    process.exit(1) //STOPS THE APP
  }
}

module.exports = connectdb
