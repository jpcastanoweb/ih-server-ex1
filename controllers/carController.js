const Car = require("./../models/Car.model")

exports.getCars = async (req, res) => {
  try {
    const foundCars = await Car.find()
    res.json(foundCars)
  } catch (error) {
    console.log("Error fetching all cars", error.message)
  }
}

exports.createCar = async (req, res) => {
  const { car } = req.body
  try {
    const newCar = await Car.create(car)
    res.json(newCar)
  } catch (error) {
    console.log("Error creating car in db: ", error.message)
  }
}

exports.editCar = async (req, res) => {
  const { carId, car } = req.body
  try {
    const editedCar = await Car.findByIdAndUpdate(carId, car, { new: true })
    res.json(editedCar)
  } catch (error) {
    console.log("Error editing car in db: ", error.message)
  }
}

exports.deleteCar = async (req, res) => {
  const { carId } = req.body
  try {
    const deletedCar = await Car.findByIdAndDelete(carId)
    res.json({
      message: "Successfuly delete car",
      deletedCar,
    })
  } catch (error) {
    console.log("Error deleting car in db: ", error.message)
  }
}
