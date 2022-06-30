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
      <Card.Header as="h2" style={{ background: 'seagreen', color: 'white', paddingLeft: '130px' }}>Contacts</Card.Header>
      <Card.Body>
        <ListGroup style={{ width: '370px', margin: '10px auto' }}>
          {contacts && getContacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          />
      ))}
        </ListGroup>
        </Card.Body>
      </Card>
  );
};
