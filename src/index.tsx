import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import ReactDOM from "react-dom";

import HeaderButton from "./headerButton";
import "./index.less";
import About from "./pages/About";
import HomePage from "./pages/HomePage";
import Menu from "./pages/Menu";

import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import * as config from "./config";
import * as social from "./shared/config/socialLinks";

const Main: React.FC = () => {
  const title = "Kagerlighed";

  const content = () => {
    switch(selectedTab){
    case 0: {
      return <HomePage toMenu={() => setSelectedTab(1)}/>;}
    case 1: 
      return <Menu/>;
    case 2: 
      return <About />;
    }};

  const [selectedTab, setSelectedTab] = useState<number>(0);

  return (
    <>
      <div className="header">
        <a href="index" className="home-shortcut">{title}</a>
        {config.tabs.map((tab, i) => {
          return <HeaderButton icon={tab.icon} index={i} key={`TAB_${i}`} selected={selectedTab} setSelected={setSelectedTab} value={tab.text} />;
        })}
      </div>
      <div className="content">
        {content()}
      </div>
      <div className="bottom">
        <div>
          <a className="about-link" href={config.PHONE_LINK}>
            <FontAwesomeIcon className="link-icon" icon={faPhone} />
            <span>{config.PHONE}</span>
          </a>
        </div>
        <div>
          <a className="about-link" href={config.MAIL_LINK}>
            <FontAwesomeIcon className="link-icon" icon={faEnvelope} />
            <span className="auto-hide">{config.MAIL}</span>
          </a>
        </div>
        <div>
          <a className="about-link" href={social.INSTA_LINK}>
            <FontAwesomeIcon className="link-icon" icon={faInstagram}/> 
            <span className="auto-hide">{social.KAGERLIGHED_KBH}</span>
          </a>
        </div>
        <div>
          <a className="about-link" href={social.FB_LINK}>
            <FontAwesomeIcon className="link-icon" icon={faFacebook}/> 
            <span className="auto-hide">{social.KAGERLIGHED_KBH}</span>
          </a>
        </div>
        <div>
          <a className="about-link" href={config.CVR_LINK}>
            <span>{config.CVR}</span>
          </a>
        </div>
      </div>
    </>
  );
};

  
ReactDOM.render(
  <React.StrictMode>
    <Main/>
  </React.StrictMode>,
  document.getElementById("root")
);