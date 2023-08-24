import { faCircleExclamation, faCircleInfo, faTriangleExclamation, faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import "./index.less";

export enum InfoType {
  DELIVERY = "ib-delivery",
  ERROR = "ib-error",
  INFO = "ib-info",
  WARN = "ib-warn"
}

type InfoboxProps = {
  infoType: InfoType;
  hide?: boolean;
}

const Infobox: React.FC<InfoboxProps> = (props) => {
  
  const { infoType, hide } = props;
  const hidden = hide ? " hidden" : "";

  const getTypesIcon = () => {
    switch(infoType) {
    case InfoType.DELIVERY:
      return faTruck;
    case InfoType.ERROR:
      return faCircleExclamation;
    case InfoType.INFO:
      return faCircleInfo;
    case InfoType.WARN:
      return faTriangleExclamation;
    }
  };

  return (
    <div className={`infobox ${infoType}${hidden}`}>
      <FontAwesomeIcon className="ib-icon" icon={getTypesIcon()} />
      <span>{props.children}</span>
    </div>
  );
};

export default Infobox;