import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type CounterProps = {
  number: number,
  setNumber: (x: number) => void
};

const Counter: React.FC<CounterProps> = (props) => {
  const { number, setNumber } = props;

  const updateBasketItem = (x: number) => {
    if (number + x < 0) return;
    setNumber(number + x);
  };

  return(
    <div className="counter">
      <button className="counter-button" onClick={() => updateBasketItem(-1)}>
        <FontAwesomeIcon icon={faMinus} />
      </button>
      <span>{number}</span>
      <button className="counter-button" onClick={() => updateBasketItem(1)}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
};

export default Counter;