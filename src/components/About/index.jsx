// IMPORT REACT
import React from 'react';

// IMPORT STYLE
import '../../css/style.css';

// RETURN INFORMATION
function About() {
  return (
    <section className="about">
      {/* TEXT */}
      <div className="about_text">
        <h2>ED'Services</h2>
        <p>Résidence St Maurice</p>
        <p>Bâtiment E </p>
        <p>01700 SAINT MAURICE DE BEYNOST</p>
        <p>06 79 34 25 51</p>
        <a className="link" href="mailto:edservices01@orange.fr">
          edservices01@orange.fr
        </a>
      </div>
    </section>
  );
}

export default About;
