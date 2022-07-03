import React from "react";
import "../styles/PopupStyle.css";
function Popup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        {props.children}
        <button onClick={() => props.setTrigger(false)}>Close</button>
        <p className="bottomMessage">~Safe travels wherever you go!~</p>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
