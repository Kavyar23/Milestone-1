import React from "react";
import styles from "./styles/ShoppingCart.module.css";

const cartItems = [
  { id: 1, name: "Spring Rolls", quantity: 2, price: 5.99 },
  { id: 2, name: "Grilled Chicken", quantity: 1, price: 12.99 },
];

function ShoppingCart() {
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className={styles.cart}>
      <h2>Shopping Cart</h2>
      <div className={styles.cartItems}>
        {cartItems.map(item => (
          <div key={item.id} className={styles.cartItem}>
            <span>{item.name}</span>
            <span>Qty: {item.quantity}</span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
      </div>
      <h3>Total: ${total.toFixed(2)}</h3>
      <button className={styles.checkout}>Checkout</button>
    </div>
  );
}

export default ShoppingCart;
