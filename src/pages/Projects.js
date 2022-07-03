import React from "react";
import "../styles/Projects.css";
import { Helmet } from "react-helmet";

function Projects() {
  return (
    <div className="middleLoc">
      <Helmet>
        <title>Jimmy Collins Portfolio Projects Page</title>
        <meta
          name="Jimmy Collins portfolio projects page"
          content="Just some of my
          work I have online so far."
        ></meta>
      </Helmet>
      <h2 className="words">
        Here is a list of my projects, You'll find them on my GitHub account.
        Keep checking back for an update as I am usually working on something!
      </h2>
      <a
        href="https://github.com/Creadoc"
        rel="noreferrer"
        target="_blank"
        className="anchorColor"
      >
        My GitHub Profile
      </a>
    </div>
  );
}

export default Projects;
