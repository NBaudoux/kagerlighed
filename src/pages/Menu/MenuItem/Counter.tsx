import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import "./Counter.less";

type CounterProps = {
  number: number,
  setNumber: (x: number) => void
};

const Counter: React.FC<CounterProps> = (props) => {
  const { number, setNumber } = props;

  const updateNumber = (x: number) => {
    if (number + x < 0) return;
    setNumber(number + x);
  };

  return(
    <div className="counter">
      <button className="counter-button" disabled={number === 0} onClick={() => updateNumber(-1)}>
        <FontAwesomeIcon icon={faMinus} />
      </button>
      <div className="counter-number">{number}</div>
      <button className="counter-button" onClick={() => updateNumber(1)}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
};

export default Counter;