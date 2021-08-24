import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';

import { updatePopupUrlHash, updateEditorReminderSound } from '../actions';
import { EDITOR_REMINDER_SOUND_MENU_POPUP } from '../types/const';
import { SOUNDS } from '../types/soundPaths';
import { popupBgFMV, popupFMV } from '../types/animConfigs';
import {
  computePosition, createLayouts, getOriginStyleValue,
} from './MenuPopupRenderer';

const EditorReminderSoundMenuPopup = () => {

  const isShown = useSelector(state => state.display.isEditorReminderSoundMenuPopupShown);
  const anchorPosition = useSelector(
    state => state.display.editorReminderSoundMenuPopupPosition
  );
  const cancelBtn = useRef(null);
  const dispatch = useDispatch();

  const onCancelBtnClick = () => {
    updatePopupUrlHash(EDITOR_REMINDER_SOUND_MENU_POPUP, false, null);
  };

  const onSelectBtnClick = (name) => {
    onCancelBtnClick();
    dispatch(updateEditorReminderSound(name));
  };

  useEffect(() => {
    if (isShown) cancelBtn.current.focus();
  }, [isShown]);

  if (!isShown) return <AnimatePresence key="AP_EditorReminderSoundMenuPopup" />;

  const layouts = createLayouts(
    anchorPosition, { width: anchorPosition.width, height: 224 }
  );
  const popupPosition = computePosition(layouts, null, 8);

  const { top, left, topOrigin, leftOrigin } = popupPosition;
  const origin = getOriginStyleValue(topOrigin, leftOrigin);
  const popupStyle = { width: anchorPosition.width, top, left, transformOrigin: origin };

  const buttons = SOUNDS.map(sound => {
    return (
      <button onClick={() => onSelectBtnClick(sound.name)} key={sound.name} className="group w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">
        {sound.name}
      </button>
    );
  });

  return (
    <AnimatePresence key="AP_EditorReminderSoundMenuPopup">
      <motion.button key="EditorReminderSoundMenuPopup_cancelBtn" ref={cancelBtn} onClick={onCancelBtnClick} className="fixed inset-0 w-full h-full bg-black bg-opacity-25 cursor-default focus:outline-none" variants={popupBgFMV} initial="hidden" animate="visible" exit="hidden" />
      <motion.div key="EditorReminderSoundMenuPopup_popup" style={popupStyle} className="fixed rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" variants={popupFMV} initial="hidden" animate="visible" exit="hidden" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
        <div className="py-1" role="none">
          {buttons}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default React.memo(EditorReminderSoundMenuPopup);
