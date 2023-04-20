import BlogList from "../BlogList";
import useFetch from "../../hooks/useFetch";

const Home = () => {
  const {
    data: blogPosts,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/blogPosts");

  return (
    <div>
      <h2>Blog Posts</h2>
      <hr />
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {blogPosts && <BlogList blogPosts={blogPosts} />}
    </div>
  );
};

export default Home;
