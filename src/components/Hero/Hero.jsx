import { useState, useEffect } from 'react';
import classNames from 'classnames';
import styles from './Hero.module.css';

const Hero = () => {
  const fullText = 'CPL Projects';
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;

    const intervalId = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [fullText]);

  return (
    <section className={styles.heroSection}>
      <div className={classNames(styles['hero-wrapper'], 'container')}>
        <h1 className={styles.heroTitle}>
          We promote <span className={styles.heroSubText}>{displayedText}</span>
        </h1>
        <p className={styles.heroText}>Core competencies of the company</p>
        <ul className={styles.heroList}>
          <li className={styles.heroItem}>
            <div className={styles.heroThumb}></div>
            <p className={styles.heroItemText}>
              Profit-focused traffic generation
            </p>
          </li>
          <li className={styles.heroItem}>
            <div className={styles.heroThumb}></div>
            <p className={styles.heroItemText}>In-depth niche knowledge</p>
          </li>
          <li className={styles.heroItem}>
            <div className={styles.heroThumb}></div>
            <p className={styles.heroItemText}>
              All-in-one marketing infrastructure
            </p>
          </li>
          <li className={styles.heroItem}>
            <div className={styles.heroThumb}></div>
            <p className={styles.heroItemText}>
              Advanced analytics with technical integrations
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;
