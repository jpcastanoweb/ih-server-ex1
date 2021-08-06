/* IMPORTACIONES */
const express = require("express")
const connectdb = require("./config/db")

const app = express()

/* MIDDLEWARES */

// ---- environment variables
require("dotenv").config()
// ---- database connection
connectdb()

/* ROUTES */

/* SERVER */

app.listen(process.env.PORT, () => {
  console.log(`Listening on port: ${process.env.PORT}`)
})
