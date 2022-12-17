import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./headerButton.less";

type HeaderButtonProps = {
  icon: IconProp;  
  index: number;
  selected: number;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
  value: string;
};

const HeaderButton: React.FC<HeaderButtonProps> = (props) => {
  const { icon, index, selected, setSelected, value } = props;  
  return(
    <div 
      className={"header-button" + (selected === index? " selected": "")} 
      onClick={() => setSelected(index)}
      title={value}
    >
      <span className="button-text">{value}</span>
      <FontAwesomeIcon className="button-icon" icon={icon} />
    </div>
  );
};

export default HeaderButton;