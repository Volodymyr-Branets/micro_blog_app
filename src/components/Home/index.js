import PostsList from "../PostsList";
import useFetch from "../../hooks/useFetch";
import { Box, Typography } from "@mui/material";

const Home = () => {
  const {
    data: posts,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/posts");

  return (
    <div>
      <Typography align="center" component="h2" variant="h4" my={2}>
        Blog posts
      </Typography>
      <Box>
        {error && <div>{error}</div>}
        {isLoading && <div>Loading...</div>}
        {posts && <PostsList posts={posts} />}
      </Box>
    </div>
  );
};

export default Home;
