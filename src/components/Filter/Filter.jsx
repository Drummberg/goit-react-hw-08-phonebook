import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filter, getFilter} from '../../Redux/contactsSlice'
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

export default function Filter() {
  const {name} = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleFilter = event => {
    dispatch(filter(event.target.value));
  };

  return (
    <Card style={{ width: '400px', margin: '40px auto', borderStyle: 'none' }}>
      <Card.Header as="h2" style={{ background: 'seagreen', color: 'white', paddingLeft: '100px' }}>Find contacts</Card.Header>
    <Card.Body>
        <Form.Control
          type="text"
          name="filter"
          value={name}
          onChange={handleFilter}
          placeholder="Enter name your contact" />
    </Card.Body>
    </Card>
  );
}


