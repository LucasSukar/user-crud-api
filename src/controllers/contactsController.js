const Contacts = require('../models/ContactsModel')


exports.registerHome = (req, res) => {
    res.render('Contacts', {
        contact: {}
    })
}


exports.register = async (req, res) => {
    try{
        const contact = new Contacts(req.body)
        await contact.register()
        if(contact.errors.length > 0){
          req.flash('errors', contact.errors)
          req.session.save(() => res.redirect('/'))
          return
        }
      
          req.flash('success', 'contact save')
          req.session.save(() => res.redirect('/'))
          return
    }catch(e){
        console.log(e)
        return res.render('404')
    }
}

exports.edit = async (req, res) => {
    if(!req.params.id) return res.render('404')
    const contact = await Contacts.getId(req.params.id)
    if(!contact) return res.render('404')

    res.render('Contacts', { contact })

}

