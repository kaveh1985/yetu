import React from 'react';
import styles from './Burgers.module.css';



const Burgers = () => {
  return (
    <div className={styles.imageWrapper}>
      <img src="/food/food-1.jpg" alt="Burger 1" />
      <div className={styles.burgerImages}>
        <img src="/food/food-2.jpg" alt="Burger 2" />
      </div>
      <div className={styles.imageWrapper}>
        <img src="/food/food-3.jpg" alt="Burger 3" />
      </div>
      <div className={styles.imageWrapper}>
        <img src="/food/food-4.jpg" alt="Burger 4" />
      </div>
    </div>
  );
};


export default Burgers;
