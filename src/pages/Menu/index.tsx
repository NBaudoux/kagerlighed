import { faArrowLeft, faArrowRight, faImages, faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useMemo, useState } from "react";
import Infobox, { InfoType } from "../../components/Infobox";
import SlideDiv, { Direction } from "../../shared/components";

import * as config from "./config";
import "./images.less";
import "./index.less";
import MenuItem, { MenuItemProps } from "./MenuItem";

const Menu: React.FC = () => {
  const [fullscreenMenu, setFullscreenMenu] = useState(window.innerWidth >= config.SCREEN_SIZE);
  const [currentItemIndex, setCurrentItemIndex] = useState<number>(0);

  const updateCurrentItemIndex = (direction: Direction): void => {
    setCurrentItemIndex((currentItemIndex + direction) % config.ITEMS.length);
  };

  const handleKeyEvent = (e: KeyboardEvent) => {
    if (!fullscreenMenu) return;
    if (e.key === "ArrowLeft") {
      updateCurrentItemIndex(Direction.Left);
    }
    else if (e.key === "ArrowRight") {
      updateCurrentItemIndex(Direction.Right);
    }
  };
  
  const currentItem: MenuItemProps | undefined = useMemo(() => 
    config.ITEMS.at(currentItemIndex)
  , [currentItemIndex]);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyEvent);
    return () => window.removeEventListener("keyup", handleKeyEvent);
  }, [handleKeyEvent]);

  return (
    <div className="menu">
      <div>
        <Infobox infoType={InfoType.INFO}>{config.ORDER}</Infobox>
        <Infobox infoType={InfoType.DELIVERY}>{config.DELIVERY}</Infobox>
      </div>
      <div className="m-display">
        <button 
          className={!fullscreenMenu? "active" : ""} 
          onClick={() => setFullscreenMenu(false)}
        >
          <FontAwesomeIcon icon={faList} />
        </button>
        <button 
          className={fullscreenMenu? "active" : ""} 
          onClick={() => setFullscreenMenu(true)}
        >
          <FontAwesomeIcon icon={faImages} />
        </button>
      </div>
      {
        fullscreenMenu && currentItem != null
          ? (
            <SlideDiv
              className="m-slide"
              onSlide={updateCurrentItemIndex}
            >
              <MenuItem key={currentItemIndex} fullscreen {...currentItem} />
              <div className="m-arrows">
                <button onClick={() => updateCurrentItemIndex(Direction.Left)}>
                  <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <button onClick={() => updateCurrentItemIndex(Direction.Right)}>
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            </SlideDiv>
          ) : config.ITEMS.map((item, i) => (
            <MenuItem key={i} {...item} />
          ))
      }
    </div>  
  );
};

export default Menu;
