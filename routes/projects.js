const express = require("express")
const router = express.Router()
const projectController = require("./../controllers/projectController")

router.get("/", projectController.getProjects)
router.post("/create", projectController.createProject)
router.post("/edit", projectController.editProject)
router.post("/delete", projectController.deleteProject)

module.exports = router
