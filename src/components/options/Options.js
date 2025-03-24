import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Style from "./Options.module.css";
import { RxHamburgerMenu } from "react-icons/rx";
import Burger from "../menu/Burgers";
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

      {isOpen && (
        <div >
         "some random texts"
        </div>
      )}
    </div>
       <Routes>
          <Route path="/burger" element={<Burger />} />
          <Route path="/sandwich" element={<Sandwich />} />
          <Route path="/pasta" element={<Pasta />} />
      </Routes>
    </>
  );
}
