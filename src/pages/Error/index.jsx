// IMPORT REACT & NAVLINK
import React from 'react';
import { NavLink } from 'react-router-dom';

// IMPORT IMAGE
import Oops from '../../assets/oops.webp';

// IMPORT COMPONENTS

// IMPORT STYLE
import '../../css/style.css';

// RETURN ERROR
function Error() {
  return (
    <main className="error">
      <img
        src={Oops}
        alt="Illustration expliquant qu'une erreur 404 a eu lieu."
      />
      <p>Cette page n'existe pas.</p>
      <NavLink to="/home">- Retournez à l'accueil -</NavLink>
    </main>
  );
}

export default Error;
