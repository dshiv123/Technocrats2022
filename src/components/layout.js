import { Outlet } from "react-router-dom";
import {Navbar,Container,Nav,NavDropdown, Col} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import userinfo from "../_helpers/user";
import {RoleConstants} from '../constants/role.constants';

const Layout = () => {
  const user = useSelector(state => state.authentication.user);
  return (

    <>
    { localStorage.getItem('user') && userinfo &&
      <Navbar bg={userinfo.role===RoleConstants.ADMIN?"dark":"primary"} variant="dark" expand="lg">
  <Container>
    <Navbar.Brand href="/dashboard">Celsior Tech</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      <Link to="/dashboard" className="nav-link">Dashboard</Link>
      <Link to="/updateprofile" className="nav-link">Update Profile</Link>
      
        <Nav.Link href="/logout">Log out</Nav.Link>
        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown> */}

      </Nav>
    </Navbar.Collapse> 
    <div className="text-light">Hi {user.firstName} {user.lastName}</div>
  </Container>
</Navbar>
}
<Container>
  <Col>
      <Outlet />
      </Col>
      </Container>
      
    </>
  )
};

export default Layout;