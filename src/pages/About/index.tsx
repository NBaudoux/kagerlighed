import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";

import "./index.less";

import * as config from "./config";

const About: React.FC = () => {
  return (
    <Fragment>
      <div>
        {config.CV.map((text, i) => (<p key={i}>{text}</p>))}
      </div>
      <div className="about-links">
        <a className="about-link" href={config.INSTA_LINK}>
          <FontAwesomeIcon icon={faInstagram}/> 
          {config.KAGERLIGHED_KBH}
        </a>
        <a className="about-link" href={config.FB_LINK}>
          <FontAwesomeIcon icon={faFacebook}/> 
          {config.KAGERLIGHED_KBH}
        </a>
      </div>
    </Fragment>
  );
};

export default About;