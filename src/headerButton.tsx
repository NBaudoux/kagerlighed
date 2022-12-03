import React from "react";
import "./headerButton.less";

type HeaderButtonProps = {
    index: number;
    link: string;
    selected: number;
    setSelected: React.Dispatch<React.SetStateAction<number>>;
    value: string;
};

const HeaderButton: React.FC<HeaderButtonProps> = (props) => {
  const {index, selected, setSelected, value} = props;  
  return(
    <div 
      className={"header-button" + (selected === index? " selected": "")} 
      onClick={() => setSelected(index)}>
      <span className="button-text">{value}</span>
    </div>
  );
};

export default HeaderButton;