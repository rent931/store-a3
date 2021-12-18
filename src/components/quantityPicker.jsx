import { useState } from "react";
import "./quantityPicker.css";

function QuantityPicker() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    console.log("Increase the Value");
    setQuantity(quantity + 1);
  };
  const decrement = () => {
    console.log("decrease the value");
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="quantityPicker">
      <button className="btn btn-sm btn-primary" onClick={decrement}>
        -
      </button>
      <label> {quantity} </label>
      <button className="btn btn-sm btn-primary" onClick={increment}>
        +
      </button>
    </div>
  );
}

export default QuantityPicker;
