import React from "react";
import "../styles/Experience.css";

function Experience() {
  return (
    <div>
      <div className="top">Experience</div>
      <div className="mainCont">
        Rheem Manufacturing
        <div className="infoCont">
          <div>
            Address: 4100 S. Zero St., <br />
            Fort Smith, Arkansas <br /> 72904
          </div>
          <div>Phone: (479) 646-4311</div>
          <div>
            Website:{" "}
            <a
              href="http://www.rheem.com"
              rel="noreferrer"
              target="_blank"
              className="anchorColor"
            >
              www.rheem.com
            </a>
          </div>
          <div></div>
          <div>Start: 11/19 End: N/A</div>
        </div>
        <div className="subCont">
          <ul>
            <li>Imaging Service/New device setup</li>
            <li>Hardware & Software Troubleshooting and Repair</li>
            <li>Helpdesk Support</li>
            <li>Windows Server AD Management</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experience;
