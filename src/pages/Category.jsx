import { useParams } from "react-router";

const Category = () => {
  const { slug } = useParams();
  return (
    <>
      <h2>Détails de la catégorie : {slug}</h2>
    </>
  );
};

export default Category;
