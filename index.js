/* IMPORTACIONES */
const express = require("express")
const connectdb = require("./config/db")

const app = express()

/* MIDDLEWARES */

require("dotenv").config()

/* ROUTES */

/* SERVER */

app.listen(process.env.PORT, () => {
  console.log(`Listening on port: ${process.env.PORT}`)
})
