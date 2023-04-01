// IMPORT REACT, NAVLINK & USESTATE
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

// IMPORT STYLE
import '../../css/style.css';

// RETURN NAVIGATION
function Navigation() {
  // HOOK USESTATE
  const [isOpen, setOpen] = useState(true);
  return (
    <div className="navigation">
      <div>
        {/* LARGE */}
        <div className="navigation_large">
          {/* NAVBAR */}
          <nav>
            <ul className="navigation_pages">
              <li className="navigation_page">
                <NavLink to="/home">Accueil</NavLink>
              </li>
              <li className="navigation_page">
                <NavLink to="/realisation">Realisations</NavLink>
              </li>
              <li className="navigation_page">
                <NavLink to="/article">Articles</NavLink>
              </li>
              <li className="navigation_page">
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="navigation_short">
          {/* BUTTON */}
          <button
            className="buttonNavigation"
            onClick={() => setOpen((state) => !state)}
          >
            <i
              className={`fa-sharp fa-solid fa-bars ${
                isOpen ? 'open' : 'close'
              }`}
            ></i>
            <i
              className={`fa-sharp fa-solid fa-xmark ${
                isOpen ? 'close' : 'open'
              }`}
            ></i>
          </button>
        </div>
      </div>
      {/* SHORT */}
      <div className={`${isOpen ? 'close' : 'open'}`}>
        {/* NAVBAR */}
        <nav>
          <ul className="navigation_pages">
            <li className="navigation_page">
              <button
                className="buttonPage"
                onClick={() => setOpen((state) => !state)}
              >
                <NavLink to="/home">Accueil</NavLink>
              </button>
            </li>
            <li className="navigation_page">
              <button
                className="buttonPage"
                onClick={() => setOpen((state) => !state)}
              >
                <NavLink to="/realisation">Realisations</NavLink>
              </button>
            </li>
            <li className="navigation_page">
              <button
                className="buttonPage"
                onClick={() => setOpen((state) => !state)}
              >
                <NavLink to="/article">Articles</NavLink>
              </button>
            </li>
            <li className="navigation_page">
              <button
                className="buttonPage"
                onClick={() => setOpen((state) => !state)}
              >
                <NavLink to="/contact">Contact</NavLink>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navigation;
