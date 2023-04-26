import { Divider, Typography } from "@mui/material";

const About = () => {
  return (
    <div>
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
    </div>
  );
};

export default About;
