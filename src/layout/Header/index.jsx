// IMPORT REACT
import React from 'react';

// IMPORT COMPONENTS
import Logo from '../../components/Logo/index';
import Navigation from '../../components/Navigation/index';

// IMPORT IMAGE
import Splash from '../../assets/splash.jpeg';

// IMPORT STYLE
import '../../css/style.css';

// RETURN HEADER
function Header() {
  return (
    <header>
      {/* BACKGROUND IMAGE */}
      <img
        src={Splash}
        alt="Logo de l'entreprise ED'Services représentant un robinet et une goutte d'eau."
      />
      {/* LOGO & NAVABAR */}
      <div className="band">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
