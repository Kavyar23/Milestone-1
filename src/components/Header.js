import React from "react";
import styles from "./styles/Header.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className={styles.header}>
      <h1>Food Website</h1>
      <nav>
        <ul className={styles.navList}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
