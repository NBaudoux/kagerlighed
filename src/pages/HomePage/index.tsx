import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import * as config from "./config";
import "./index.less";

const HomePage: React.FC = () => 
{
  return (
    <div>
      <div className="hp-desc">
        {config.desc.map((text, i) => (<p key={i}>{text}</p>))}
      </div>
      <div className="slide-container">
        <Slide>
          {config.slideImages.map((img, i) => (
            <div className="each-slide" key={i}>
              <div 
                className={`slide-show-img ${img.styleName}`} 
                title={img.caption}
              />
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
};

export default HomePage;