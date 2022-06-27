import { useState } from 'react';
import { useGetContactsQuery, useAddContactsMutation } from '../../Redux/contactsApi';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card'

export default function ContactForm() {
  const { data: contacts } = useGetContactsQuery();
  const [addContact, { isLoading }] = useAddContactsMutation();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    if (contacts.find(contact => contact.name === name)) {
            return alert(`${name} is already in the contact list`);
        }

    addContact({ name: name, number: number });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  return (
    <Card style={{ width: '400px', margin: '50px auto', borderStyle: 'none' }}>
      <Card.Header as="h2" style={{ background: '#000', color: 'white', paddingLeft: '100px' }}> New contact</Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-4" controlId="formBasicText">
          <Form.Label>
              Name
          </Form.Label>
      <Form.Control
        type="text"
        name="name"
        value={name}
        placeholder="Enter name"
        onChange={handleChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
              />
      <Form.Label>Number</Form.Label>
      <Form.Control
        type="tel"
        name="number"
        value={number}
        placeholder="Enter number"
        onChange={handleChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      </Form.Group>
          <Button
            variant="dark"
            type="submit"
            style={{ background: '#000', color: 'white', marginLeft: '130px' }} disabled={isLoading}>Add contact</Button>
        </Form>
        </Card.Body>
      </Card>
  );
}


