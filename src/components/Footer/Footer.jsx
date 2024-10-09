import { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import classNames from 'classnames';
import styles from './Footer.module.css';

const Footer = ({ setRef }) => {
  const footerRef = useRef(null);

  useEffect(() => {
    AOS.init();
    setRef('footer', footerRef); // Реєструємо ref для секції Footer
  }, [setRef]);

  return (
    <footer ref={footerRef} className={classNames('section', styles.footer)}>
      <div className={classNames('container')}>
        <h2
          className={classNames(styles.contactsTitle, 'mainTitle')}
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          Contacts
        </h2>

        <div className={styles.contacts}>
          <address
            className={styles.contactsInfo}
            data-aos="fade-down-right"
            data-aos-duration="2000"
          >
            <h3 className={styles.contactPlace}>Estonia</h3>
            <a
              className={styles.contactEmail}
              href="mailto:info@toptier-marketing.com"
            >
              info@toptier-marketing.com
            </a>
          </address>

          <div
            className={styles.question}
            data-aos="fade-down-left"
            data-aos-duration="2000"
          >
            <p className={styles.questionText}>
              If you are interested in working together, contact us.
            </p>
            <a
              className={styles.questionBtn}
              href="mailto:info@toptier-marketing.com"
            >
              Ask a Question
            </a>
          </div>
        </div>

        <p className={styles.copy}>Copyright &copy; 2024 TOPTIER-MARKETING</p>
        <div
          className={styles.bgCircle}
          data-aos="fade-left"
          data-aos-duration="2000"
        ></div>
      </div>
    </footer>
  );
};

export default Footer;
