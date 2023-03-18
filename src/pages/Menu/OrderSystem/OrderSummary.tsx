import React, { Fragment, useState } from "react";

import { ITEMS as MENU_ITEMS } from "../config";
import * as config from "./config";
import OrderDatePicker, { OrderDatePickerProps } from "./OrderDatePicker";

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
            ? <div className="os-summary-item" key={i}>
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
      <span>{config.ORDER_SUMMARY}</span>
      {listBasketItems()}
      <span>{config.DELIVERY_DATE}</span>
      <OrderDatePicker 
        deliveryDate={deliveryDate}
        setDeliveryDate={setDeliveryDate}
      />
      <div>
        <span>{`${config.PRICE}: ${computePrice()}DKK`}</span>
      </div>
      <form>
        <div>
          <span>{config.NAME}</span>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <span>{config.EMAIL}</span>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <span>{config.PHONE}</span>
          <input type="tel" id="tel" name="tel" />
        </div>
        <div>
          <span>{config.ADDRESS}</span>
          <input type="text" id="address" name="address" />
        </div>
        <div>
          <span>{config.ZIP}</span>
          <input 
            type="number" 
            id="zip" 
            name="zip"
            onChange={(e) => setZip(e.target.value)}
            value={zip}
          />
        </div>
        <div title={!isZipAllowed ? config.DELIVERY_DISABLED : ""}>
          <span>{config.DELIVERY}</span>
          <input 
            type="radio" 
            id="delivery_yes"
            checked={deliveryActivated}
            disabled={!isZipAllowed}
            name="delivery" 
            onClick={() => setDelivery(true)}    
          />
          <label htmlFor="delivery_yes">{config.YES}</label>
          <input 
            type="radio" 
            id="delivery_no" 
            checked={!deliveryActivated}
            disabled={!isZipAllowed}
            name="delivery" 
            onClick={() => setDelivery(false)} 
          />
          <label htmlFor="delivery_no">{config.NO}</label>
        </div>
      </form>
    </div>
  );
};

export default OrderSummary;