// IMPORT REACT & NAVLINK
import React from 'react';
import { NavLink } from 'react-router-dom';

// IMPORT IMAGE
import Corporate from '../../assets/corporate.jpeg';

// IMPORT STYLE
import '../../css/style.css';

// RETURN LOGO
function Logo() {
  return (
    <div className="logo">
      <NavLink className="logo_block" to="/home">
        {/* LOGO */}
        <img
          src={Corporate}
          alt="Logo de l'entreprise ED'Services représentant un robinet et une goutte d'eau."
        />
        {/* TITLE */}
        <h1>ED'Services</h1>
      </NavLink>
    </div>
  );
}

export default Logo;
