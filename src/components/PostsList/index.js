import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const PostsList = ({ posts }) => {
  return posts.map((post) => {
    return (
      <Box sx={{ minWidth: 275 }} key={post.id}>
        <Card
          variant="outlined"
          sx={{
            maxWidth: 800,
            margin: "auto",
            px: 2,
            border: "none",
          }}
        >
          <CardContent
            component={Link}
            to={`/posts/${post.id}`}
            sx={{ textDecoration: "none" }}
          >
            <Typography variant="h5" component="div" color="primary.dark">
              {post.title}
            </Typography>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Writed by {post.author}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    );
  });
};

export default PostsList;
