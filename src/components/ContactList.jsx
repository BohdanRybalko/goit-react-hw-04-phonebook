import React from 'react';
import ContactItem from './ContactItem';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <div>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} onDeleteContact={onDeleteContact} />
      ))}
    </div>
  );
};

export default ContactList;
