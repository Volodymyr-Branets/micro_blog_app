import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { Box, Button, Divider, Typography } from "@mui/material";
import Loading from "../Loading";

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
    <Box>
      {isLoading && <Loading />}
      {error && <div> {error} </div>}
      {post && (
        <Box component="article" m={2}>
          <Typography component="h2" variant="h4" color="secondary.dark">
            {post.title}
          </Typography>
          <Typography
            component="p"
            sx={{ fontSize: 14 }}
            color="text.secondary"
            gutterBottom
          >
            Written by {post.author}
          </Typography>
          <Divider />
          <Typography component="p" my={2}>
            {post.text}
          </Typography>
          <Button variant="contained" onClick={handleDelete}>
            Delete
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default PostDetails;
