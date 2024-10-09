import React, { useState, useEffect } from 'react';
import iconsData from '../../data/icons.json';
import AOS from 'aos';
import 'aos/dist/aos.css';

import classNames from 'classnames';
import styles from './Technologies.module.css';

const importAllIcons = r => {
  let images = {};
  r.keys().forEach(item => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
};

const icons = importAllIcons(
  require.context('../../img/icons/', false, /\.(png|webp|jpe?g|svg)$/)
);

const Technologies = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const isIconActive = icon => {
    return selectedCategory === 'All' || icon.category === selectedCategory;
  };

  const sortedIcons = [...iconsData].sort((a, b) => {
    if (isIconActive(a) && !isIconActive(b)) {
      return -1;
    } else if (!isIconActive(a) && isIconActive(b)) {
      return 1;
    } else {
      return 0;
    }
  });

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className={classNames('section')}>
      <div className={classNames('container')}>
        <h2
          className={classNames(styles['technoTitle'], 'mainTitle')}
          data-aos="fade-down-right"
          data-aos-duration="2000"
        >
          Technologies we use
        </h2>
        <div data-aos="fade-up" data-aos-duration="2000">
          <nav className={styles.technoNav}>
            <button
              onClick={() => setSelectedCategory('All')}
              className={classNames(
                styles.technoBtn,
                selectedCategory === 'All' && styles.btnActive
              )}
            >
              All technologies
            </button>
            <button
              onClick={() => setSelectedCategory('Analytics')}
              className={classNames(
                styles.technoBtn,
                selectedCategory === 'Analytics' && styles.btnActive
              )}
            >
              Analytics
            </button>
            <button
              onClick={() => setSelectedCategory('Tools')}
              className={classNames(
                styles.technoBtn,
                selectedCategory === 'Tools' && styles.btnActive
              )}
            >
              Tools
            </button>
          </nav>

          <ul className={styles.technoList}>
            {sortedIcons.map((icon, index) => (
              <li
                key={index}
                className={classNames(
                  styles.technoItem,
                  isIconActive(icon) ? styles.active : styles.inactive
                )}
              >
                <div className={styles.technoWrapper}>
                  <img
                    src={icons[icon.src]}
                    alt={icon.name}
                    width={48}
                    height={48}
                    className={styles.technoImg}
                  />
                  <p className={styles.technoText}>{icon.name}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
