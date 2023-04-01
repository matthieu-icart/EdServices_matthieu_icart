// IMPORT REACT
import React from 'react';

// IMPORT DATAS
import RenovationsDatas from '../../datas/renovations';

// IMPORT STYLE
import '../../css/style.css';

// RETURN RENOVATION
function Renovation() {
  const Renovations = RenovationsDatas;
  return (
    <section className="renovation">
      {Renovations.map((picture) => (
        <article key={picture} className="renovation_image">
          <img
            src={picture}
            alt="Illustrations des rénovations réalisés par ED'Services"
          ></img>
        </article>
      ))}
    </section>
  );
}

export default Renovation;
