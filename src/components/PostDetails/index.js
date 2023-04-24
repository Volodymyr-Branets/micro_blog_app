import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { Button } from "@mui/material";

const PostDetails = () => {
  const { id } = useParams();
  const {
    data: post,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/posts/" + id);
  let navigate = useNavigate();

  const handleDelete = () => {
    fetch("http://localhost:8000/posts/" + id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {error && <div> {error} </div>}
      {post && (
        <article>
          <h2>{post.title}</h2>
          <p>Written by {post.author}</p>
          <hr />
          <div>{post.text}</div>
          <Button onClick={handleDelete}>Delete</Button>
        </article>
      )}
    </div>
  );
};

export default PostDetails;
