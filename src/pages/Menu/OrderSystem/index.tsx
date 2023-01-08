import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faArrowRotateLeft, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Popup from "reactjs-popup";
import { addDays } from "../../../shared/util/dateUtil";

import { ITEMS as MENU_ITEMS } from "../config";
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
      <div className="os-basket">
        <FontAwesomeIcon 
          className="os-icon" 
          icon={faCartShopping}
          onClick={() => setOpenBasket(true)} 
          title={config.BASKET}
        />
        <Popup
          open={openBasket}
          onClose={() => setOpenBasket(false)}
          closeOnDocumentClick
          position="top center"
        >
          {basket?.map((amount, i) => 
            amount && amount > 0 
              ? <div key={i}>{`${amount}x ${MENU_ITEMS[i].title}`}</div>
              : null
          )}
        </Popup>
      </div>
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