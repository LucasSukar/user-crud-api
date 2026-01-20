const Contacts = require('../models/ContactsModel')


exports.registerHome = (req, res) => {
    res.render('Contacts', {
        contact: {}
    })
}


exports.register = async (req, res) => {
    try{
        const user = {
            ...req.body,
            id_user: req.session.user._id
        }
        const contact = new Contacts(user)
        await contact.register()
        if(contact.errors.length > 0){
          req.flash('errors', contact.errors)
          req.session.save(() => res.redirect('/Contacts'))
          return
        }
      
          req.flash('success', 'contact save')
          req.session.save(() => res.redirect(`/Contacts/index/${contact.contacts._id}`))
          return
    }catch(e){
        console.log(e)
        return res.render('404')
    }
}

exports.contactIndex = async (req, res) => {
    if(!req.params.id) return res.render('404')
    const contact = await Contacts.getId(req.params.id)
    if(!contact) return res.render('404')

    res.render('Contacts', { contact })
}

exports.edit = async (req, res) => {
    try{
        if(!req.params.id) return res.render('404')
        const contact = new Contacts(req.body)
        await contact.edit(req.params.id)
        if(contact.errors.length > 0){
            req.flash('errors', contact.errors)
            req.session.save(() => res.redirect('/'))
            return
        }
        req.flash('success', 'contact edited')
        req.session.save(() => res.redirect(`/Contacts/index/${contact.contacts._id}`))
        return
    }catch(e){
        console.log(e)
        res.render('404')
    }
}
exports.delet = async (req, res) => {
    try {

        if(!req.params.id) return res.render('404')
        const contact = await Contacts.delet(req.params.id)
        if(!contact) return res.render('404')
        req.flash('success', 'Contact deleted.')
        req.session.save(() => res.redirect('/')) 
        return

    } catch(e) {
        console.log(e)
        res.render('404')
    }
}

