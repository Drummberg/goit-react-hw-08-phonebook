import React from 'react';
import PropTypes from 'prop-types';
import {useDeleteContactsMutation } from '../../Redux/contactsApi';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';

export const ContactItem = ({ id, name, number}) => {
  const [deleteContact, {isLoading}] = useDeleteContactsMutation();

  const onDeleteContact = id => {
    deleteContact(id);
  }
  return (
    <ListGroup.Item key={id}>
      <Row>
        <Col>
          <Card.Text style={{ textAlign: 'left' }}>{name}</Card.Text>
          <Card.Text style={{ textAlign: 'left' }}>tel.:{number}</Card.Text>
        </Col>
        <Col>
      <Button
        variant="dark"
        type="button"
        onClick={() => onDeleteContact(id)}
        disabled={isLoading}     
      >
        Delete
          </Button>
        </Col>
      </Row>
    </ListGroup.Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  };
