import React from "react";
import { useSessionStorage } from "usehooks-ts";

import * as config from "./config";
import "./images.less";
import "./index.less";
import Counter from "./MenuItem/Counter";
import MenuItem from "./MenuItem/MenuItem";

const Menu: React.FC = () => {
  const [basket, setBasket] = useSessionStorage<(number | null)[]>(config.BASKET_KEY, config.ITEMS.map(() => 0));

  const updateBasket = (i: number, value: number | null) => {
    const newBasket = [...basket];
    newBasket[i] = value;
    setBasket(newBasket);
  };

  return (
    <div className="menu">
      <div>
        <p>{config.ORDER}</p>
        <p>{config.DELIVERY}</p>
      </div>
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
  );
};

export default Menu;