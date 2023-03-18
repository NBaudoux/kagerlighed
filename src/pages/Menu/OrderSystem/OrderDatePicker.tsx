import React from "react";
import DatePicker from "react-datepicker";

import * as config from "./config";

export type OrderDatePickerProps = {
  deliveryDate: Date;
  setDeliveryDate:  React.Dispatch<React.SetStateAction<Date>>
};

const OrderDatePicker: React.FC<OrderDatePickerProps> = (props) => {
  const { deliveryDate, setDeliveryDate } = props;
  return (
    <div className="os-calendar">
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
  );
};

export default OrderDatePicker;