import React, { useState } from 'react';

import styles from './ContactForm.module.css';

const ContactForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    comment: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        number: '',
        comment: '',
      });
      onClose();
    }, 3000);
  };

  return (
    <div className={styles.formContainer}>
      {submitted ? (
        <div className={styles.submitContainer}>
          Thank you! We will contact you shortly.
        </div>
      ) : (
        <>
          <h2 className={styles.formTitle}>Your message</h2>
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
              className={styles.formInput}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className={styles.formInput}
            />
            <input
              type="phone"
              name="number"
              placeholder="Phone number"
              value={formData.number}
              onChange={handleChange}
              required
              className={styles.formInput}
            />
            <textarea
              name="comment"
              placeholder="Comment"
              value={formData.comment}
              onChange={handleChange}
              required
              className={styles.formInput}
              style={{ width: '100%', height: '150px' }}
            />
            <button type="submit" className={styles.formBtn}>
              Submit
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default ContactForm;
