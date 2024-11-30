import React from "react";
import styles from "./styles/Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© 2024 Food Website. All rights reserved.</p>
      <div className={styles.socials}>
        <a href="#">Facebook</a> | <a href="#">Instagram</a> | <a href="#">Twitter</a>
      </div>
    </footer>
  );
}

export default Footer;
