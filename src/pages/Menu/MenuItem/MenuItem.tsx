import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Popup from "reactjs-popup";
import { MIN_NUMBER_TEXT } from "../config";

import "./MenuItem.less";

export type MenuItemProps = {
  imageClassName: string;
  title: string;
  description: string;
  price: string;
  minNumber?: number;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { imageClassName, title, description, price, minNumber } = props;
  const [open, setOpen] = useState(false);

  return (
    <div className="menu-item">
      <div className={`mi-image ${imageClassName}`} onClick={() => setOpen(!open)} />
      <Popup
        open={open}
        onClose={() => setOpen(false)}
        closeOnDocumentClick
        position="top center"
      >
        <button className="mi-close" onClick={() => setOpen(false)}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <div className={`mi-image mi-popup ${imageClassName}`} />
      </Popup>
      <div className="mi-text">
        <div className="mi-title">
          <h3>{title}{minNumber ? MIN_NUMBER_TEXT(minNumber) : null}</h3>
        </div>
        <div className="mi-desc">{description}</div>
        <div className="mi-price">
          {props.children}
          <span>{price}</span>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;