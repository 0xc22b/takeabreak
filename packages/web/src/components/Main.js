import React from 'react';

import Hero from './Hero';
import Feature from './Feature';
import SupportUs from './SupportUs';
import Footer from './Footer';
import TopBarMenuPopup from './TopBarMenuPopup';
//import EditorPopup from './EditorPopup';

const Main = () => {

  return (
    <React.Fragment>
      <Hero />
      <Feature />
      <SupportUs />
      <Footer />
      <TopBarMenuPopup />
    </React.Fragment>
  );
};

export default React.memo(Main);
