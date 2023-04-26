import { Box, Divider, Typography } from "@mui/material";

const About = () => {
  return (
    <Box>
      <Typography
        component="h2"
        variant="h4"
        align="center"
        my={2}
        color="secondary.dark"
      >
        About
      </Typography>
      <Divider />
      <Typography
        component="p"
        variant="h6"
        color="secondary.dark"
        align="center"
        m={2}
      >
        Welcome to your blog!
      </Typography>
    </Box>
  );
};

export default About;
