const Project = require("./../models/Project.model")

exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find()
    res.json(projects)
  } catch (error) {
    console.log("Error fetching all projects", error.message)
  }
}

exports.createProject = async (req, res) => {
  const { name } = req.body
  try {
    const newProject = await Project.create({ name })

    res.json(newProject)
  } catch (error) {
    console.log("Error creating new Project:", error.message)
  }
}
