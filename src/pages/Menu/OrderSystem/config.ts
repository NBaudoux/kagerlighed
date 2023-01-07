import { addDays } from "../../../shared/util/dateUtil";

export const BASKET = "Basket";
export const DELIVERY_DATE = "Delivery date";
export const RESET = "Reset order";

export const MAX_DATE = 8640000000000000;
export const EXCLUDED_DAYS: {start: Date, end: Date}[] = [
  {start: new Date(0-MAX_DATE), end: addDays(new Date(), 6)},
  {start: addDays(new Date(), 60), end: new Date(MAX_DATE)}
];