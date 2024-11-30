import React, { useState } from "react";
import styles from "./styles/FeedbackForm.module.css";

function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    rating: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your feedback!");
    setFormData({
      name: "",
      email: "",
      message: "",
      rating: "",
    });
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Feedback Form</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </label>
        <label className={styles.label}>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </label>
        <label className={styles.label}>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={styles.textarea}
            required
          ></textarea>
        </label>
        <label className={styles.label}>
          Rating:
          <select
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            className={styles.select}
            required
          >
            <option value="">Select</option>
            <option value="1">1 - Poor</option>
            <option value="2">2 - Fair</option>
            <option value="3">3 - Good</option>
            <option value="4">4 - Very Good</option>
            <option value="5">5 - Excellent</option>
          </select>
        </label>
        <button type="submit" className={styles.button}>
          Submit Feedback
        </button>
      </form>
    </div>
  );
}

export default FeedbackForm;
