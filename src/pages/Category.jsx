import { useParams } from "react-router";

const Category = () => {
  const { slug } = useParams();
  return (
    <div>
      <h2>Détails de la catégorie : {slug}</h2>
    </div>
  );
};

export default Category;
