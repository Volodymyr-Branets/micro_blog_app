import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const pages = [
  { title: "Home", path: "/" },
  { title: "New Post", path: "/new" },
  { title: "About", path: "/about" },
];

const Navbar = () => {
  const [openFlag, setOpenFlag] = useState(false);

  const navigate = useNavigate();

  const handleOpenDrawer = () => {
    setOpenFlag(true);
  };

  const handleCloseDrawer = () => {
    setOpenFlag(false);
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <AppBar position="static" component="nav">
      <Toolbar>
        <Typography
          variant="h4"
          sx={{
            flexGrow: 1,
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "Dancing Script",
          }}
          onClick={() => navigate("/")}
        >
          my blog
        </Typography>

        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "flex", md: "none" },
          }}
        >
          <IconButton
            size="large"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenDrawer}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>

          <SwipeableDrawer
            anchor="left"
            open={openFlag}
            onClose={handleCloseDrawer}
            onOpen={handleOpenDrawer}
          >
            <Box onClick={handleCloseDrawer}>
              <List>
                {pages.map((page) => (
                  <div key={page.title}>
                    <ListItem divider>
                      <ListItemButton>
                        <ListItemText
                          primary={page.title}
                          onClick={() => handleNavigate(page.path)}
                          sx={{
                            color: "primary.contrastText",
                          }}
                        />
                      </ListItemButton>
                    </ListItem>
                    <Divider />
                  </div>
                ))}
              </List>
            </Box>
          </SwipeableDrawer>
        </Box>

        <Typography
          variant="h4"
          sx={{
            mr: 2,
            flexGrow: 1,
            display: { xs: "flex", md: "none" },
            fontFamily: "Dancing Script",
          }}
          onClick={() => navigate("/")}
        >
          my blog
        </Typography>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
          }}
        >
          {pages.map((page) => (
            <Button
              color="inherit"
              key={page.title}
              onClick={() => handleNavigate(page.path)}
              sx={{ textTransform: "none" }}
            >
              {page.title}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
