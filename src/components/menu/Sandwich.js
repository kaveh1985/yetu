import React from 'react';
import styles from './Sandwich.module.css';

const Sandwich = () => {
  return (
    <div className={styles.sandwichFrame}>
      <div className={styles.imageContainer}>
        <img src="/food/food-5.jpg" alt="Sandwich 1" className={styles.sandwichImage} />
      </div>
      <div className={styles.imageContainer}>
        <img src="/food/food-6.jpg" alt="Sandwich 2" className={styles.sandwichImage} />
      </div>
      <div className={styles.imageContainer}>
        <img src="/food/food-7.jpg" alt="Sandwich 3" className={styles.sandwichImage} />
      </div>
      <div className={styles.imageContainer}>
        <img src="/food/food-8.jpg" alt="Sandwich 4" className={styles.sandwichImage} />
      </div>
    </div>
  );
};

export default Sandwich;