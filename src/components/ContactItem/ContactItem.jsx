import React from 'react';
import PropTypes from 'prop-types';
import {useDeleteContactsMutation } from '../../Redux/contactsApi';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import avatar from '../../components/image/avatar.jpg';

export const ContactItem = ({ id, name, number}) => {
  const [deleteContact, {isLoading}] = useDeleteContactsMutation();

  const onDeleteContact = id => {
    deleteContact(id);
  }
  return (
    <ListGroup.Item key={id}>
      <Row>
        <Col>
          <Card.Text style={{ textAlign: 'left' }} className="rounded-circle me-3" src={avatar} alt="avatar">{name}</Card.Text>
          <Card.Text style={{ textAlign: 'left' }}>tel.:{number}</Card.Text>
        </Col>
        <Col>
      <Button
        variant="outline-danger"
        type="button"
        onClick={() => onDeleteContact(id)}
            disabled={isLoading}
            style={{ marginTop: '20px', marginLeft: '80px', }}
            
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
