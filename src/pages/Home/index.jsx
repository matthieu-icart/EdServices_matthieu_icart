// IMPORT REACT
import React from 'react';

// IMPORT COMPONENTS
import InformationBanner from '../../components/InformationBanner/index';
import Presentation from '../../components/Presentation/index';
import Devis from '../../components/Devis/index';
import Engagement from '../../components/Engagement/index';

// IMPORT STYLE
import '../../css/style.css';

// RETURN HOME
function Home() {
  return (
    <div className="home">
      {/* BANNER */}
      <InformationBanner />
      {/* DEVIS */}
      <Devis />
      {/* PRESENTATION */}
      <Presentation />
      {/* ENGAGEMENT */}
      <Engagement />
    </div>
  );
}

export default Home;
