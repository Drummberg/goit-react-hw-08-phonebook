import React from 'react';
import { useSelector } from 'react-redux';
import { useGetContactsQuery} from '../../../src/Redux/contactsApi';
import { getFilter } from 'Redux/contactsSlice';
import { ContactItem } from '../ContactItem/ContactItem';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';

export default function ContactList () {
  const { data: contacts, isSuccess } = useGetContactsQuery();
  
  const filterContacts = useSelector(getFilter);
  
  if (!isSuccess) {
    return;
  }

  const getContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filterContacts.toLocaleLowerCase())
    );
  
  return (
    <Card style={{ width: '400px', margin: '50px auto', borderStyle: 'none' }}>
      <Card.Header as="h2" style={{ background: '#000', color: 'white', paddingLeft: '100px' }}>Contacts List</Card.Header>
      <Card.Body>
        <ListGroup style={{ width: '470px', margin: '10px auto' }}>
          {contacts && getContacts.map(({ id, name, phone }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={phone}
          />
      ))}
        </ListGroup>
        </Card.Body>
      </Card>
  );
};
