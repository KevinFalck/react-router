import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router";

function Header() {
  return (
    <header>
      <Navbar bg="light">
        <Container fluid className="justify-content-end">
          <Nav>
            <Nav.Link as={Link} to="/">
              Accueil
            </Nav.Link>
            <Nav.Link as={Link} to="/categorie/vetements">
              Vêtements
            </Nav.Link>
            <Nav.Link as={Link} to="/categorie/chaussures">
              Chaussures
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}
export default Header;
