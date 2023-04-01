// IMPORT REACT
import React from 'react';

// IMPORT STYLE
import '../../css/style.css';

// IMPORT COMPONENTS
import About from '../../components/About/index';
import Description from '../../components/Description/index';
import Devis from '../../components/Devis/index';
import Map from '../../components/Map/index';

// RETURN CONTACT
function Contact() {
  return (
    <div className="contact">
      <About />
      <Devis />
      <Description />
      <Map />
    </div>
  );
}

export default Contact;
