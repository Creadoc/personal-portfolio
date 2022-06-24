import React from "react";
import "../styles/MailAgent.css";
import Emailjs from "emailjs-com";

function MailAgent() {
  function sendEmail(e) {
    e.preventDefault();

    Emailjs.sendForm(
      "service_8tggl09",
      "template_zjd51lf",
      e.target,
      "eS3tnZ6NI4NOdgeJw"
    )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="position">
      <h1 className="title">Contact Me</h1>
      <form className="form" onSubmit={sendEmail}>
        <input className="name" type="text" name="name" placeholder="Name" />
        <br />
        <input
          className="email"
          type="email"
          name="user_email"
          placeholder="Email"
        />
        <br />
        <textarea
          className="message"
          name="message"
          rows="4"
          placeholder="Message"
        />
        <br />
        <input className="submit" type="submit" value="Send" />
      </form>
    </div>
  );
}

export default MailAgent;
