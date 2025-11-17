import { Link } from "react-router";

function Header() {
  return (
    <header className="bg-light p-3">
      <nav className="d-flex justify-content-end">
        <Link to="/" className="text-decoration-none text-dark me-3">
          Accueil
        </Link>
        <Link
          to="/categorie/vetements"
          className="text-decoration-none text-dark me-3"
        >
          Vêtements
        </Link>
        <Link
          to="/categorie/chaussures"
          className="text-decoration-none text-dark"
        >
          Chaussures
        </Link>
      </nav>
    </header>
  );
}
export default Header;
