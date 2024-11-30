import React from "react";
import styles from "./styles/Home.module.css";
import banner from "../assets/images/banner.jpg";
import seasonalSpecial from "../assets/images/seasonal-special.jpg";

function Home() {
  return (
    <div className={styles.home}>
      <img src={banner} alt="Welcome Banner" className={styles.banner} />
      <h2>Welcome to Food Website</h2>
      <p>Discover our delicious menu and order online!</p>
      <div className={styles.promotions}>
        <h3>Seasonal Specials</h3>
        <img
          src={seasonalSpecial}
          alt="Seasonal Special Offer"
          className={styles.specialImage}
        />
        <p>Enjoy exclusive discounts on our popular items this season.</p>
      </div>
    </div>
  );
}

export default Home;
