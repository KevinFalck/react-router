import { NavLink, useMatch } from "react-router";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "./Header.css";

function Header() {
  const match = useMatch("/categorie/:slug");

  return (
    <header>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          {match && (
            <Navbar.Text className="me-3">
              Catégorie : {match.params.slug}
            </Navbar.Text>
          )}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to="/">
                Accueil
              </Nav.Link>
              <Nav.Link as={NavLink} to="/categorie/vetements">
                Vêtements
              </Nav.Link>
              <Nav.Link as={NavLink} to="/categorie/chaussures">
                Chaussures
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
export default Header;
