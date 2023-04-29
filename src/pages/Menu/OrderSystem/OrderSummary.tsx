import React, { Fragment, useState } from "react";

import { ITEMS as MENU_ITEMS } from "../config";
import * as config from "./config";
import OrderDatePicker, { OrderDatePickerProps } from "./OrderDatePicker";

import "./OrderSummary.less";

type OrderSummaryProps = OrderDatePickerProps & {
  basket: (number|null)[];
};

const OrderSummary: React.FC<OrderSummaryProps> = (props) => {
  const { basket, deliveryDate, setDeliveryDate } = props;

  const [delivery, setDelivery] = useState(false);
  const [zip, setZip] = useState("");

  const isZipAllowed = config.IS_ZIP_ALLOWED(zip);
  const deliveryActivated = delivery && isZipAllowed;

  const listBasketItems = () => {
    return (
      <Fragment>
        {basket?.map((amount, i) => 
          amount && amount > 0 
            ? <div className="oss-item" key={i}>
              {`${amount}x ${MENU_ITEMS[i].title}`}
            </div>
            : null
        )}
      </Fragment>
    );
  };

  const computePrice = () => {
    return basket.reduce(
      (total, curr, i) => (total ?? 0) + (curr ?? 0) * MENU_ITEMS[i].price,
      (deliveryActivated ? config.DELIVERY_PRICE : 0)
    );
  };

  return(
    <div className="os-summary">
      <div>{config.ORDER_SUMMARY}</div>
      {listBasketItems()}
      <div className="oss-line">
        <span className="oss-label">{config.DELIVERY_DATE}</span>
        <OrderDatePicker 
          deliveryDate={deliveryDate}
          setDeliveryDate={setDeliveryDate}
        />
      </div>
      <div className="oss-line">
        <span>{config.PRICE}</span>
        <span>{` ${computePrice()}DKK`}</span>
      </div>
      <form>
        <div className="oss-line">
          <span className="oss-label">{config.NAME}</span>
          <input className="oss-input" type="text" id="name" name="name" />
        </div>
        <div className="oss-line">
          <span className="oss-label">{config.EMAIL}</span>
          <input className="oss-input" type="email" id="email" name="email" />
        </div>
        <div className="oss-line">
          <span className="oss-label">{config.PHONE}</span>
          <input className="oss-input" type="tel" id="tel" name="tel" />
        </div>
        <div className="oss-line">
          <span className="oss-label">{config.ADDRESS}</span>
          <input className="oss-input" type="text" id="address" name="address" />
        </div>
        <div className="oss-line">
          <span className="oss-label">{config.ZIP}</span>
          <input 
            type="number" 
            id="zip" 
            name="zip"
            onChange={(e) => setZip(e.target.value)}
            value={zip}
          />
        </div>
        <div className="oss-line" title={!isZipAllowed ? config.DELIVERY_DISABLED : ""}>
          <span className="oss-label">{config.DELIVERY}</span>
          <div>
            <input 
              className="oss-input" 
              type="radio" 
              id="delivery_yes"
              checked={deliveryActivated}
              disabled={!isZipAllowed}
              name="delivery" 
              onClick={() => setDelivery(true)}    
            />
            <label htmlFor="delivery_yes">{config.YES}</label>
            <input 
              className="oss-input" 
              type="radio" 
              id="delivery_no" 
              checked={!deliveryActivated}
              disabled={!isZipAllowed}
              name="delivery" 
              onClick={() => setDelivery(false)} 
            />
            <label htmlFor="delivery_no">{config.NO}</label>
          </div>
        </div>
        <button className="oss-button button" formAction="submit">{config.SEND}</button>
      </form>
    </div>
  );
};

export default OrderSummary;