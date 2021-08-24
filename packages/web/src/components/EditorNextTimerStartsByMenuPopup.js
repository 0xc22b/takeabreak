import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';

import { updatePopupUrlHash, updateEditorNextTimerStartsBy } from '../actions';
import { EDITOR_NEXT_TIMER_STARTS_BY_MENU_POPUP } from '../types/const';
import { popupBgFMV, popupFMV } from '../types/animConfigs';
import {
  computePosition, createLayouts, getOriginStyleValue,
} from './MenuPopupRenderer';

const EditorNextTimerStartsByMenuPopup = () => {

  const isShown = useSelector(
    state => state.display.isEditorNextTimerStartsByMenuPopupShown
  );
  const anchorPosition = useSelector(
    state => state.display.editorNextTimerStartsByMenuPopupPosition
  );
  const cancelBtn = useRef(null);
  const dispatch = useDispatch();

  const onCancelBtnClick = () => {
    updatePopupUrlHash(EDITOR_NEXT_TIMER_STARTS_BY_MENU_POPUP, false, null);
  };

  const onSelectBtnClick = (value) => {
    onCancelBtnClick();
    dispatch(updateEditorNextTimerStartsBy(value));
  };

  useEffect(() => {
    if (isShown) cancelBtn.current.focus();
  }, [isShown]);

  if (!isShown) return <AnimatePresence key="AP_EditorNextTimerStartsByMenuPopup" />;

  const layouts = createLayouts(
    anchorPosition, { width: anchorPosition.width, height: 221 }
  );
  const popupPosition = computePosition(layouts, null, 8);

  const { top, left, topOrigin, leftOrigin } = popupPosition;
  const origin = getOriginStyleValue(topOrigin, leftOrigin);
  const popupStyle = { width: anchorPosition.width, top, left, transformOrigin: origin };

  return (
    <AnimatePresence key="AP_EditorNextTimerStartsByMenuPopup">
      <motion.button key="EditorNextTimerStartsByMenuPopup_cancelBtn" ref={cancelBtn} onClick={onCancelBtnClick} className="fixed inset-0 w-full h-full bg-black bg-opacity-25 cursor-default focus:outline-none" variants={popupBgFMV} initial="hidden" animate="visible" exit="hidden" />
      <motion.div key="EditorNextTimerStartsByMenuPopup_popup" style={popupStyle} className="fixed rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none divide-y divide-gray-200 overflow-hidden" variants={popupFMV} initial="hidden" animate="visible" exit="hidden" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
        <button onClick={() => onSelectBtnClick('auto')} className="group w-full p-4 text-sm text-gray-700 text-left hover:bg-indigo-500 hover:text-white focus:outline-none focus:bg-indigo-500 focus:text-white" role="menuitem">
          <p className="font-semibold">Auto</p>
          <p className="text-gray-500 mt-2 group-hover:text-indigo-200 group-focus:text-indigo-200">Start the next timer automatically after all reminders of this timer remind</p>
        </button>
        <button onClick={() => onSelectBtnClick('manual')} className="group w-full p-4 text-sm text-gray-700 text-left hover:bg-indigo-500 hover:text-white focus:outline-none focus:bg-indigo-500 focus:text-white" role="menuitem">
          <p className="font-semibold">Manual</p>
          <p className="text-gray-500 mt-2 group-hover:text-indigo-200 group-focus:text-indigo-200">Start the next timer by clicking ‘Next’ button manually.</p>
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

export default React.memo(EditorNextTimerStartsByMenuPopup);
