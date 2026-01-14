const Login = require('../models/LoginModel')

exports.registerHome = (req, res) => {
    res.render('register')
}

exports.register = async (req, res) => {
    try{
        const login = new Login(req.body)
        await login.register()
    
        if(login.errors.length > 0){
            req.flash('errors', login.errors)
            req.session.save(() =>{
                return res.redirect('/register')
            })
            return
        }
        
        req.flash('success, login created')
        req.session.save(() =>{
            return res.redirect('/login')
        })
    }catch(e){
        console.log(e)
        return res.render('404')
    }
}