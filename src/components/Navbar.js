import { Tab } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div classname="navbar">
      <div classname="toggleButton">
        <button> BUTTON </button>
      </div>
      <div classname="links">
        <Link to="/">Home</Link> <Tab />
        <Link to="/projects">Projects</Link> <Tab />
        <Link to="/experience">Experience</Link> <Tab />
      </div>
    </div>
  );
}

export default Navbar;
