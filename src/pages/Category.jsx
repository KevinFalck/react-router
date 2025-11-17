import { useParams, useNavigate } from "react-router";
import Button from "react-bootstrap/Button";

const Category = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <>
      <h2>Détails de la catégorie : {slug}</h2>
      <Button variant="primary" onClick={handleClick}>
        Retour à la page d'accueil
      </Button>
    </>
  );
};

export default Category;
