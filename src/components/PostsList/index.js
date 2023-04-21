import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const PostsList = ({ posts }) => {
  return posts.map((post) => {
    return (
      <Box sx={{ minWidth: 275 }} key={post.id}>
        <Card variant="outlined">
          <CardContent
            component={Link}
            to={`/posts/${post.id}`}
            sx={{ textDecoration: "none" }}
          >
            <Typography variant="h5" component="div">
              {post.title}
            </Typography>
            <Typography variant="body2">{post.text}</Typography>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Writed by {post.author}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" data-id={post.id}>
              Delete
            </Button>
          </CardActions>
        </Card>
      </Box>
    );
  });
};

export default PostsList;
