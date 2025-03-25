import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Style from "./Options.module.css";
import { RxHamburgerMenu } from "react-icons/rx";
import Burgers from "../menu/Burgers";
import Sandwich from '../menu/Sandwich';
import Pasta from '../menu/Pasta';


export default function Options() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
 

  return (
    <>
    <div className={Style.options}>
      <ul className={Style.ul}>
        <li><Link to="/burger">Burger</Link></li>
        <li><Link to="/sandwich">Sandwich</Link></li>
        <li><Link to="/pasta">Pasta</Link></li>
        <li onClick={toggleMenu}>
          <RxHamburgerMenu />
        </li>
      </ul>

     
    </div>
    <div  className={Style.container}>
    <Routes>
          <Route path="/burger" element={<Burgers />} />
          <Route path="/sandwich" element={<Sandwich />} />
          <Route path="/pasta" element={<Pasta />} />
      </Routes>
         {isOpen && (
        <div >
         "Menu Opended!"
        </div>
      )}
    </div>
      
    </>
    
  );
}
