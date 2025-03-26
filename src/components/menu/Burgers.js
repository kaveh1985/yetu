import React from 'react';
import styles from './Burgers.module.css';


const Burgers = () => {
  return (
    <div className={styles.burgerFrame}>
      <div className={styles.imageContainer}>
        <img src="/food/food-1.jpg" alt="Burger 1" className={styles.burgerImage} />
      </div>
      <div className={styles.imageContainer}>
        <img src="/food/food-2.jpg" alt="Burger 2" className={styles.burgerImage} />
      </div>
      <div className={styles.imageContainer}>
        <img src="/food/food-3.jpg" alt="Burger 3" className={styles.burgerImage} />
      </div>
      <div className={styles.imageContainer}>
        <img src="/food/food-4.jpg" alt="Burger 4" className={styles.burgerImage} />
      </div>
    </div>
  );
};

export default Burgers;
