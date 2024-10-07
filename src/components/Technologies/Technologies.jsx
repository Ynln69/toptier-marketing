import React, { useState } from 'react';
import iconsData from '../../data/icons.json';

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
  return (
    <section className={classNames('section')}>
      <div className={classNames(styles['hero-wrapper'], 'container')}>
        <h2 className={classNames(styles['technoTitle'], 'mainTitle')}>
          Technologies we use
        </h2>
        <nav className={styles.technoNav}>
          <button
            onClick={() => setSelectedCategory('All')}
            className={styles.technoBtn}
          >
            All technologies
          </button>
          <button
            onClick={() => setSelectedCategory('Analytics')}
            className={styles.technoBtn}
          >
            Analytics
          </button>
          <button
            onClick={() => setSelectedCategory('Tools')}
            className={styles.technoBtn}
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
              <img
                src={icons[icon.src]}
                alt={icon.name}
                width={48}
                height={48}
              />
              <p className={styles.technoText}>{icon.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Technologies;
