const mongoose = require('mongoose')
const validator = require('validator')

const ContactsSchema = new mongoose.Schema({
    name: {type: String, required: true},
    surname: {type: String, required: false, default: ''},
    email: {type: String, required: false, default: ''},
    number: {type : String, required: false, default: ''},
    created: {type : Date, default: Date.now},
})

const ContactsModel = mongoose.model('Contacts', ContactsSchema)

function Contacts(body){
    this.body = body
    this.errors = []
    this.contacts = null
}

Contacts.prototype.register = async function(){ 
    this.valida()
    if(this.errors.length > 0) return
    this.contacts = await ContactsModel.create(this.body)
}

Contacts.prototype.valida = function(){
        this.cleanUp()
        if(this.body.email && !validator.isEmail(this.body.email)) this.errors.push('invalid email')
        if(!this.body.name) this.errors.push('name required')
        if(!this.body.email && !this.body.number) {
            this.errors.push('required email or number')
        }
    }

Contacts.prototype.cleanUp = function(){
    for(const key in this.body){
        if (typeof this.body[key] !== 'string'){
        this.body[key] = ''
        }
    }
    this.body = {
        name: this.body.name,
        surname: this.body.surname,
        email: this.body.email,
        number: this.body.number,
        created: this.body.created,
        
    }
}

module.exports = Contacts