import { MAIL, PHONE } from "../../config";
import { MenuItemProps } from "./MenuItem/MenuItem";

export const BASKET_KEY = "BasketKey";

export const SCREEN_SIZE = 470;

export const ORDER =  `Place order by contacting us: ${MAIL} / ${PHONE}. Orders must be placed at least 1 week beforehand, 3 weeks for orders having more than 2 kinds of cakes.`;
export const DELIVERY = "We deliver in Copenhagen and Frederiksberg communes all days between 5 and 9 pm for 50 DKK. Orders can also be picked up at the atelier close to Øresund metro station.";
export const MIN_NUMBER_TEXT = (x: number) => ` (min. ${x} pieces)`;

export const ITEMS: MenuItemProps[] = [
  {
    imageClassName: "lemonpie",
    title: "Lemon pie",
    description: "With its refreshing taste of lemon and its sweet meringue on top, this small pie is the perfect combination between acidity and sweetness.", 
    price: 40,
    priceText: "40 DKK (1 person) - 200 DKK (6 persons)"
  },
  {
    imageClassName: "parisbrest-medium",
    title: "Paris-Brest",
    description: "Pastry originating from the bicycle race going from Paris to Brest, this famous haselnut cake doesn't need any further description.",
    price: 70,
    priceText: "70 DKK (1 person) - 200 DKK (6 persons)"
  },
  {
    imageClassName: "chocolate-caramel",
    title: "Chocolate & caramel pie",
    description: "The very well known meeting of chocolate and caramel, now in a delicious small pie.",
    price: 40,
    priceText: "40 DKK (1 person) - 200 DKK (6 persons)"
  },
  {
    imageClassName: "charlotte",
    title: "Charlotte aux fruits",
    description: "This biscuit moelleux with vanilla whipped ganache and fresh fruits can be customised with any fruit you would like.",
    price: 40,
    priceText: "40 DKK (1 person) - 200 DKK (6 persons)"
  },
  {
    imageClassName: "raspberry-macaron",
    title: "Big raspberry macaron",
    description: "Big macaron with vanilla cream and raspberry",
    price: 40,
    priceText: "45 DKK (1 person) - 220 DKK (6 persons)"
  },
  {
    imageClassName: "chocolate-tonka",
    title: "Chocolate & tonka cake",
    description: "A full chocolate cake with the delicious flavor of the carabean tonka bean and a crunchy croustillant praliné.", 
    price: 50,
    priceText: "50 DKK (1 person) - 250 DKK (6 persons)"
  },
  {
    imageClassName: "parisbrest-small",
    title: "Paris-Brest (bite size)",
    description: "Pastry originating from the bicycle race going from Paris to Brest, this famous haselnut cake is also available in a bite sized version",
    price: 35,
    priceText: "(pr. piece) 35 DKK"
  },
  {
    imageClassName: "mignardises",
    title: "Mignardises",
    description: "Small cakes for your birthday party or office event, easy to eat and enjoy. A mix of classic lemon/meringue pie, the chocolate/caramel tart and the pistachio and raspberry financier.",
    price: 15,
    priceText: "(pr. piece) 15 DKK", 
    minNumber: 50
  }
];