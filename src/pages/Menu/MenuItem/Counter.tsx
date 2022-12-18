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
  const { number, setNumber, minNumber } = props;

  const addToNumber = (x: number) => {
    const currentValue = number ?? 0;
    if (currentValue + x < (minNumber ?? 0)) return;
    setNumber(currentValue + x);
  };

  const updateNumberFromString = (x: string) => {
    if (x === "") {
      setNumber(null);
    }
    else {
      const value = parseInt(x);
      if (isNaN(value) || value < 0) return;
      setNumber(value);
    }
  };

  return(
    <div className="counter">
      <button className="counter-button" disabled={number === (minNumber ?? 0) || !number} onClick={() => addToNumber(-1)}>
        <FontAwesomeIcon icon={faMinus} />
      </button>
      <input 
        className="counter-number" 
        onBlur={(e) => updateNumberFromString(e.target.value !== "" ? e.target.value : "0")}
        onChange={(e) => updateNumberFromString(e.target.value)}
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