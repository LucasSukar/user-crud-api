const express = require("express")
const route = express.Router()
const homeController = require('./src/controllers/homeController')
const loginController = require('./src/controllers/loginController')
const registerController = require('./src/controllers/registerController')
const contactsController = require('./src/controllers/contactsController')
const { loginRequired } = require('./src/middlewares/loginRequiredMiddleware')


//home
route.get('/', homeController.homePage)

//login rotes
route.get('/login' , loginController.loginHome)
route.post('/login' , loginController.login )
route.get('/login/logout' , loginController.logout )
route.get('/register' , registerController.registerHome)
route.post('/register' , registerController.register )
route.get('/Contacts' , loginRequired, contactsController.registerHome)
route.post('/Contacts/register' , contactsController.register )
route.get('/Contacts/index/:id' , contactsController.contactIndex )
route.post('/Contacts/edit/:id' , contactsController.edit )
route.get('/Contacts/delet/:id' , contactsController.delet )

module.exports = route

