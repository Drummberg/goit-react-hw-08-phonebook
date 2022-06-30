import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import Image from 'react-bootstrap/Image';
import addFriends from '../../image/addFriends.svg';
import people_search from '../../image/people_search.svg';

export default function Contacts() {
  return (
    <Container className="mt-4" style={{
      marginLeft: '200px',
    marginTop: '450px'}}>
      <Row>
        <Col>
          <Image src={addFriends} style={{
            width: '250px', marginTop: '65px', padding: '0px', position: 'absolute',
            top: '80px',
            left: '0px'
          }}></Image>
          <ContactForm />
          <Image src={people_search} style={{
            width: '192px', padding: '0px', position: 'absolute',
            top: '410px',
            left: '80px'
          }}></Image>
          <Filter />
        </Col>
        <Col>
          <ContactList />
        </Col>
      </Row>
    </Container>
  );
}