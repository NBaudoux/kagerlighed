import React from "react";

import * as config from "./config";
import "./index.less";

const Menu: React.FC = () => {
  return (
    <div className="menu">
      <div className="m-pages">
        <div className="m-page0" />
        <div className="m-page1" />
      </div>
      <span>{config.ORDER}</span>
    </div>  
  );
};

export default Menu;