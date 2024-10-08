import classNames from 'classnames';
import styles from './About.module.css';

const About = () => {
  return (
    <section className={classNames('section')}>
      <div className={classNames('container')}>
        <h2 className={classNames(styles['aboutTitle'], 'mainTitle')}>
          About Us
        </h2>
        <p className={styles.aboutText}>
          Top Tier Marketing is an international IT company dedicated to
          investing in and promoting projects in English-speaking markets.
        </p>
      </div>
    </section>
  );
};

export default About;
