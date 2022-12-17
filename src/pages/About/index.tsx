import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";

import "./index.less";

import * as social from "../../shared/config/socialLinks";
import * as config from "./config";

const About: React.FC = () => {
  return (
    <Fragment>
      <div>
        <div className="eloise" />
        {config.CV.map((text, i) => (<p key={i}>{text}</p>))}
      </div>
      <div className="about-links">
        <a className="about-link" href={social.INSTA_LINK}>
          <FontAwesomeIcon className="link-icon" icon={faInstagram}/> 
          {social.KAGERLIGHED_KBH}
        </a>
        <a className="about-link" href={social.FB_LINK}>
          <FontAwesomeIcon className="link-icon" icon={faFacebook}/> 
          {social.KAGERLIGHED_KBH}
        </a>
      </div>
    </Fragment>
  );
};

export default About;