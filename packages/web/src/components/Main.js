import React from 'react';

import Hero from './Hero';
import Feature from './Feature';
import SupportUs from './SupportUs';
import Footer from './Footer';
import TopBarMenuPopup from './TopBarMenuPopup';
import TimerItemMenuPopup from './TimerItemMenuPopup';
//import EditorPopup from './EditorPopup';
import ConfirmDeletePopup from './ConfirmDeletePopup';

const Main = () => {

  return (
    <React.Fragment>
      <Hero />
      <Feature />
      <SupportUs />
      <Footer />
      <TopBarMenuPopup />
      <TimerItemMenuPopup />
      <ConfirmDeletePopup />
    </React.Fragment>
  );
};

export default React.memo(Main);
