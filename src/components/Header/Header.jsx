import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

import MobileMenu from '../MobileMenu/MobileMenu';
import Logo from '../../img/logo_white.png';

import classNames from 'classnames';
import styles from './Header.module.css';

const Header = ({ scrollToSection, onApplyClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={classNames(styles['header-wrapper'], 'container')}>
        <a href="./">
          <img src={Logo} alt="logo compani" width={120} />
        </a>
        <nav>
          <ul className={styles.header_nav}>
            <li>
              <a
                href="#about"
                onClick={() => scrollToSection('about')}
                className={styles.header_link}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#technologies"
                onClick={() => scrollToSection('technologies')}
                className={styles.header_link}
              >
                Technologies
              </a>
            </li>
            <li>
              <a
                href="#partnerships"
                onClick={() => scrollToSection('partnerships')}
                className={styles.header_link}
              >
                Partnerships
              </a>
            </li>
            <li>
              <a
                href="#vacancies"
                onClick={() => scrollToSection('vacancies')}
                className={styles.header_link}
              >
                Vacancies
              </a>
            </li>
            <li>
              <a
                href="#contacts"
                onClick={() => scrollToSection('contacts')}
                className={styles.header_link}
              >
                Contacts
              </a>
            </li>
          </ul>
        </nav>
        <button className={styles.header_button} onClick={onApplyClick}>
          Ask a Question
        </button>
        <button
          type="button"
          className={styles.header_burger}
          onClick={toggleMenu}
        >
          {menuOpen ? (
            <FiX className={styles.burger_svg} />
          ) : (
            <FiMenu className={styles.burger_svg} />
          )}
        </button>
      </div>
      <MobileMenu
        isOpen={menuOpen}
        toggleMenu={toggleMenu}
        scrollToSection={scrollToSection}
      />
    </header>
  );
};

export default Header;
