import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        {/* <a className="otherApps" href="/LinkBroken">
          <InstagramIcon />
        </a>
        <a className="otherApps" href="/LinkBroken">
          <TwitterIcon />
        </a>
        <a className="otherApps" href="/LinkBroken">
          <FacebookIcon />
        </a> */}
        <a
          className="otherApps"
          rel="noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/jimmy-collins-21113a135"
        >
          <LinkedInIcon />
        </a>
      </div>
      <p> &copy; 2022 Creadoc.com</p>
    </div>
  );
}

export default Footer;
