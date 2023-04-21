import { useParams } from "react-router-dom";

const PostDetails = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>Post details - {id}</h2>
      <hr />
    </div>
  );
};

export default PostDetails;
