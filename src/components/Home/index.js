import PostsList from "../PostsList";
import useFetch from "../../hooks/useFetch";
import { Box, Typography } from "@mui/material";
import Loading from "../Loading";

const Home = () => {
  const {
    data: posts,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/posts");

  return (
    <Box>
      <Typography
        component="h2"
        variant="h4"
        align="center"
        my={2}
        color="secondary.dark"
      >
        Blog posts
      </Typography>
      <Box>
        {error && <div>{error}</div>}
        {isLoading && <Loading />}
        {posts && <PostsList posts={posts} />}
      </Box>
    </Box>
  );
};

export default Home;
