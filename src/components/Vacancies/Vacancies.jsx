import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';

import ContactForm from '../ContactForm/ContactForm';
import Modal from '../Modal/Modal';

import styles from './Vacancies.module.css';

const Vacancies = ({ setRef }) => {
  const vacanciesRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    AOS.init();
    setRef('vacancies', vacanciesRef);
  }, [setRef]);

  const handleApplyClick = () => {
    setIsModalOpen(true);
  };

  return (
    <section ref={vacanciesRef} className={classNames('section')}>
      <div className={classNames('container')}>
        <h2
          className={classNames(styles['vacanciesTitle'], 'mainTitle')}
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          Vacancies
        </h2>

        <ul className={styles.vacancies}>
          <li
            className={styles.vacancy}
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <div className={styles.content}>
              <h3 className={styles.subTitle}>PPC Specialist</h3>
              <p className={styles.workType}>Office + Remote</p>
              <p className={styles.text}>
                Key tasks: Manage and optimise PPC campaigns, conduct keyword
                research, and analyse performance data.
              </p>
            </div>
            <button
              className={styles.btn}
              onClick={() => handleApplyClick('PPC Specialist')}
            >
              Apply for a job
            </button>
          </li>

          <li
            className={styles.vacancy}
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className={styles.content}>
              <h3 className={styles.subTitle}>Affiliate Manager</h3>
              <p className={styles.workType}>Office + Remote</p>
              <p className={styles.text}>
                Key tasks: Manage affiliate partnerships, set up new partners,
                and analyse performance to drive growth.
              </p>
            </div>
            <button
              className={styles.btn}
              onClick={() => handleApplyClick('Affiliate Manager')}
            >
              Apply for a job
            </button>
          </li>

          <li
            className={styles.vacancy}
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <div className={styles.content}>
              <h3 className={styles.subTitle}>Manual QA</h3>
              <p className={styles.workType}>Office + Remote</p>
              <p className={styles.text}>
                Key tasks: Perform manual testing, identify bugs, and ensure
                product quality through detailed reporting.
              </p>
            </div>
            <button
              className={styles.btn}
              onClick={() => handleApplyClick('Manual QA')}
            >
              Apply for a job
            </button>
          </li>
        </ul>
      </div>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <ContactForm onClose={() => setIsModalOpen(false)} />
        </Modal>
      )}
    </section>
  );
};

export default Vacancies;
