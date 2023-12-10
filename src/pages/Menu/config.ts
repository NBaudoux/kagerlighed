import { MAIL, PHONE } from "../../config";
import { MenuItemProps } from "./MenuItem";

export const SCREEN_SIZE = 950;

export const CLOSED_UNTIL = new Date(2023, 8, 25);
export const HOLIDAY = `We are currently closed until ${CLOSED_UNTIL.toLocaleDateString("da-dk")}`;
export const ORDER =  `Place order by contacting us: ${MAIL} / ${PHONE}. Orders must be placed at least 1 week beforehand, 3 weeks for orders having more than 2 kinds of cakes.`;
export const DELIVERY = "We deliver in Copenhagen and Frederiksberg communes all days between 5 and 9 pm for 50 DKK. Orders can also be picked up at the atelier close to Øresund metro station.";

export const ITEMS: MenuItemProps[] = [
  {
    imageClassName: "galette",
    title: "Galette des rois",
    description: "Honouring an old tradition of the Epiphany, this cake is available in 3 flavours: Classic almond-vanilla, chocolate-hazelnut or chestnut. Available from 6th until 28th January 2024",
    price: "250 DKK (6 persons)"
  },
  {
    imageClassName: "lemonpie",
    title: "Lemon pie",
    description: "With its refreshing taste of lemon and its sweet meringue on top, this small pie is the perfect combination between acidity and sweetness.", 
    price: "40 DKK (1 person) - 200 DKK (6 persons)"
  },
  {
    imageClassName: "parisbrest-medium",
    title: "Paris-Brest",
    description: "Pastry originating from the bicycle race going from Paris to Brest, this famous haselnut dessert is made of choux pastry and a praline flavoured cream.",
    price: "70 DKK (1 person) - 220 DKK (6 persons)"
  },
  {
    imageClassName: "chocolate-caramel",
    title: "Chocolate & caramel pie",
    description: "The very well known meeting of chocolate and caramel, now in a delicious small pie.",
    price: "40 DKK (1 person) - 200 DKK (6 persons)"
  },
  {
    imageClassName: "charlotte",
    title: "Charlotte aux fruits",
    description: "This biscuit moelleux with vanilla whipped ganache and fresh fruits can be customised with any fruit you would like.",
    price: "40 DKK (1 person) - 200 DKK (6 persons)"
  },
  {
    imageClassName: "raspberry-macaron",
    title: "Big raspberry macaron",
    description: "Big macaron with vanilla cream and raspberry",
    price: "45 DKK (1 person) - 220 DKK (6 persons)"
  },
  {
    imageClassName: "chocolate-tonka",
    title: "Chocolate & tonka cake",
    description: "A full chocolate cake with the delicious flavor of the carabean tonka bean and a crunchy croustillant praliné.", 
    price: "50 DKK (1 person) - 250 DKK (6 persons)"
  },
  {
    imageClassName: "parisbrest-small",
    title: "Paris-Brest (bite size)",
    description: "Pastry originating from the bicycle race going from Paris to Brest, this famous haselnut cake is also available in a bite sized version",
    price: "(pr. piece) 35 DKK"
  },
  {
    imageClassName: "mignardises",
    title: "Mignardises (min. 50 pieces)",
    description: "Small cakes for your birthday party or office event, easy to eat and enjoy. A mix of classic lemon/meringue pie, the chocolate/caramel tart and the pistachio and raspberry financier.",
    price: "(pr. piece) 15 DKK"
  },
  {
    imageClassName: "gaufres",
    title: "Belgian waffles (Gaufres de Liège)",
    description: "The famous belgian waffles from Liège are made from a denser and sweeter dough than its Brussels' cousin. You can either warm them up at home or eat it right away, with or without topping. ",
    price: "80 DKK (5 pieces) - 150 DKK (10 pieces)"
  }
];