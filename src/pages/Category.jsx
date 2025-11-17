import { useParams } from "react-router";

const CategoryDetail = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>Détails de la catégorie avec l'ID : {id}</h2>
    </div>
  );
};
export default CategoryDetail;
