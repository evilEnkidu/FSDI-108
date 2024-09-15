import { useState } from "react";
import "./QuantityPicker.css";
function QuantityPicker() {
  const [quantity, setQuantity] = useState(1);

  function handleIncrease() {
    console.log("Increase!");
    let value = quantity + 1;
    setQuantity(value);
  }
  function handleDecrease() {
    console.log("DECREASE");
    if (quantity == 1) return;
    let value = quantity - 1;
    setQuantity(value);
  }
  return (
    <div className="qt-picker">
      <div className="inner">
        <button
          onClick={handleDecrease}
          disabled={quantity == 1}
          className="btn btn-sm btn-light"
        >
          -
        </button>
        <label>{quantity}</label>
        <button onClick={handleIncrease} className="btn btn-sm btn-light">
          +
        </button>
      </div>
    </div>
  );
}

export default QuantityPicker;
