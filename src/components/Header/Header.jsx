import { FiMenu } from "react-icons/fi";

import classNames from "classnames";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={classNames(styles["header-wrapper"], "container")}>
        <a href="./"> Logo </a>
        <nav>
          <ul className={styles.header_nav}>
            <li>
              <a href="#about" className={styles.header_link}>
                About Us
              </a>
            </li>
            <li>
              <a href="#technologies" className={styles.header_link}>
                Technologies
              </a>
            </li>
            <li>
              <a href="#partnerships" className={styles.header_link}>
                Partnerships
              </a>
            </li>
            <li>
              <a href="#vacancies" className={styles.header_link}>
                Vacancies
              </a>
            </li>
            <li>
              <a href="#contacts" className={styles.header_link}>
                Contacts
              </a>
            </li>
          </ul>
        </nav>
        <button type="button" className={styles.header_button}>
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
