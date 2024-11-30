import React from "react";
import styles from "./styles/Menu.module.css"; // Import CSS module for styling
import burgerImage from "../assets/images/burger.jpg"; // Import images
import pastaImage from "../assets/images/pasta.jpg";
import dessertImage from "../assets/images/dessert.jpg";

function Menu() {
  // Menu items array with images, names, and prices
  const menuItems = [
    { id: 1, name: "Burger", price: "$8.99", image: burgerImage },
    { id: 2, name: "Pasta", price: "$12.49", image: pastaImage },
    { id: 3, name: "Dessert", price: "$6.99", image: dessertImage },
  ];

  return (
    <div className={styles.menu}>
      <h2>Our Menu</h2>
      <div className={styles.menuList}>
        {/* Map through menu items to dynamically create the UI */}
        {menuItems.map((item) => (
          <div key={item.id} className={styles.menuItem}>
            <img src={item.image} alt={item.name} className={styles.menuImage} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
