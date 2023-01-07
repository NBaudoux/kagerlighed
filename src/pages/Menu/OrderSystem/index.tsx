import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faArrowRotateLeft, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays } from "../../../shared/util/dateUtil";

import * as config from "./config";
import "./index.less";

type OrderSystemProps = {
  resetBasket: () => void
}

const OrderSystem: React.FC<OrderSystemProps> = (props) => {
  const { resetBasket } = props;
  const [deliveryDate, setDeliveryDate] = useState<Date>(addDays(new Date(), 7));

  return(
    <div className="order-system">
      <FontAwesomeIcon 
        className="os-icon" 
        icon={faCartShopping} 
        title={config.BASKET}
      />
      <FontAwesomeIcon 
        className="os-icon" 
        icon={faCalendar} 
        title={config.DELIVERY_DATE}
      />
      <DatePicker
        closeOnScroll
        excludeDateIntervals={config.EXCLUDED_DAYS}
        locale="en-GB"
        onChange={(date) => date ? setDeliveryDate(date) : null}
        selected={deliveryDate}
      />
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