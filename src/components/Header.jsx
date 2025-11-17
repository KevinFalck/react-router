import { NavLink } from "react-router";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "./Header.css";

function Header() {
  return (
    <Navbar bg="light" expand="lg" className="p-3">
      <Container fluid>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" className="text-dark">
              Accueil
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/categorie/vetements"
              className="text-dark"
            >
              Vêtements
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/categorie/chaussures"
              className="text-dark"
            >
              Chaussures
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Header;
