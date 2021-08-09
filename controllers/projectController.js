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

exports.editProject = async (req, res) => {
  const { projectId, name } = req.body

  try {
    const foundProject = await Project.findByIdAndUpdate(
      projectId,
      {
        name,
      },
      { new: true }
    )
    res.json(foundProject)
  } catch (error) {
    console.log("Error updating project ", error.message)
  }
}

exports.deleteProject = async (req, res) => {
  const { projectId } = req.body

  try {
    const deletedProject = await Project.findOneAndRemove({ _id: projectId })
    res.json(deletedProject)
  } catch (error) {
    console.log("Error deleting project", error.message)
  }
}
