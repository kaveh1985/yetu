import React, { useState } from 'react';
import styles from './BurgerMenu.module.css';  // Import the CSS Module

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the menu open/close state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Burger Menu Icon */}
      <div 
        className={`${styles.burgerMenu} ${isOpen ? styles.open : ''}`} 
        onClick={toggleMenu}
      >
        <div className={styles.burgerIcon}></div>
        <div className={styles.burgerIcon}></div>
        <div className={styles.burgerIcon}></div>
      </div>

      {/* Side Menu */}
      <div className={`${styles.sideMenu} ${isOpen ? styles.open : ''}`}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default BurgerMenu;
