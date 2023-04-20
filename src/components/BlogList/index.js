import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const BlogList = ({ blogPosts }) => {
  return blogPosts.map((post) => {
    return (
      <Box sx={{ minWidth: 275 }} key={post.id}>
        <Card variant="outlined">
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Writed by {post.author}
            </Typography>
            <Typography variant="h5" component="div">
              {post.title}
            </Typography>
            <Typography variant="body2">
              {post.text}
              <br />
              {'"a benevolent smile"'}
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

export default BlogList;
