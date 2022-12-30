import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faCircleInfo, faEnvelope, faHome, faPhone, faUtensils, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { HeaderLinkProps } from "./components/HeaderLink/HeaderLink";
import * as social from "./shared/config/socialLinks";

const CVR_NUMBER = "42850012";

const CVR = `CVR: ${CVR_NUMBER}`;
const CVR_LINK = `https://datacvr.virk.dk/enhed/virksomhed/${CVR_NUMBER}`;

export const MAIL = "kagerlighed.kbh@gmail.com";
const MAIL_LINK = `mailto: ${MAIL}`;

export const PHONE = "+45 50 20 38 55";
const PHONE_LINK = "tel:+4550203855";

export const TITLE = "Kagerlighed";

export const LINKS: HeaderLinkProps[] = [
  { icon: faPhone, link: PHONE_LINK, text: PHONE },
  { autoHide: true, icon: faEnvelope, link: MAIL_LINK, text: MAIL },
  { autoHide: true, icon: faInstagram, link: social.INSTA_LINK, text: social.KAGERLIGHED_KBH },
  { autoHide: true, icon: faFacebook, link: social.FB_LINK, text: social.KAGERLIGHED_KBH },
  { link: CVR_LINK, text: CVR }
];

export const TABS: {icon: IconDefinition, text: string}[] = [
  { icon: faHome, text: "Home" }, 
  { icon: faUtensils, text: "Menu" }, 
  { icon: faCircleInfo, text:"About me" }
];