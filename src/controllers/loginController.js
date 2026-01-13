const login = require('../models/LoginModel')

exports.loginHome = (req, res) => {
    res.render('login')
}

exports.register = async (req, res) => {
    const login = new LoginModel(req.body)
    await login.register()

    if(login.errors.length > 0){
        req.flash('errors', login.errors)
    }

    res.send(req.errors)
}