import React, { useState } from "react";
import "../styles/MailAgent.css";
import Emailjs from "emailjs-com";
import Popup from "./Popup";

function MailAgent() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [buttonPopup, setButtonPopup] = useState(false);
  const [tempName, setTempName] = useState("");

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
        if (res.status === 200) {
          setButtonPopup(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    setTempName(userName);
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
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h1>Email Sent!</h1>
        <h2>Thank You {tempName}!</h2>
        <p>
          I will be reading my emails as soon as I can and get back with you!
        </p>
      </Popup>
    </div>
  );
}

export default MailAgent;
