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
  const [emailWorked, setEmailWorked] = useState(false);

  function sendEmail(e) {
    e.preventDefault();
    if (
      e.target.name.value === "" ||
      e.target.user_email.value === "" ||
      e.target.message.value === ""
    ) {
      if (e.target.name.value === "") {
        e.target.name.placeholder = "Name totally blank!";
        //setUserName("PLEASE ENTER NAME!");
      }
      if (e.target.user_email.value === "") {
        e.target.user_email.placeholder = "no email!!!";
        //setEmail("PLEASE ENTER EMAIL!");
      }
      if (e.target.message.value === "") {
        e.target.message.placeholder = "Message be blank!";
        //setMessage("Message is blank?");
      }
      return;
    } else {
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
            setEmailWorked(true);
          }
        })
        .catch((err) => {
          setButtonPopup(true);
          setEmailWorked(false);
          console.log(err);
        });
      setTempName(userName);
      wipeValues();
    }
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
      {emailWorked ? (
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <h1>Email Sent!</h1>
          <h2>Thank You {tempName}!</h2>
          <p>
            I will be reading my emails as soon as I can and get back with you!
          </p>
        </Popup>
      ) : (
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <h1>Uh, oh!</h1>
          <h2>
            Something went wrong with our email service. But don't worry, we
            will get it fixed ASAP so check back later!!
          </h2>
        </Popup>
      )}
    </div>
  );
}

export default MailAgent;
