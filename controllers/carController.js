const Car = require("./../models/Car.model")

exports.getCars = async (req, res) => {
  try {
    const foundCars = await Car.find()
    res.json(foundCars)
  } catch (error) {
    console.log("Error fetching all cars", error.message)
  }
}
