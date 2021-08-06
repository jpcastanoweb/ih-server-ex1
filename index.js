/* IMPORTACIONES */
const express = require("express")
const connectdb = require("./config/db")
const cors = require("cors")

const app = express()

/* MIDDLEWARES */

// ---- environment variables
require("dotenv").config()
// ---- database connection
connectdb()
// ---- Enable CORS
app.use(cors())

/* ROUTES */

// ---- API
app.use("/api/projects", require("./routes/projects"))
app.use("/api/cars", require("./routes/cars"))

// ---- Monitoring
app.use("/", (req, res) => {
  res.send("Hola mundo")
})

/* SERVER */

app.listen(process.env.PORT, () => {
  console.log(`Listening on port: ${process.env.PORT}`)
})
