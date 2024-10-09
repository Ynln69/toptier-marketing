import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Google from '../../img/Google-Premier-Partner.png';
import DV from '../../img/DV360-logo.png';

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
        <ul
          className={styles.partnerList}
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          <li className={styles.partnerItem}>
            <div className={styles.partnerItemThumb}>
              <div className={styles.partnerItemImg}>
                <img src={Google} alt="" />
              </div>
              <div className={styles.partnerItemLine}></div>
              <h3 className={styles.partnerItemText}>Google Premier Partner</h3>
            </div>
          </li>
          <li className={styles.partnerItem}>
            <div className={styles.partnerItemThumb}>
              <div className={styles.partnerItemImg}>
                <img src={DV} alt="" />
              </div>
              <div className={styles.partnerItemLine}></div>
              <h3 className={styles.partnerItemText}>DV360 </h3>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Partnerships;
