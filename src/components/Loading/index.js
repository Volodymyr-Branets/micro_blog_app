import { Box, CircularProgress, Typography } from "@mui/material";

const Loading = () => {
  return (
    <Box>
      <Typography
        align="center"
        component="h2"
        variant="h5"
        my={2}
        color="secondary.dark"
      >
        Wait a second...
      </Typography>
      <Box display="flex" justifyContent="center">
        <CircularProgress />
      </Box>
    </Box>
  );
};

export default Loading;
