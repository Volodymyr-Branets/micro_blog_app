import PostsList from "../PostsList";
import useFetch from "../../hooks/useFetch";

const Home = () => {
  const {
    data: posts,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/posts");

  return (
    <div>
      <h2>Blog posts</h2>
      <hr />
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {posts && <PostsList posts={posts} />}
    </div>
  );
};

export default Home;
