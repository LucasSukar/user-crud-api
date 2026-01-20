const Contact = require('../models/ContactsModel')

exports.homePage = async (req,res) => {
    if(!req.session.user){
        return res.render('index', {contacts:[]})
    }
    const contacts = await Contact.getContacts(req.session.user._id)
    res.render('index', {contacts})
}
