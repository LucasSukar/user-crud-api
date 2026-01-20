const Contacts = require('../models/ContactsModel')


exports.registerHome = (req, res) => {
    res.render('registerContacts')
}


exports.register = async (req, res) => {
    try{
        const contact = new Contacts(req.body)
        await contact.register()
        if(contact.errors.length > 0){
          req.flash('errors', contact.errors)
          req.session.save(() => res.redirect('/'))
        }
      
          req.flash('success', 'contact save')
          req.session.save(() => res.redirect('/'))
          return
    }catch(e){
        console.log(e)
        return res.render('404')
    }
}

