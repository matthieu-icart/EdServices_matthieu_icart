// IMPORT REACT & NAVLINK
import React from 'react';
import { Link } from 'react-router-dom';

// IMPORT STYLE
import '../../css/style.css';

// RETURN FOOTER
function Footer() {
  return (
    <footer>
      <Link to="/home">ED'SERVICES</Link>
      <Link className="whiteLink" to="/contact">
        ED'SERVICES
      </Link>
      <Link to="/home">ED'SERVICES</Link>
      <Link className="whiteLink" to="/contact">
        ED'SERVICES
      </Link>
      <Link to="/home">ED'SERVICES</Link>
      <Link className="whiteLink" to="/contact">
        ED'SERVICES
      </Link>
      <Link to="/home">ED'SERVICES</Link>
      <Link className="whiteLink" to="/contact">
        ED'SERVICES
      </Link>
      <Link to="/home">ED'SERVICES</Link>
    </footer>
  );
}

export default Footer;
