import React from "react";
import "../styles/LinkBroken.css";
import { Helmet } from "react-helmet";

function LinkBroken() {
  return (
    <div>
      <Helmet>
        <title>Page for broken web links.</title>
        <meta
          name="page doesn't exist."
          content="Here if page is broke or doesn't
          exist."
        ></meta>
      </Helmet>
      <h1>
        Oh boy! This Link doesn't currently work right now. Check back later!
      </h1>
    </div>
  );
}

export default LinkBroken;
