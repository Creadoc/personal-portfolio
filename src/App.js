import "./App.css";
import React from "react";
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
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const client = new QueryClient({
    defaultOptions: { queries: { refetchOnWindowFocus: false } },
  });
  return (
    <div className="App">
      <Helmet>
        <title>My Portfolio.</title>
        <meta name="Portfolio App Page" content="Main Portfolio Page."></meta>
      </Helmet>
      <QueryClientProvider client={client}>
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
              url={"https://www.youtube.com/watch?v=LvtFH9qzW4g"}
              playing={true}
              controls
              volume={0.3}
              width={"100%"}
            />
          </div>
          <Footer />
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
