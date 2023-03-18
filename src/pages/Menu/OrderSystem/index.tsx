import { faArrowRotateLeft, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

import "react-datepicker/dist/react-datepicker.css";
import Popup from "reactjs-popup";
import { addDays } from "../../../shared/util/dateUtil";

import * as config from "./config";
import "./index.less";
import OrderDatePicker from "./OrderDatePicker";
import OrderSummary from "./OrderSummary";

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
          <OrderSummary 
            basket={basket}
            deliveryDate={deliveryDate}
            setDeliveryDate={setDeliveryDate}
          />
        </Popup>
      </div>
      <OrderDatePicker 
        deliveryDate={deliveryDate}
        setDeliveryDate={setDeliveryDate}
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