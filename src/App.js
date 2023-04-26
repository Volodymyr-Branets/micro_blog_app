import About from "./components/About";
import NotFoundPage from "./components/NotFoundPage";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import NewPost from "./components/NewPost";
import PostDetails from "./components/PostDetails";
import { ThemeProvider, createTheme } from "@mui/material";
import { brown, teal } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: teal[400],
    },
    secondary: brown,
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    title: {
      fontFamily: "Quicksand",
      fontWeight: 500,
      fontSize: "1.75rem",
      color: "#ef6c00",
    },
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: teal[400],
        },
      },
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<NewPost />} />
          <Route path="/about" element={<About />} />
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
