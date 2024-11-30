import React, { useState } from "react";
import styles from "./styles/OrderCustomization.module.css";

function OrderCustomization() {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("Medium");
  const [addons, setAddons] = useState([]);

  const handleAddOnChange = (e) => {
    const { value, checked } = e.target;
    setAddons(prev => checked ? [...prev, value] : prev.filter(addon => addon !== value));
  };

  const handleQuantityChange = (amount) => {
    if (quantity + amount > 0) setQuantity(quantity + amount);
  };

  return (
    <div className={styles.customization}>
      <h2>Customize Your Order</h2>
      <div>
        <label>Size:</label>
        <select value={size} onChange={(e) => setSize(e.target.value)}>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </div>
      <div>
        <label>Add-ons:</label>
        <div>
          <input type="checkbox" value="Cheese" onChange={handleAddOnChange} /> Cheese
          <input type="checkbox" value="Sauce" onChange={handleAddOnChange} /> Sauce
        </div>
      </div>
      <div>
        <label>Quantity:</label>
        <button onClick={() => handleQuantityChange(-1)}>-</button>
        <span>{quantity}</span>
        <button onClick={() => handleQuantityChange(1)}>+</button>
      </div>
      <button className={styles.addToCart}>Add to Cart</button>
    </div>
  );
}

export default OrderCustomization;
