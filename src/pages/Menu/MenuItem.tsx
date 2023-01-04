import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Popup from "reactjs-popup";

import "./MenuItem.less";

export type MenuItemProps = {
  fullscreen?: boolean;
  imageClassName: string;
  title: string;
  description: string;
  price: string;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { fullscreen, imageClassName, title, description, price } = props;
  const [open, setOpen] = useState(false);

  return (
    <div className={`menu-item${fullscreen? " mi-fullscreen" : ""}`}>
      <div 
        className={`mi-image ${imageClassName}`} 
        onClick={() => setOpen(!open)} 
        title={title}
      />
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
          <h3>{title}</h3>
        </div>
        <div className="mi-desc">{description}</div>
        <div className="mi-price">
          <span>{price}</span>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;