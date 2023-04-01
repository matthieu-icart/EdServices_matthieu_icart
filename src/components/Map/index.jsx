// IMPORT REACT & IFRAME
import React from 'react';
import Iframe from 'react-iframe';

// IMPORT STYLE
import '../../css/style.css';

// RETURN INFORMATIONS
function Map() {
  return (
    <section className="map">
      <h3>Mon rayon d'action est de 40 km autour de St Maurice de Beynost</h3>
      <Iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126757.93471723438!2d4.977105257350563!3d45.7985593714466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4b8d96c6fb5fb%3A0xce3179bb2acbe55!2sR%C3%A9s%20Saint-Maurice%2C%2001700%20Saint-Maurice-de-Beynost!5e0!3m2!1sfr!2sfr!4v1677791940899!5m2!1sfr!2sfr"
        allowfullscreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></Iframe>
      <p className="map_citys">
        Lyon • Villeurbanne • Vaulx-en-Velin • Rillieux-la-Pape • Meyzieu •
        Décines • Charpieu • Miribel • Trévoux • Montluel • Meximieux •
        Bourgoin-Jallieu • La Tour-du-Pin • Pont-de-Chéruy • Saint-Priest • Bron
        • Etc..
      </p>
    </section>
  );
}

export default Map;
