import React from 'react';

import Hero from './Hero';
import Feature from './Feature';
import SupportUs from './SupportUs';
import Footer from './Footer';
import TopBarMenuPopup from './TopBarMenuPopup';
import TimerItemMenuPopup from './TimerItemMenuPopup';
import EditorPopup from './EditorPopup';
import EditorReminderMenuPopup from './EditorReminderMenuPopup';
import EditorReminderSoundMenuPopup from './EditorReminderSoundMenuPopup';
import EditorNextTimerMenuPopup from './EditorNextTimerMenuPopup';
import EditorNextTimerStartsByMenuPopup from './EditorNextTimerStartsByMenuPopup';
import EditorDefaultMenuPopup from './EditorDefaultMenuPopup';
import EditorRepetitionsTooltip from './EditorRepetitionsTooltip';
import EditorIntervalTooltip from './EditorIntervalTooltip';
import ConfirmDeletePopup from './ConfirmDeletePopup';
import ConfirmDiscardPopup from './ConfirmDiscardPopup';

const Main = () => {

  return (
    <React.Fragment>
      <Hero />
      <Feature />
      <SupportUs />
      <Footer />
      <TopBarMenuPopup />
      <TimerItemMenuPopup />
      <EditorPopup />
      <EditorReminderMenuPopup />
      <EditorReminderSoundMenuPopup />
      <EditorNextTimerMenuPopup />
      <EditorNextTimerStartsByMenuPopup />
      <EditorDefaultMenuPopup />
      <EditorRepetitionsTooltip />
      <EditorIntervalTooltip />
      <ConfirmDeletePopup />
      <ConfirmDiscardPopup />
    </React.Fragment>
  );
};

export default React.memo(Main);
