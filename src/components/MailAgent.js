import React, { useEffect, useState } from "react";
import "../styles/MailAgent.css";
import Emailjs from "emailjs-com";

function MailAgent() {
  const [userName, setName] = useState("NAME");
  const [email, setEmail] = useState("EMAIL");
  const [message, setMessage] = useState("MESSAGE");

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
    wipeValues();
  }

  useEffect(() => {
    if (userName === "") {
    } else setName(userName);
  }, [userName]);

  useEffect(() => {
    if (email === "") {
    } else setName(email);
  }, [email]);

  useEffect(() => {
    if (message === "") {
    } else setName("");
  }, [message]);

  function wipeValues() {
    setName("");
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
          placeholder={userName}
        />
        <br />
        <input
          className="email"
          type="email"
          name="user_email"
          placeholder={email}
        />
        <br />
        <textarea
          className="message"
          name="message"
          rows="4"
          placeholder={message}
        />
        <br />
        <input className="submit" type="submit" value="Send" />
      </form>
    </div>
  );
}

export default MailAgent;
