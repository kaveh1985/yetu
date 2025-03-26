import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Style from "./Options.module.css";
import { RxHamburgerMenu } from "react-icons/rx"; 
import Burgers from "../menu/Burgers";
import Sandwich from '../menu/Sandwich';
import Pasta from '../menu/Pasta';
import BurgerMenu from '../menu/BurgerMenu'; // Import the BurgerMenu component

export default function Options() {
  const [isOpen, setIsOpen] = useState(false);
  
  // Function to toggle the state of the side menu
  const toggleMenu = () => {
    alert('hi')
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={Style.options}>
        <ul className={Style.ul}>
          <li><Link to="/burger">Burger</Link></li>
          <li><Link to="/sandwich">Sandwich</Link></li>
          <li><Link to="/pasta">Pasta</Link></li>
          {/* Use the BurgerMenu component to control the toggle */}
          <li onClick={toggleMenu}>
            <RxHamburgerMenu />
          </li>
        </ul>
      </div>

      {/* BurgerMenu component should be placed here */}
      <BurgerMenu isOpen={isOpen} toggleMenu={toggleMenu} /> 

      <div className={Style.container}>
        <Routes>
          <Route path="/burger" element={<Burgers />} />
          <Route path="/sandwich" element={<Sandwich />} />
          <Route path="/pasta" element={<Pasta />} />
        </Routes>
      </div>
    </>
  );
}
