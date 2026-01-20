const Contact = require('../models/ContactsModel')

exports.homePage = async (req,res) => {
    const contacts = await Contact.getContacts()
    res.render('index', {contacts})
}
