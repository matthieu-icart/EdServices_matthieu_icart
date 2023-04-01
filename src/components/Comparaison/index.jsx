// IMPORT REACT & USESTATE
import React from 'react';
import { useState } from 'react';

// IMPORT DATAS
import comparaisonDatas from '../../datas/comparaisons';

// IMPORT STYLE
import '../../css/style.css';

// RETURN COMPARAISON
function Comparaison() {
  // HOOK USESTATE & GET DATAS
  const [chantier, setChantier] = useState(0);
  const [picture, setPicture] = useState(0);
  const [isAfter, setAfter] = useState(false);
  const comparaisons = comparaisonDatas;

  // SUIVANT
  function suivantPicture() {
    setPicture((oldIndex) => {
      if (oldIndex === comparaisons[chantier].before.length - 1) {
        oldIndex = 0;
      } else {
        oldIndex = oldIndex + 1;
      }
      return oldIndex;
    });
  }

  // PRECEDENT
  function precedentPicture() {
    setPicture((oldIndex) => {
      if (oldIndex <= 0) {
        oldIndex = comparaisons[chantier].before.length - 1;
      } else {
        oldIndex = oldIndex - 1;
      }
      return oldIndex;
    });
  }

  // CHOICE
  function choice(index) {
    setChantier(index);
  }

  return (
    <section className="comparaison">
      {/* ALL REALISATIONS */}
      <div className="navigationButtons">
        {comparaisons.map((element, index) => (
          <button
            className="buttonChoice"
            onClick={() => choice(index)}
            key={index}
          >
            <h4>{element.title}</h4>
            <h5>{element.fastTitle}</h5>
          </button>
        ))}
      </div>

      {/* DETAILS OF REALISATION */}
      <div className="details">
        <p className="title">{comparaisons[chantier].title}</p>
        <p>{comparaisons[chantier].description}</p>
        <p className="precision">{comparaisons[chantier].precision}</p>
        <p>{comparaisons[chantier].lieu}</p>
      </div>

      {/* CHANGE COMPARAISON BUTTONS */}
      <div className="changePictureButtons">
        <button className="changePictureButton" onClick={precedentPicture}>
          Photos précedentes
        </button>
        <button className="changePictureButton" onClick={suivantPicture}>
          Photos suivantes
        </button>
      </div>

      <div className="comparaison_slider">
        <div className="comparaison_images">
          <div className="afterBefore">
            {/* BEFORE BUTTON */}
            <button className="buttonBefore" onClick={() => setAfter(false)}>
              Avant
            </button>

            {/* AFTER BUTTON */}
            <button className="buttonAfter" onClick={() => setAfter(true)}>
              Après
            </button>
          </div>

          {/* IMAGES */}
          {isAfter ? (
            <div className="block">
              <p className="count">
                {'Photo ' +
                  parseInt(picture + 1) +
                  ' / ' +
                  comparaisonDatas[chantier].before.length}
              </p>
              <h4>Après</h4>
              <img
                key={comparaisonDatas[chantier].after[picture]}
                className="after"
                src={comparaisonDatas[chantier].after[picture]}
                alt={`Aperçu des travaux après le passage d'ED'Services`}
              />
            </div>
          ) : (
            <div className="block">
              <p className="count">
                {'Photo ' +
                  parseInt(picture + 1) +
                  ' / ' +
                  comparaisonDatas[chantier].before.length}
              </p>
              <h4>Avant</h4>
              <img
                key={comparaisonDatas[chantier].before[picture]}
                className="before"
                src={comparaisonDatas[chantier].before[picture]}
                alt={`Aperçu des travaux après le passage d'ED'Services`}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Comparaison;
