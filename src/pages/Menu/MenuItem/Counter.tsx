import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import "./Counter.less";

type CounterProps = {
  number: number | null,
  setNumber: (x: number | null) => void
  minNumber?: number
};

const Counter: React.FC<CounterProps> = (props) => {
  const { number, setNumber } = props;
  const minNumber = props.minNumber ?? 0;

  const addToNumber = (x: number) => {
    const currentValue = number ?? minNumber;
    if (currentValue + x < minNumber) return;
    setNumber(currentValue + x);
  };

  const updateNumberFromString = (x: string, resetUnvalidValue: boolean) => {
    if (x === "") {
      setNumber(resetUnvalidValue ? minNumber : null);
    }
    else {
      const value = parseInt(x);
      if (isNaN(value) || value < 0) return;
      setNumber(resetUnvalidValue && value < minNumber ? minNumber : value);
    }
  };

  return(
    <div className="counter">
      <button className="counter-button" disabled={number === minNumber || !number} onClick={() => addToNumber(-1)}>
        <FontAwesomeIcon icon={faMinus} />
      </button>
      <input 
        className="counter-number" 
        onBlur={(e) => updateNumberFromString(e.target.value, true)}
        onChange={(e) => updateNumberFromString(e.target.value, false)}
        onKeyDown={(e) => e.key === "ArrowUp" ? addToNumber(1) : e.key === "ArrowDown" ? addToNumber(-1) : null }
        value={number ?? ""} 
      />
      <button className="counter-button" onClick={() => addToNumber(1)}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
};

export default Counter;