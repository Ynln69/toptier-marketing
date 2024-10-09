import classNames from 'classnames';
import styles from './Vacancies.module.css';

const Vacancies = () => {
  return (
    <section className={classNames('section')}>
      <div className={classNames('container')}>
        <h2 className={classNames(styles['vacanciesTitle'], 'mainTitle')}>
          Vacancies
        </h2>

        <ul className={styles.slide}>
          <li className={styles.vacancy}>
            <div className={styles.content}>
              <h3 className={styles.subTitle}>PPC Specialist</h3>
              <p className={styles.workType}>Office + Remote</p>
              <p className={styles.text}>
                Key tasks: Manage and optimise PPC campaigns, conduct keyword
                research, and analyse performance data.
              </p>
            </div>
            <a className={styles.btn} href="mailto: info@toptier-marketing.com">
              Apply for a job
            </a>
          </li>

          <li className={styles.vacancy}>
            <div className={styles.content}>
              <h3 className={styles.subTitle}>Affiliate Manager</h3>
              <p className={styles.workType}>Office + Remote</p>
              <p className={styles.text}>
                Key tasks: Manage affiliate partnerships, set up new partners,
                and analyse performance to drive growth.
              </p>
            </div>
            <a className={styles.btn} href="mailto: info@toptier-marketing.com">
              Apply for a job
            </a>
          </li>

          <li className={styles.vacancy}>
            <div className={styles.content}>
              <h3 className={styles.subTitle}>Manual QA</h3>
              <p className={styles.workType}>Office + Remote</p>
              <p className={styles.text}>
                Key tasks: Perform manual testing, identify bugs, and ensure
                product quality through detailed reporting.
              </p>
            </div>
            <a className={styles.btn} href="mailto: info@toptier-marketing.com">
              Apply for a job
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Vacancies;
