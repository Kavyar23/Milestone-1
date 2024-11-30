import React from "react";
import styles from "./styles/AboutUs.module.css";
import ourtea from "../assets/images/team.JPG";


function AboutUs() {
  return (
    <div className={styles.aboutUs}>
      <h2>About Us</h2>
      <p>
        Welcome to our food business! We take pride in crafting delicious meals
        made with fresh, locally sourced ingredients.
      </p>
      <div className={styles.story}>
        <h3>Our Story</h3>
        <p>
          From humble beginnings, our mission has always been to serve
          high-quality food that brings people together. With a dedicated team
          of passionate chefs, we’ve grown to become a local favorite.
        </p>
        <img
          src={ourtea}
          alt="Our Team"
          className={styles.teamImage}
        />
        
      </div>
      <div className={styles.chefs}>
        <h3>Meet the Chefs</h3>
        <img
          src="https://pub-9de3ef333ad945ebac537fd0ec8d12d0.r2.dev/image_f46d335f-b528-41d8-a8e8-a50910f960c7_f61526f3-4bd4-49a2-863c-dd49c4874d27_1732947671.jpg"
          alt="Chef at Work"
          className={styles.chefImage}
        />
        <p>
          Our chefs are the heart of our kitchen. With years of experience and a
          flair for creativity, they bring flavors to life in every dish.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
