import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Navbar from "./components/Navbar";
import ReactPlayer from "react-player";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import Mailer from "./components/MailAgent";
import PageNotFound from "./pages/PageNotFound";
import LinkBroken from "./pages/LinkBroken";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>My Portfolio.</title>
        <meta name="Portfolio App Page" content="Main Portfolio Page."></meta>
      </Helmet>
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
          <Route path="/linkBroken" element={<LinkBroken />}>
            Broken Link
          </Route>
          <Route path="*" element={<PageNotFound />}>
            Page Not Found
          </Route>
        </Routes>
        <Mailer />
        <div className="vid">
          <ReactPlayer
            url={"https://www.youtube.com/watch?v=tCs48OFv7xA"}
            playing={true}
            controls
            volume={0.3}
            width={"100%"}
          />
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
