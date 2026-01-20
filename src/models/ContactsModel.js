const mongoose = require('mongoose')
const validator = require('validator')

const ContactsSchema = new mongoose.Schema({
    name: {type: String, required: true},
    surname: {type: String, required: false, default: ''},
    email: {type: String, required: false, default: ''},
    number: {type : String, required: false, default: ''},
    created: {type : Date, default: Date.now},
    id_user: {type: String, Required: true}
})

const ContactsModel = mongoose.model('Contacts', ContactsSchema)

class Contacts{
    constructor(body){
        this.body = body
        this.errors = []
        this.contacts = null
    }

    async register(){ 
        this.valida()
        if(this.errors.length > 0) return
        this.contacts = await ContactsModel.create(this.body)
    }

    valida(){
        this.cleanUp()
        if(this.body.email && !validator.isEmail(this.body.email)) this.errors.push('invalid email')
        if(!this.body.name) this.errors.push('name required')
        if(!this.body.email && !this.body.number) {
            this.errors.push('required email or number')
        }
    }

    cleanUp(){
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
            id_user: this.body.id_user
            
        }
    }

    static async getId(id) {
        if(typeof id !== 'string') return
        const Contact = await ContactsModel.findById(id)
        return Contact
    }

    static async getContacts(id) {
        const Contact = await ContactsModel.find({id_user: id})
        .sort({createdIn: -1 })
        return Contact
    }
    static async delet(id) {
        if(typeof id !== 'string') return
        const Contact = await ContactsModel.findOneAndDelete({_id: id})
        return Contact
    }

    async edit(id) {
        if(typeof id !== 'string') return
        this.valida()
        if(this.errors.length > 0) return
        this.contacts = await ContactsModel.findByIdAndUpdate(id,this.body, {new: true})
    }
}

module.exports = Contacts