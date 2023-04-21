import About from "./components/About";
import NotFoundPage from "./components/NotFoundPage";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import NewPost from "./components/NewPost";
import PostDetails from "./components/PostDetails";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<NewPost />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs/:id" element={<PostDetails />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
