import { Navbar,Nav} from 'react-bootstrap';
import {Link} from "react-router-dom";

function Header() {
    return (
        <Navbar bg="primary" expand="lg" variant="dark">
  <Link to="/" className="navbar-brand ">Movies App</Link>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto" >
      <Link to ="/" className="nav-link">Home</Link >
      <Link to  ="/add-movie" className="nav-link">Add Movies</Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )

}
export default Header;