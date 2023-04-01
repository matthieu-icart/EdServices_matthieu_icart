// IMPORT REACT
import React from 'react';
import { useState } from 'react';

// IMPORT COMPONENTS
import Operation from '../../components/Operation';
import Renovation from '../../components/Renovation';
import Comparaison from '../../components/Comparaison';

// IMPORT STYLE
import '../../css/style.css';

// RETURN REALISATION
function Realisation() {
  // HOOK USESTATE
  const [isOpen, setOpen] = useState(0);
  return (
    <main className="realisation">
      {/* BUTTONS */}
      <ul>
        <li>
          <button
            className="realisation_button"
            onClick={() => setOpen(() => 0)}
          >
            <h3>Opérations</h3>
          </button>
        </li>
        <li>
          <button
            className="realisation_button"
            onClick={() => setOpen(() => 1)}
          >
            <h3>Rénovations</h3>
          </button>
        </li>
        <li>
          <button
            className="realisation_button"
            onClick={() => setOpen(() => 2)}
          >
            <h3>Avant / Après</h3>
          </button>
        </li>
      </ul>

      {/* OPERATIONS */}
      {isOpen === 0 && (
        <div>
          <h2>Operations</h2>
          <Operation />
        </div>
      )}

      {/* RENOVATIONS */}
      {isOpen === 1 && (
        <div>
          <h2>Renovations</h2>
          <Renovation />
        </div>
      )}

      {/* COMPARAISON */}
      {isOpen === 2 && (
        <div>
          <h2>Avant / Après</h2>
          <Comparaison />
        </div>
      )}
    </main>
  );
}

export default Realisation;
