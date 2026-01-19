const mongoose = require('mongoose')
const validator = require('validator')
const bcryptjs = require('bcryptjs')

const LoginSchema = new mongoose.Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},
    
})

const LoginModel = mongoose.model('Login', LoginSchema)

class Login {
    constructor(body){
        this.body = body
        this.errors = []
        this.user = null
    }

    async register(){
        this.valida()
        if(this.errors.length > 0) return
        
        await this.userExists()

        if(this.errors.length > 0) return

        const salt = bcryptjs.genSaltSync()
        this.body.password = bcryptjs.hashSync(this.body.password, salt)
        try {
            this.user = await LoginModel.create(this.body)
        } catch(e){
            console.log(e)
        }
    }

    async userExists() {
        this.user = await LoginModel.findOne({ email: this.body.email})
        if(this.user) this.errors.push('This user already exists')
    }

    valida(){
        this.cleanUp()
        if(!validator.isEmail(this.body.email)) this.errors.push('invalid email')
        if(this.body.password.length < 3 || this.body.password.length >= 50 ){
            this.errors.push('a senha precisa ter entre 3 e 50 caracteres')
        }
    }

    cleanUp(){
        for(const key in this.body){
          if (typeof this.body[key] !== 'string'){
            this.body[key] = ''
          }
        }
    this.body = {
        email: this.body.email,
        password: this.body.password
    }
    }

    async login() {
        this.valida()
        if(this.errors.length > 0) return
        this.user = await LoginModel.findOne({ email: this.body.email})

        if(!this.user){
            this.errors.push('user not exists')
            return
        } 

        if(!bcryptjs.compareSync(this.body.password, this.user.password)){
            this.errors.push('invalid password')
            this.user = null
            return
        }
    }
}


module.exports = Login