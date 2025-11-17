import { useParams } from "react-router";

const Category = () => {
  const { slug } = useParams();
  return (
    <div>
      <h2 className="my-3">Détails de la catégorie : {slug}</h2>
    </div>
  );
};

export default Category;
