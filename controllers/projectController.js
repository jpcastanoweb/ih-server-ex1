const Project = require("./../models/Project.model")

exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find()
    res.json(projects)
  } catch (error) {
    console.log("Error fetching all projects", error.message)
  }
}
