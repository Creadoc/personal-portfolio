import React from "react";
import "../styles/Home.css";

function Home() {
  return (
    <div>
      <div className="middleLoc">
        <h1>Welcome! I'm Jimmy.</h1>
        <h3>Here is some info about me: </h3>
        <p>
          I don't even know where to start, but here goes. I obtained my
          Bachelor's Degree from
          <a
            className="linkr"
            href="https://uafs.edu/"
            rel="noreferrer"
            target="_blank"
          >
            UAFS
          </a>
          in May of 2022. I have been working as an IT Co-Op for Rheem
          Manufacturing since November 2019. I am a father to 5 wonderful
          children. I am passionate about learning, especially when it comes to
          computer science and programming.
        </p>
      </div>
    </div>
  );
}

export default Home;
