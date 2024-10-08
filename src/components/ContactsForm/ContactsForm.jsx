import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './ContactsForm.module.css';

const ContactsForm = ({ onClose }) => {
    const [formData, setFormData] = useState({
        value1: '',
        value2: '',
        value3: '',
        textarea: '',
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        // Показуємо нотифікацію
        toast.success('Form submitted successfully!');
    
        // Очищення форми після сабміту
        setFormData({
          value1: '',
          value2: '',
          value3: '',
          textarea: '',
        });
    
        // Закриваємо форму після сабміту
        if (onClose) {
          onClose();
        }
      };

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <input
            type="text"
            name="value1"
            placeholder="Value"
            value={formData.value1}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>

        <div className={styles.inputGroup}>
          <input
            type="text"
            name="value2"
            placeholder="Value"
            value={formData.value2}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>

        <div className={styles.inputGroup}>
          <input
            type="text"
            name="value3"
            placeholder="Value"
            value={formData.value3}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>

        <div className={styles.inputGroup}>
          <textarea
            name="textarea"
            placeholder="Value"
            value={formData.textarea}
            onChange={handleInputChange}
            className={styles.textarea}
          ></textarea>
        </div>

        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>

      <ToastContainer />
    </div>
  );
};

export default ContactsForm;
