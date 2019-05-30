const phonebook = require('../phonebook');
const Contact = require('../models/Contact');

module.exports = {
  index: (req, res) => {
    // TODO: load index page
    res.render('index',{
      contacts: phonebook.getContacts()
    }
    
    );
    
  },
  addPhonebookPost:(req, res) => {
    // TODO: add a phonebook object to the array

    let {name, number} = req.body;
    let contact = new Contact(name, number);
    phonebook.addContact(contact);
    res.redirect('/');
  }
}