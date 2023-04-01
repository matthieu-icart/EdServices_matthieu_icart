// IMPORT REACT
import React from 'react';

// IMPORT DATAS
import OperationsDatas from '../../datas/operations';

// IMPORT STYLE
import '../../css/style.css';

// RETURN OPERATION
function Operation() {
  const Operations = OperationsDatas;
  return (
    <section className="operation">
      {Operations.map((picture) => (
        <article key={picture} className="operation_image">
          <img
            src={picture}
            alt="Illustrations des opérations réalisés par ED'Services"
          ></img>
        </article>
      ))}
    </section>
  );
}

export default Operation;
