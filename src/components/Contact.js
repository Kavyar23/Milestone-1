import React from "react";
import styles from "./styles/Contact.module.css";

function Contact() {
  return (
    <div className={styles.contact}>
      <h2>Contact Us</h2>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
