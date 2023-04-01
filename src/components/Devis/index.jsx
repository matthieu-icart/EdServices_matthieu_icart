// IMPORT REACT, USESTATE & AXIOS
import React from 'react';
import { useState } from 'react';
import axios from 'axios';

// IMPORT DATAS
import Mail from '../../datas/mail';

// IMPORT STYLE
import '../../css/style.css';

// RETURN DEVIS
function Devis() {
  // HOOK USESTATE
  const [isOpen, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const API_KEY = Mail;

  // SEND EMAIL
  function sendEmail(formData) {
    // STRINGIFY
    const message = JSON.stringify(formData);
    // POST MAIL
    axios
      .post(
        'https://api.sendinblue.com/v3/smtp/email',
        {
          sender: { email: 'matthieuicart@hotmail.fr' },
          to: [{ email: 'matthieuicart@hotmail.fr' }],
          subject: 'Subject of the email',
          htmlContent: '<p> ' + message + '</p>',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'api-key': API_KEY,
          },
        }
      )
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error.response.data));
  }

  // PREVENT DEFAULT SUBMIT
  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);

    // CREATE JSON WITH EVENT VALUES
    const formData = {
      nom: event.target.elements.nom.value,
      prenom: event.target.elements.prenom.value,
      telephone: event.target.elements.telephone.value,
      email: event.target.elements.email.value,
      information_complémentaire:
        event.target.elements.information_complémentaire.value,
    };

    // SEND MAIL
    sendEmail(formData);
  }

  return (
    <section className="devis">
      {/* BUTTON */}
      <button
        className={`buttonDevis ${isOpen ? 'close' : 'open'}`}
        onClick={() => setOpen((state) => !state)}
      >
        Demander un Devis
      </button>

      {/* FORMULAIRE DE CONTACT  */}
      <div className={`contact ${isOpen ? 'open' : 'close'}`}>
        <div className="contact_formulaire">
          {submitted ? (
            <div className="contact_response">
              <p> Merci d'avoir soumis votre demande.</p>
              <p>Nous vous contacterons sous peu.</p>
            </div>
          ) : (
            <form method="POST" onSubmit={handleSubmit}>
              <label>
                Nom
                <input type="text" name="nom" placeholder="Votre nom" />
              </label>
              <label>
                Prénom
                <input type="text" name="prenom" placeholder="Votre prénom" />
              </label>
              <label>
                Téléphone
                <input
                  type="tel"
                  name="telephone"
                  placeholder="Votre numéro de téléphone"
                />
              </label>
              <label>
                Mail
                <input
                  type="email"
                  name="email"
                  placeholder="Votre adresse email"
                />
              </label>
              <div className="textArea">
                <label htmlFor="information_complémentaire">
                  Informations complémentaires
                </label>
                <textarea
                  name="information_complémentaire"
                  id="information_complémentaire"
                  placeholder="Entrez ici toutes les informations complémentaires que vous souhaitez nous transmettre"
                ></textarea>
              </div>
              <input
                className="buttonDevis"
                type="submit"
                value="Demander un devis"
              />
            </form>
          )}
        </div>

        {/* BUTTON RETURN */}
        <button
          className="buttonReturn"
          onClick={() => setOpen((state) => !state)}
        >
          <i className="fa-sharp fa-solid fa-angles-up"></i>
        </button>
      </div>
    </section>
  );
}

export default Devis;
