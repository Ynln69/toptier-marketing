import { useState, useEffect } from 'react';
import { PiBrainDuotone } from 'react-icons/pi';
import { PiPlugDuotone } from 'react-icons/pi';
import { PiChartLineUpDuotone } from 'react-icons/pi';
import { PiCoinsDuotone } from 'react-icons/pi';
import AOS from 'aos';
import 'aos/dist/aos.css';

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

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className={styles.heroSection}>
      <div className={classNames(styles['hero-wrapper'], 'container')}>
        <h1 className={styles.heroTitle}>
          We promote <span className={styles.heroSubText}>{displayedText}</span>
        </h1>
        <p className={styles.heroText}>Core competencies of the company</p>
        <ul className={styles.heroList}>
          <li
            className={styles.heroItem}
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <div className={styles.heroThumb}>
              <PiCoinsDuotone className={styles.heroThumbSvg} />
            </div>
            <p className={styles.heroItemText}>
              Profit-focused traffic generation
            </p>
          </li>
          <li
            className={styles.heroItem}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className={styles.heroThumb}>
              <PiBrainDuotone className={styles.heroThumbSvg} />
            </div>
            <p className={styles.heroItemText}>In-depth niche knowledge</p>
          </li>
          <li
            className={styles.heroItem}
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className={styles.heroThumb}>
              <PiChartLineUpDuotone className={styles.heroThumbSvg} />
            </div>
            <p className={styles.heroItemText}>
              All-in-one marketing infrastructure
            </p>
          </li>
          <li
            className={styles.heroItem}
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className={styles.heroThumb}>
              <PiPlugDuotone className={styles.heroThumbSvg} />
            </div>
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
