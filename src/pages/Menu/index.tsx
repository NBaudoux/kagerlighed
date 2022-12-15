import React from "react";

import * as config from "./config";
import "./images.less";
import "./index.less";
import MenuItem from "./MenuItem";

const Menu: React.FC = () => {
  return (
    <div className="menu">
      <div>
        <p>{config.ORDER}</p>
        <p>{config.DELIVERY}</p>
      </div>
      {config.ITEMS.map((item, i) => (
        <MenuItem key={i} {...item} />
      ))}
    </div>  
  );
};

export default Menu;