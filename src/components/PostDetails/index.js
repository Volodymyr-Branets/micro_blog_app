import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const PostDetails = () => {
  const { id } = useParams();
  const {
    data: post,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/posts/" + id);

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
        </article>
      )}
    </div>
  );
};

export default PostDetails;
