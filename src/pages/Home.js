import React from "react";
import "../styles/Home.css";
import Me from "../styles/images/me.png";
import { Helmet } from "react-helmet";
//import { FormatAlignCenter } from "@material-ui/icons";

function Home() {
  return (
    <div>
      <Helmet>
        <title>Jimmy Collins Portfolio Home Page</title>
        <meta
          name="Jimmy Collins portfolio Home page"
          content="Just a little about
          me."
        ></meta>
      </Helmet>
      <div className="middleLoc">
        <h1>Welcome! I'm Jimmy.</h1>
        <img className="selfie" src={Me} alt="self" />
        <div className="informCard">
          <h3>Here is some info about me: </h3>
          <p>
            I don't even know where to start, but here goes. I obtained my
            Bachelor's Degree from
            <a
              className="linkr"
              href="https://uafs.edu/"
              rel="noopener noreferrer"
              target="_blank"
            >
              UAFS
            </a>
            in May of 2022. I have been working as an IT Co-Op for Rheem
            Manufacturing since November 2019. I am passionate about learning,
            especially when it comes to computer science and programming. Some
            of my hobbies are spending time with my children, video games,
            fitness, programming of course, and music, especially playing
            guitar. Questions? Feel free to use my "Contact Me" on the right to
            send me an email.
          </p>
        </div>
        <div className="cardz">
          <p className="internalCardText">
            Languages, libraries, and frameworks I've mostly worked with:
          </p>
          <ul className="cardList">
            <li>Java</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>ReactJS</li>
            <li>ExpressJS</li>
            <li>Node.JS</li>
            <li>.NET</li>
            <li>ASP.NET</li>
            <li>MYSQL</li>
            <li>C</li>
            <li>C++</li>
            <li>C#</li>
            <li>A little Python</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
