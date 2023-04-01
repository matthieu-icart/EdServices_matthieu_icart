// IMPORT REACT & NAVLINK
import React from 'react';

// IMPORT IMAGE
import Splash from '../../assets/splash.jpeg';

// IMPORT STYLE
import '../../css/style.css';

// RETURN INFORMATION
function InformationBanner() {
  return (
    <section className="information">
      {/* TEXT */}
      <div className="information_text">
        <h2>Un professionnel de la Plomberie à votre écoute !</h2>
        <h3>ED'Services</h3>
        <p>Résidence St Maurice</p>
        <p>Bâtiment E </p>
        <p>01700 SAINT MAURICE DE BEYNOST</p>
        <p>06 79 34 25 51</p>
      </div>
      {/* BACKGROUND IMAGE */}
      <img
        className="information_img"
        src={Splash}
        alt="Logo de l'entreprise ED'Services représentant un robinet et une goutte d'eau."
      />
      {/* SHADING */}
      <div className="shading"></div>
    </section>
  );
}

export default InformationBanner;
