const Login = require('../models/LoginModel')

exports.loginHome = (req, res) => {
    res.render('login')
}

exports.login = async (req, res) => {
    try{
        const login = new Login(req.body)
        await login.login()
    
        if(login.errors.length > 0){
            req.flash('errors', login.errors)
            req.session.save(() =>{
                return res.redirect('/register')
            })
            return
        }
        
        req.flash('success' , 'login success')
        req.session.user = login.user
        req.session.save(() =>{
            return res.redirect('/')
        })
    }catch(e){
        console.log(e)
        return res.render('404')
    }
}

exports.logout = async (req,res) => {
    req.session.destroy()
    res.redirect('/')
}