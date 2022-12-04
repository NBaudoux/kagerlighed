import React from "react";

import "./MenuItem.less";

export type MenuItemProps = {
  imageClassName: string;
  title: string;
  description: string;
  price: string;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { imageClassName, title, description, price } = props;

  return (
    <div className="menu-item">
      <div className={`mi-image ${imageClassName}`} />
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