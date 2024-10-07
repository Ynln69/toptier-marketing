import classNames from 'classnames';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={classNames('section')}>
      <div className={classNames('container')}>
        <h2 className={classNames(styles['contactsTitle'], 'mainTitle')}>
          Contacts
        </h2>

        <div className={styles.contacts}>
          <address className={styles.contactsInfo}>
            <h3 className={styles.contactPlace}>Estonia</h3>
            <a className={styles.contactEmail} href="mailto: info@devo.ai">
              info@devo.ai
            </a>
          </address>

          <div className={styles.question}>
            <p className={styles.questionText}>
              If you are interested in working together, contact us.
            </p>
            <button className={styles.questionBtn}>Ask a Question</button>
          </div>
        </div>

        <p className={styles.copy}>Copyright &copy; 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
