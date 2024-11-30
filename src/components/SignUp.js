import React, { useState } from "react";
import styles from "./styles/SignUp.module.css";

function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.username.trim()) {
      formErrors.username = "Username is required";
    }
    if (!formData.email) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email is invalid";
    }
    if (!formData.password) {
      formErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      formErrors.password = "Password must be at least 6 characters long";
    }
    if (formData.password !== formData.confirmPassword) {
      formErrors.confirmPassword = "Passwords do not match";
    }
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccessMessage("");
    } else {
      setErrors({});
      setSuccessMessage("Signup successful! Redirecting to login...");
      // Add logic to send data to server or handle signup
      setTimeout(() => {
        window.location.href = "/"; // Redirect to home page or login page
      }, 3000);
    }
  };

  return (
    <div className={styles.signupContainer}>
      <h2>Create an Account</h2>
      {successMessage && <p className={styles.success}>{successMessage}</p>}
      <form onSubmit={handleSubmit} className={styles.signupForm}>
        <div className={styles.formGroup}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className={errors.username ? styles.errorInput : ""}
          />
          {errors.username && <p className={styles.error}>{errors.username}</p>}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? styles.errorInput : ""}
          />
          {errors.email && <p className={styles.error}>{errors.email}</p>}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={errors.password ? styles.errorInput : ""}
          />
          {errors.password && <p className={styles.error}>{errors.password}</p>}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className={errors.confirmPassword ? styles.errorInput : ""}
          />
          {errors.confirmPassword && (
            <p className={styles.error}>{errors.confirmPassword}</p>
          )}
        </div>
        <button type="submit" className={styles.submitButton}>
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
