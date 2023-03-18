import { addDays } from "../../../shared/util/dateUtil";

export const ADDRESS = "Address: ";
export const BASKET = "Basket";
export const DELIVERY = "Delivery: ";
export const DELIVERY_DATE = "Delivery date";
export const DELIVERY_DISABLED = "Your order cannot be delivered at your location";
export const EMAIL = "Email: ";
export const NAME = "Name: ";
export const NO = "No";
export const ORDER_SUMMARY = "Your order's summary: ";
export const PHONE = "Phone: ";
export const PRICE = "Price: ";
export const RESET = "Reset order";
export const YES = "YES";
export const ZIP = "Postal code: ";

export const MAX_DATE = 8640000000000000;
export const EXCLUDED_DAYS: {start: Date, end: Date}[] = [
  {start: new Date(0-MAX_DATE), end: addDays(new Date(), 6)},
  {start: addDays(new Date(), 60), end: new Date(MAX_DATE)}
];

export const DELIVERY_PRICE = 50; 
export const IS_ZIP_ALLOWED = (zip: string) => {
  const parsedZip = parseInt(zip);
  return !Number.isNaN(zip) && 1000 < parsedZip && parsedZip <= 2500;
};