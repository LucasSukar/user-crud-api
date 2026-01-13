const express = require("express")
const route = express.Router()
const homeController = require('./src/controllers/homeController')
const loginController = require('./src/controllers/loginController')



//home
route.get('/', homeController.homePage)

//login rotes
route.get('/login' , loginController.loginHome)

module.exports = route

