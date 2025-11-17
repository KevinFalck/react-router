import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router";

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link as={Link} to="/">
              Accueil
            </Nav.Link>
            <Nav.Link as={Link} to="/categorie/1">
              Vêtements
            </Nav.Link>
            <Nav.Link as={Link} to="/categorie/2">
              Chaussures
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Header;
