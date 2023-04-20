import { useState, useEffect } from "react";
import BlogList from "../BlogList";

const Home = () => {
  const [blogPosts, setBlogPosts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/blogPosts")
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not download data from server");
        }
        return res.json();
      })
      .then((data) => {
        setBlogPosts(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

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
