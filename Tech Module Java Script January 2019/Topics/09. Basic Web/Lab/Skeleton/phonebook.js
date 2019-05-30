/* TODO: 
	create phonebook array
	add methods for adding in the phonebook and getting it
	export the methods
*/
const phonebook = [];

function addContact(contact) {
	phonebook.push(contact);
}

function getContacts() {
	return phonebook.slice();
}

module.exports = {
	addContact: addContact,
	getContacts: getContacts
};