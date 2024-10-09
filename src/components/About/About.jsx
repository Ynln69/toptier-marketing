import { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import classNames from 'classnames';
import styles from './About.module.css';

const About = ({ setRef }) => {
  const aboutRef = useRef(null);

  useEffect(() => {
    AOS.init();
    setRef('about', aboutRef);
  }, [setRef]);

  return (
    <section ref={aboutRef} className={classNames('section')}>
      <div className={classNames('container')}>
        <h2
          className={classNames(styles['aboutTitle'], 'mainTitle')}
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          About Us
        </h2>
        <p
          className={styles.aboutText}
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          Top Tier Marketing is an international IT company dedicated to
          investing in and promoting projects in English-speaking markets.
        </p>
      </div>
    </section>
  );
};

export default About;
