import React from "react";
import { useSessionStorage } from "usehooks-ts";

import * as config from "./config";
import "./images.less";
import "./index.less";
import Counter from "./MenuItem/Counter";
import MenuItem from "./MenuItem/MenuItem";

const Menu: React.FC = () => {
  const [basket, setBasket] = useSessionStorage(config.BASKET_KEY, config.ITEMS.map(() => 0));

  const updateBasket = (i: number, value: number) => {
    const newBasket = [...basket];
    newBasket[i] = value;
    setBasket(newBasket);
  };

  return (
    <div className="menu">
      <p>{config.ORDER}</p>
      {config.ITEMS.map((item, i) => (
        <MenuItem key={i} {...item} >
          <Counter 
            number={basket[i]}
            setNumber={(x) => updateBasket(i, x)}
          />
        </MenuItem>
      ))}
    </div>  
  );
};

export default Menu;