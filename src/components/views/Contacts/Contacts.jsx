import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import { H2 } from '../../views/Contacts/Contacts.styled';

export default function Contacts() {
  return (
    <Container className="mt-4">
      <H2>My phonebook</H2>
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