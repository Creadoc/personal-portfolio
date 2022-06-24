import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Navbar from "./components/Navbar";
import ReactPlayer from "react-player";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}>
            Home
          </Route>
          <Route path="/projects" element={<Projects />}>
            Projects
          </Route>
          <Route path="/experience" element={<Experience />}>
            Experience
          </Route>
        </Routes>
      </Router>
      <div className="vid">
        <ReactPlayer
          className="player"
          url={"https://www.youtube.com/watch?v=tCs48OFv7xA"}
          playing={true}
          controls
          volume={0.3}
        />
      </div>
    </div>
  );
}

export default App;
