import { useParams } from "react-router";

const BlogDetail = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>Détails du blog avec l'ID : {id}</h2>
    </div>
  );
};
export default BlogDetail;
