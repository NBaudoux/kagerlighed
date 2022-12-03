import React, { useState } from "react";
import ReactDOM from "react-dom";
import HeaderButton from "./headerButton";
import "./index.less";
import HomePage from "./pages/HomePage";

const Main: React.FC = () => {
  const title = "Kagerlighed";
  const tabs = ["Home", "Menu", "About me"];
  let i = -1;

  const content = () => {
    switch(selectedTab){
    case 0: {
      return <HomePage toMenu={() => setSelectedTab(1)}/>;}
    case 1: 
      return <span>{"Here are my cakes"}</span>;
    case 2: 
      return <span>{"Text Text Text"}</span>;
    }};

  const [selectedTab, setSelectedTab] = useState<number>(i+1);

  return (
    <>
      <div className="header">
        <a href="index" className="home-shortcut">{title}</a>
        {tabs.map((tab) => {
          i++;
          return <HeaderButton index={i} key={i} link="" selected={selectedTab} setSelected={setSelectedTab} value={tab} />;
        })}
      </div>
      <div className="content">
        {content()}
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