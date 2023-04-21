import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  const [author, setAuthor] = useState("");
  const [isPending, setIsPending] = useState(false);
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const post = { title, postText, author };
    setIsPending(true);
    fetch("http://localhost:8000/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    }).then(() => {
      setIsPending(false);
      console.log("new post aded");
      navigate("/");
    });
  };

  return (
    <div>
      <Typography align="center" variant="h2">
        Add new post
      </Typography>
      <hr />
      <Card
        sx={{
          maxWidth: 500,
          mx: "auto",
        }}
      >
        <CardContent>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={1}>
              <Grid xs={12} item>
                <TextField
                  label="Post title"
                  placeholder="Enter post title"
                  variant="outlined"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  label="Post text:"
                  multiline
                  rows={4}
                  placeholder="Write post text"
                  variant="outlined"
                  value={postText}
                  onChange={(e) => setPostText(e.target.value)}
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  label="Author name"
                  placeholder="Enter author name"
                  variant="outlined"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                {!isPending && (
                  <Button type="submit" variant="contained">
                    Add post
                  </Button>
                )}
                {isPending && (
                  <Button type="submit" variant="contained" disabled>
                    Saving...
                  </Button>
                )}
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default NewPost;
