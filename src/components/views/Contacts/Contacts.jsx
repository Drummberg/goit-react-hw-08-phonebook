import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';

export default function Contacts() {
  return (
    <Container className="mt-4">
      <h2>Phonebook</h2>
      <Row>
        <Col>
          <ContactForm />
          <Filter />
        </Col>
        <Col>
          <ContactList />
        </Col>
      </Row>
    </Container>
  );
}