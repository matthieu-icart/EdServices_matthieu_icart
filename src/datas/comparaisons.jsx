// IMPORT IMAGES
/* Septembre 2021 */
import Septembre2021Baignoire from '../assets/avantApres/Septembre21/Avant/baignoire1.jpeg';
import Septembre2021Baignoire2 from '../assets/avantApres/Septembre21/Avant/baignoire2.jpeg';
import Septembre2021Lavabo1 from '../assets/avantApres/Septembre21/Apres/lavabo1.jpeg';
import Septembre2021Lavabo2 from '../assets/avantApres/Septembre21/Apres/lavabo2.jpeg';

/* Octobre 2021 */
import Octobre2021Toilette1 from '../assets/avantApres/Octobre21/Avant/toilette1.jpeg';
import Octobre2021Sol2 from '../assets/avantApres/Octobre21/Avant/sol2.jpeg';
import Octobre2021Douche3 from '../assets/avantApres/Octobre21/Avant/douche3.jpeg';
import Octobre2021Douche2 from '../assets/avantApres/Octobre21/Apres/douche2.jpeg';
import Octobre2021Toilette2 from '../assets/avantApres/Octobre21/Apres/toilette1.jpeg';

/* Decembre 2022 */
import Decembre2022Avant from '../assets/avantApres/Decembre22/Avant/avant.jpeg';
import Decembre2022Apres from '../assets/avantApres/Decembre22/Apres/apres.jpeg';

/* Fevrier 2023 */
import Fevrier2023Wc from '../assets/avantApres/Fevrier23/Avant/wc.jpeg';
import Fevrier2023Piece from '../assets/avantApres/Fevrier23/Avant/piece.jpeg';
import Fevrier2023Douche from '../assets/avantApres/Fevrier23/Apres/douche.jpeg';

/* Fevrier 2023 Bis */
import Fevrier2023BisDouche from '../assets/avantApres/Fevrier2023bis/Apres/douche.jpeg';
import Fevrier2023BisChauffeEau from '../assets/avantApres/Fevrier2023bis/Apres/chauffeeau.jpeg';

/* IMPORT ARTICLES */
export const comparaisonDatas = [
  {
    id: '100',
    title: 'Février 2023',
    fastTitle: 'Création d’une salle d’eau',
    description:
      'Création d’une salle d’eau suite à la transformation d’un garage en studio de musique.',
    precision:
      "Malheureusement nous n'avons pas de photo des lieux avant les travaux.",
    before: [Fevrier2023BisDouche, Fevrier2023BisChauffeEau],
    after: [Fevrier2023BisDouche, Fevrier2023BisChauffeEau],
  },
  {
    id: '101',
    title: 'Février 2023',
    fastTitle: 'Transformation d’une salle de bain',
    lieu: 'Lyon 3ème',
    description:
      'Transformation d’une salle de bain en salle d’eau dans un immeuble daté des années 70.',
    precision: 'Réfection du circuit d’arrivée d’eau complet.',
    before: [Fevrier2023Wc, Fevrier2023Piece],
    after: [Fevrier2023Douche, Fevrier2023Douche],
  },
  {
    id: '103',
    title: 'Décembre 2022',
    fastTitle: "Remise à jour d'une salle d’eau",
    lieu: 'Lyon 5ème',
    description:
      "Rénovation totale avec la création d’un WC  et la remise à jour d'une salle d’eau.",
    precision:
      'Sur une durée de trois semaines dans une magnifique maison traditionnelle',
    before: [Decembre2022Avant],
    after: [Decembre2022Apres],
  },
  {
    id: '106',
    title: 'Octobre 2021',
    fastTitle: 'Rénovation suite à un dégât des eaux',
    description:
      'Rénovation totale d’une salle de bain suite à un dégât des eaux : Douche, vasque, toilette, sol, mur et plafond.',
    precision: 'Réalisé en deux semaines',
    before: [Octobre2021Toilette1, Octobre2021Sol2, Octobre2021Douche3],
    after: [Octobre2021Toilette2, Octobre2021Douche2, Octobre2021Douche2],
  },
  {
    id: '107',
    title: 'Septembre 2021',
    fastTitle: "Mise en place d'une salle de bain",
    description: "Dépose d'une baignoire, d'un lavabo et de la faïence.",
    precision: 'Un projet réalisé en cinq jours',
    before: [Septembre2021Baignoire, Septembre2021Lavabo1],
    after: [Septembre2021Baignoire2, Septembre2021Lavabo2],
  },
];

export default comparaisonDatas;
