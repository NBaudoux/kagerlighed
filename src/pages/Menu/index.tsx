import { faArrowLeft, faArrowRight, faImages, faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment, useMemo, useState } from "react";

import * as config from "./config";
import "./images.less";
import "./index.less";
import MenuItem, { MenuItemProps } from "./MenuItem";

const Menu: React.FC = () => {
  const [fullscreenMenu, setFullscreenMenu] = useState(true);
  const [currentItemIndex, setCurrentItemIndex] = useState<number>(0);

  const updateCurrentItemIndex = (direction: -1 | 1): void => {
    setCurrentItemIndex((currentItemIndex + direction) % config.ITEMS.length);
  };
  
  const currentItem: MenuItemProps | undefined = useMemo(() => 
    config.ITEMS.at(currentItemIndex)
  , [currentItemIndex]);

  return (
    <div className="menu">
      <div>
        <p>{config.ORDER}</p>
        <p>{config.DELIVERY}</p>
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
            <Fragment>
              <MenuItem fullscreen {...currentItem} />
              <div className="m-arrows">
                <button onClick={() => updateCurrentItemIndex(-1)}>
                  <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <button onClick={() => updateCurrentItemIndex(1)}>
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            </Fragment>
          ) : config.ITEMS.map((item, i) => (
            <MenuItem key={i} {...item} />
          ))
      }
    </div>  
  );
};

export default Menu;