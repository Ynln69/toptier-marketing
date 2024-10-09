import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import classNames from 'classnames';
import styles from './Partnerships.module.css';

const Partnerships = ({ setRef }) => {
  const partnershipsRef = useRef(null);

  useEffect(() => {
    AOS.init();
    setRef('partnerships', partnershipsRef);
  }, [setRef]);

  return (
    <section ref={partnershipsRef} className={classNames('section')}>
      <div className={classNames('container')}>
        <h2
          className={classNames(styles['aboutTitle'], 'mainTitle')}
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          Partnerships
        </h2>
        <p
          className={styles.aboutText}
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic numquam
          nesciunt natus nulla repellat voluptatum ratione laboriosam atque
          blanditiis veniam placeat illum harum perferendis fugiat reiciendis
          aliquam, molestiae impedit totam.
        </p>
      </div>
    </section>
  );
};

export default Partnerships;
