import classNames from 'classnames';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={classNames('section', styles['footer'])}>
      <div className={classNames('container')}>
        <h2 className={classNames(styles['contactsTitle'], 'mainTitle')}>
          Contacts
        </h2>

        <div className={styles.contacts}>
          <address className={styles.contactsInfo}>
            <h3 className={styles.contactPlace}>Estonia</h3>
            <a
              className={styles.contactEmail}
              href="mailto: info@toptier-marketing.com"
            >
              info@toptier-marketing.com
            </a>
          </address>

          <div className={styles.question}>
            <p className={styles.questionText}>
              If you are interested in working together, contact us.
            </p>
            <a
              className={styles.questionBtn}
              href="mailto: info@toptier-marketing.com"
            >
              Ask a Question
            </a>
          </div>
        </div>

        <p className={styles.copy}>Copyright &copy; 2024 TOPTIER-MARKETING</p>
        <div className={styles.bgCircle}></div>
      </div>
    </footer>
  );
};

export default Footer;
