require('dotenv').config()
const express = require('express')
const app = express()

const mongoose = require('mongoose')
mongoose.connect(process.env.CONNECTIONSTRING)
  .then(() => {
    console.log('connected on database')
    app.emit('safe to start')
  })
  .catch(e => console.log(e))

const session = require('express-session')
const MongoStore = require('connect-mongo').default
const flash = require('connect-flash')
const helmet = require('helmet')
const csrf = require('csurf')

const routes = require('./routes')
const globalMiddleware = require('./src/middlewares/globalMiddleware')
const csrfMiddleware = require('./src/middlewares/csrfMiddleware')

// Segurança
app.use(helmet())

// Body
app.use(express.urlencoded({ extended: true }))
app.use(express.static('./public'))

// Session
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: process.env.CONNECTIONSTRING
  }),
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true
  }
}))

app.use(flash())

// CSRF (cria req.csrfToken)
app.use(csrf())

// Views
app.set('views', './src/views')
app.set('view engine', 'ejs')

// Middlewares NORMAIS
app.use(globalMiddleware)          
app.use(csrfMiddleware.csrfMidd)  

// Rotas
app.use(routes)

// Middleware de ERRO (SEMPRE POR ÚLTIMO)
app.use(csrfMiddleware.csrfError)

app.on('safe to start', () => {
  app.listen(3000, () => {
    console.log('access http://localhost:3000')
  })
})
