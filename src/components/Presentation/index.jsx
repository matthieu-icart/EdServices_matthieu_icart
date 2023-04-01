// IMPORT REACT
import React from 'react';

// IMPORT DATAS
import { PresentationDatas } from '../../datas/presentation';

// IMPORT STYLE
import '../../css/style.css';

// RETURN PRESENTATION
function Presentation() {
  return (
    <main className="presentation">
      {/* PRESENTATION */}
      {PresentationDatas.map((presentation) => (
        <article key={presentation.id}>
          <h2>{presentation.title}</h2>
          <div className="presentation_block">
            <div className="presentation_paragraphe">
              <p>{presentation.paragraphe}</p>
            </div>
            {/* SERVICES */}
            <div className="presentation_list">
              <ul>
                <li>
                  <h3>Services</h3>
                </li>
                <li>{presentation.service[0]}</li>
                <li>{presentation.service[1]}</li>
                <li>{presentation.service[2]}</li>
                <li>{presentation.service[3]}</li>
                <li>{presentation.service[4]}</li>
              </ul>
            </div>
          </div>
        </article>
      ))}
    </main>
  );
}

export default Presentation;
