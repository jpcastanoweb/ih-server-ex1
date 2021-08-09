const express = require("express")
const router = express.Router()

const carController = require("./../controllers/carController")

router.get("/", carController.getCars)
router.post("/create", carController.createCar)
router.post("/edit", carController.editCar)
router.post("/delete", carController.deleteCar)

module.exports = router
