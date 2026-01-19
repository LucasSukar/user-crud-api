const express = require("express")
const route = express.Router()
const homeController = require('./src/controllers/homeController')
const loginController = require('./src/controllers/loginController')
const registerController = require('./src/controllers/registerController')



//home
route.get('/', homeController.homePage)

//login rotes
route.get('/login' , loginController.loginHome)
route.post('/login' , loginController.login )
route.get('/login/logout' , loginController.logout )
route.get('/register' , registerController.registerHome)
route.post('/register' , registerController.register )

module.exports = route

