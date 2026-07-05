const express = require("express")

const projectController = require("../controllers/projectController")

const Router = express.Router()

Router.get('/', projectController.getProjects)
Router.post('/', projectController.createProject)

module.exports = Router

