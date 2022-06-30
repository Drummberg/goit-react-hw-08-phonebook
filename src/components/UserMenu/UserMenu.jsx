import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../../Redux/auth/auth-selectors';
import authOperations from '../../Redux/auth/auth-operations';
import { Navbar, Button } from 'react-bootstrap';
import male_avatar from '../image/male_avatar.svg'

export default function UserMenu() {
  const dispatch = useDispatch();
    const name = useSelector(authSelectors.getUsername);
   
  return (
    <Navbar.Collapse className="justify-content-end"><img className="rounded-circle me-3" src={male_avatar} alt="avatar" width="35" />
      <Navbar.Text className='me-3'>Welcome, {name}!</Navbar.Text>     
      <Button variant="outline-success" onClick={() => dispatch(authOperations.logOut())}>
        Log out
      </Button>
    </Navbar.Collapse>
  );
}