import React, { useEffect, useState } from "react";
import "../styles/MailAgent.css";
import Emailjs from "emailjs-com";

function MailAgent() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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
      .catch((err) => {
        console.log(err);
      });
    wipeValues();
  }

  function wipeValues() {
    setUserName("");
    setEmail("");
    setMessage("");
  }

  return (
    <div className="position">
      <h1 className="title">Contact Me</h1>
      <form className="form" onSubmit={sendEmail}>
        <input
          className="name"
          type="text"
          name="name"
          onChange={(event) => setUserName(event.target.value)}
          value={userName}
          placeholder="Name"
        />
        <br />
        <input
          className="email"
          type="email"
          name="user_email"
          onChange={(event) => setEmail(event.target.value)}
          value={email}
          placeholder="Email"
        />
        <br />
        <textarea
          className="message"
          name="message"
          rows="4"
          onChange={(event) => setMessage(event.target.value)}
          value={message}
          placeholder="Message"
        />
        <br />
        <input className="submit" type="submit" value="Send" />
      </form>
    </div>
  );
}

export default MailAgent;
