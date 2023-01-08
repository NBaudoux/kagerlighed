import { faArrowLeft, faArrowRight, faImages, faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useMemo, useState } from "react";
import { useSessionStorage } from "usehooks-ts";
import SlideDiv, { Direction } from "../../shared/components";

import * as config from "./config";
import "./images.less";
import "./index.less";
import Counter from "./MenuItem/Counter";
import MenuItem, { MenuItemProps } from "./MenuItem/MenuItem";
import OrderSystem from "./OrderSystem";

const Menu: React.FC = () => {
  const initialBasket = config.ITEMS.map(() => 0);
  
  const [fullscreenMenu, setFullscreenMenu] = useState(window.innerWidth >= config.SCREEN_SIZE);
  const [currentItemIndex, setCurrentItemIndex] = useState<number>(0);
  const [basket, setBasket] = useSessionStorage<(number | null)[]>(config.BASKET_KEY, initialBasket);

  const resetBasket = () => setBasket(initialBasket);

  const updateBasket = (i: number, value: number | null) => {
    const newBasket = [...basket];
    newBasket[i] = value;
    setBasket(newBasket);
  };

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
          ) : (
            <div>
              <OrderSystem basket={basket} resetBasket={resetBasket} />
              {config.ITEMS.map((item, i) => (
                <MenuItem key={i} {...item} >
                  <Counter 
                    number={basket[i]}
                    setNumber={(x) => updateBasket(i, x)}
                    minNumber={item.minNumber}
                  />
                </MenuItem>
              ))}
            </div>
          )
      }
    </div>  
  );
};

export default Menu;
