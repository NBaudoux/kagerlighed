import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faArrowRotateLeft, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Popup from "reactjs-popup";
import { addDays } from "../../../shared/util/dateUtil";

import * as config from "./config";
import "./index.less";

type OrderSystemProps = {
  basket: (number | null)[];
  resetBasket: () => void
}

const OrderSystem: React.FC<OrderSystemProps> = (props) => {
  const { basket, resetBasket } = props;

  const [deliveryDate, setDeliveryDate] = useState<Date>(addDays(new Date(), 7));
  const [openBasket, setOpenBasket] = useState(false);

  return(
    <div className="order-system">
      <FontAwesomeIcon 
        className="os-icon" 
        icon={faCartShopping} 
        title={config.BASKET}
      />
      <div className="os-calendar">
        <FontAwesomeIcon 
          className="os-icon" 
          icon={faCalendar}
          title={config.DELIVERY_DATE}
        />
        <DatePicker
          calendarStartDay={1}
          closeOnScroll
          excludeDateIntervals={config.EXCLUDED_DAYS}
          dateFormat="dd MMMM yyyy"
          onChange={(date) => date ? setDeliveryDate(date) : null}
          selected={deliveryDate}
          showWeekNumbers
        />
      </div>
      <FontAwesomeIcon 
        className="os-icon" 
        icon={faArrowRotateLeft} 
        onClick={resetBasket}
        title={config.RESET}
      />
    </div>
  );
};

export default OrderSystem;