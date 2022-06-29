import React from "react";
import "../styles/Experience.css";

function Experience() {
  return (
    <div>
      <div className="middleBar">
        <div className="mainCont">
          Rheem Manufacturing
          <div className="infoCont">
            <div>
              <div>
                Title: IT Co-Op <br />
              </div>
              <div className="aTest">
                Address: 4100 S. Zero St., <br />
                Fort Smith, Arkansas <br /> 72904
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
              </div>
              Start: 11/19 <br />
              End: N/A
            </div>
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

        <div className="mainCont">
          Fort Smith EMS
          <div className="infoCont">
            <div>
              <div className="yellow">
                Title: Paramedic <br /> Emergent calls and Hospital-to-Hospital
                transportation
              </div>
              <div className="aTest">
                Address: 3417 Duke Ave <br /> Fort Smith <br /> AR, 72908
                <div>Phone: (479) 783-1078</div>
                <div>
                  Website:
                  <a
                    href="http://www.fortsmithems.org"
                    rel="noreferrer"
                    target="_blank"
                    className="anchorColor"
                  >
                    www.fortsmithems.org
                  </a>
                </div>
              </div>
              <div>
                Start: 04/16 <br />
                End: 01/2022, but still on call there
              </div>
            </div>
          </div>
          <div className="subCont">
            <ul>
              <li> Certified ACLS, PALS, CPR, Pre-Hospital trauma</li>
              <li>Attend all emergency call-outs</li>
              <li> Attend to both emergent and non-emergent patients</li>
              <li>
                Paramedic level function, to include all duties and scope within
                the State of Arkansas
              </li>
              <li>
                Operated in both leadership and subordinate role on my unit as
                necessary
              </li>
              <li>Manage and assist in both large and small scale events</li>
            </ul>
          </div>
        </div>

        <div className="mainCont">
          Choctaw Nation
          <div className="infoCont">
            <div>
              <div className="red">
                Title: Armed Professional Security Officer <br /> On-foot and
                Bike Patrol
              </div>
              <div className="aTest">
                Address: 3400 Choctaw Rd., <br />
                Pocola, Oklahoma <br /> 74902
                <div>Phone: (918) 436-7761</div>
                Website:
                <a
                  href="http://www.choctawcasinos.com"
                  rel="noreferrer"
                  target="_blank"
                  className="anchorColor"
                >
                  www.choctawcasinos.com
                </a>
              </div>
              <div>
                Start: Sep 2010 & Nov 2015 <br />
                End: Sep 2012 & Apr 2016
              </div>
            </div>
          </div>
          <div className="subCont">
            <ul>
              <li> Armed security officer for Choctaw Nation </li>
              <li> Certified Bike patrol officer</li>
            </ul>
          </div>
        </div>

        <div className="mainCont">
          Franklin County EMS
          <div className="infoCont">
            <div className="orange">
              Title: Paramedic <br /> Emergent calls and Hospital-to-Hospital
              transportation
            </div>
            <div className="aTest">
              Address: 111 W Spring St, <br />
              Ozark, Arkansas <br /> 72904
              <div>Phone: (479) 667-4900</div>
              <div>
                Website:
                <a
                  href="https://www.facebook.com/FranklinCountyEMS/"
                  rel="noreferrer"
                  target="_blank"
                  className="anchorColor"
                >
                  www.facebook.com/FranklinCountyEMS/
                </a>
              </div>
              <div></div>
            </div>
            Start: 04/11 <br />
            End: 11/15
          </div>
          <div className="subCont">
            <ul>
              <li> Certified ACLS, PALS, CPR, Pre-Hospital trauma</li>
              <li>Attend all emergency call-outs</li>
              <li> Attend to both emergent and non-emergent patients</li>
              <li>
                Paramedic level function, to include all duties and scope within
                the State of Arkansas
              </li>
              <li>
                Operated in both leadership and subordinate role on my unit as
                necessary
              </li>
              <li>Manage and assist in both large and small scale events</li>
            </ul>
          </div>
        </div>

        <div className="mainCont">
          AR Army National Guard
          <div className="infoCont">
            <div className="green">
              Title: Combat Engineer <br /> 2006-2008 OIF Combat Veteran
            </div>
            <div>
              <div className="aTest">
                Address: Arkansas <br /> NA
                <div>Phone: NA</div>
                <div>
                  Website:
                  <a
                    href="http://arkansas.nationalguard.mil"
                    rel="noreferrer"
                    target="_blank"
                    className="anchorColor"
                  >
                    arkansas.nationalguard.mil
                  </a>
                </div>
              </div>
            </div>
            <div>
              Start: 12/04 <br />
              End: 10/09
            </div>
          </div>
          <div className="subCont">
            <ul>
              <li>Route clearance, utilize Buffalo for IED clearance</li>
              <li>Combat driver</li>
              <li>Robot operator</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
