const express = require("express")
const route = express.Router()
const homeController = require('./src/controllers/homeController')
const globalMiddleware = require('./src/middlewares/globalMiddleware')

//home
route.get('/', homeController.homePage)
route.post('/', homeController.homePost)

module.exports = route

