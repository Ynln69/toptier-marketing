import { FiMenu } from 'react-icons/fi';
import classNames from 'classnames';
import styles from './Header.module.css';

const Header = ({ onOpenForm, scrollToSection }) => {
  return (
    <header className={styles.header}>
      <div className={classNames(styles['header-wrapper'], 'container')}>
        <a className={styles.logo} href="./">
          Toptier Marketing
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
        <button
          type="button"
          className={styles.header_button}
          onClick={onOpenForm}
        >
          Ask a Question
        </button>
        <button type="button" className={styles.header_burger}>
          <FiMenu className={styles.burger_svg} />
        </button>
      </div>
    </header>
  );
};

export default Header;
