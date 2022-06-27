import { useSelector } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import AuthNav from 'components/AuthNav/AuthNav';
import UserMenu from 'components/UserMenu/UserMenu';
import authSelectors from '../../Redux/auth/auth-selectors';
import Container from 'react-bootstrap/Container';
import { Navbar, Nav } from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';

export default function AppBar() {
     const isLoggedIn = useSelector(authSelectors.isLoggedIn);

    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            bg="primary"
            variant="light"
            fixed="top"
        >
            <Container>
                <NavbarToggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto" variant="tabs" defaultActiveKey="/">
            <Navigation />
                    </Nav>
                <Nav variant="tabs">{isLoggedIn ? <UserMenu /> : <AuthNav />}</Nav>
                </Navbar.Collapse>
            </Container>
    </Navbar>
    )
    
}