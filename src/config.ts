import { faCircleInfo, faHome, faUtensils, IconDefinition } from "@fortawesome/free-solid-svg-icons";

const CVR_NUMBER = "42850012";

export const CVR = `CVR: ${CVR_NUMBER}`;
export const CVR_LINK = `https://datacvr.virk.dk/enhed/virksomhed/${CVR_NUMBER}`;

export const MAIL = "kagerlighed.kbh@gmail.com";
export const MAIL_LINK = `mailto: ${MAIL}`;

export const PHONE = "+45 50 20 38 55";
export const PHONE_LINK = "tel:+4550203855";

export const tabs: {icon: IconDefinition, text: string}[] = [
  { icon: faHome, text: "Home" }, 
  { icon: faUtensils, text: "Menu" }, 
  { icon: faCircleInfo, text:"About me" }
];