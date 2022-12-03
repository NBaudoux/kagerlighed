import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import * as config from "./config";
import "./index.less";

type HomePageProps = 
{
  toMenu: () => void
}

const HomePage: React.FC<HomePageProps> = (props) => 
{
  const { toMenu } = props;
  return (
    <div className="home-page">
      <div className="hp-desc">
        {config.DESC.map((text, i) => (<p key={i}>{text}</p>))}
      </div>
      <div className="slide-container">
        <Slide>
          {config.SLIDE_IMAGES.map((img, i) => (
            <div className="each-slide" key={i}>
              <div 
                className={`slide-show-img ${img.styleName}`} 
                title={img.caption}
              />
            </div>
          ))}
        </Slide>
      </div>
      <div className="hp-menu">
        <button className="button" onClick={toMenu}>{config.MENU}</button>
      </div>
    </div>
  );
};

export default HomePage;