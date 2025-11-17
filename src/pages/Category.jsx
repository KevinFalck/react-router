import { useParams, useNavigate } from "react-router";

const Category = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <>
      <h2>Détails de la catégorie : {slug}</h2>
      <button onClick={handleClick} className="btn btn-primary mt-3">
        Retour à la page d'accueil
      </button>
    </>
  );
};

export default Category;
