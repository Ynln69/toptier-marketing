import React from 'react';
import { FiX } from 'react-icons/fi';
import styles from './MobileMenu.module.css';

const MobileMenu = ({ isOpen, toggleMenu, scrollToSection }) => {
  return (
    <div
      className={`${styles.mobileMenu} ${
        isOpen ? styles.menuOpen : ''
      }`}
    >
      <nav>
        <div className={styles.menuThumb}>
          <a href="./" className={styles.menuLink}>Toptier Marketing</a>
          <button className={styles.closeBtn} onClick={toggleMenu}>
            <FiX size={32} />
          </button>
        </div>
        <ul className={styles.menuList}>
          <li>
            <a
              href="#about"
              onClick={() => {
                scrollToSection('about');
                toggleMenu();
              }}
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#technologies"
              onClick={() => {
                scrollToSection('technologies');
                toggleMenu();
              }}
            >
              Technologies
            </a>
          </li>
          <li>
            <a
              href="#partnerships"
              onClick={() => {
                scrollToSection('partnerships');
                toggleMenu();
              }}
            >
              Partnerships
            </a>
          </li>
          <li>
            <a
              href="#vacancies"
              onClick={() => {
                scrollToSection('vacancies');
                toggleMenu();
              }}
            >
              Vacancies
            </a>
          </li>
          <li>
            <a
              href="#contacts"
              onClick={() => {
                scrollToSection('contacts');
                toggleMenu();
              }}
            >
              Contacts
            </a>
          </li>
        </ul>
        <a href="mailto:info@example.com" className={styles.questionBtn}>
          Ask a Question
        </a>
      </nav>
    </div>
  );
};

export default MobileMenu;
