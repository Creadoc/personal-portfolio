import React from "react";
import "../styles/PageNotFound.css";
import { Helmet } from "react-helmet";

function PageNotFound() {
  return (
    <div>
      <Helmet>
        <title>Portfolio Page Not Found.</title>
        <meta
          name="The page is not found."
          content="Page cannot be found."
        ></meta>
      </Helmet>
      <h1>
        Uh, Sorry! I seem to have lost a page or it doesn't exist. Check back
        later!
      </h1>
    </div>
  );
}

export default PageNotFound;
