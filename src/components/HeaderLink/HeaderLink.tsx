import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import "./HeaderLink.less";

type HeaderLinkProps = {
  autoHide?: boolean;
  icon?: IconDefinition;
  link: string;
  text: string;
}

const HeaderLink: React.FC<HeaderLinkProps> = (props) => {
  const { autoHide, icon, link, text } = props;

  return(
    <div title={text}>
      <a className="about-link" href={link}>
        {(icon ? <FontAwesomeIcon className="link-icon" icon={icon} /> : null)}
        <span className={autoHide? "auto-hide" : ""}>{text}</span>
      </a>
    </div>
  );
};

export default HeaderLink;