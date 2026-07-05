const express = require("express")

const contactController = require("../controllers/contactController")

const Router = express.Router()

Router.post('/' , contactController.sendContactEmail)

module.exports=Router