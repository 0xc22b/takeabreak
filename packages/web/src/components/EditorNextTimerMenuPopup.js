import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';

import { updatePopupUrlHash, updateEditorNextTimerId } from '../actions';
import { EDITOR_NEXT_TIMER_MENU_POPUP } from '../types/const';
import { getNextTimers } from '../selectors';
import { popupBgFMV, popupFMV } from '../types/animConfigs';
import {
  computePosition, createLayouts, getOriginStyleValue,
} from './MenuPopupRenderer';
import { isEqual } from '../utils';

import { useSafeAreaFrame } from '.';

const EditorNextTimerMenuPopup = () => {

  const { height: safeAreaHeight } = useSafeAreaFrame();
  const [popupSize, setPopupSize] = useState(null);
  const isShown = useSelector(state => state.display.isEditorNextTimerMenuPopupShown);
  const anchorPosition = useSelector(
    state => state.display.editorNextTimerMenuPopupPosition
  );
  const nextTimers = useSelector(state => getNextTimers(state, state));
  const popup = useRef(null);
  const cancelBtn = useRef(null);
  const dispatch = useDispatch();

  const onCancelBtnClick = () => {
    updatePopupUrlHash(EDITOR_NEXT_TIMER_MENU_POPUP, false, null);
  };

  const onSelectBtnClick = (id) => {
    onCancelBtnClick();
    dispatch(updateEditorNextTimerId(id));
  };

  useEffect(() => {
    if (isShown) {
      const size = popup.current.getBoundingClientRect();
      if (!isEqual(popupSize, size)) setPopupSize(size);
    } else {
      setPopupSize(null);
    }

    if (isShown) cancelBtn.current.focus();
  }, [isShown, popupSize]);

  if (!isShown) return <AnimatePresence key="AP_EditorNextTimerMenuPopup" />;

  const buttons = nextTimers.map(timer => {
    return (
      <button onClick={() => onSelectBtnClick(timer.id)} key={timer.id} className="group w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">
        {timer.name}
      </button>
    );
  });

  const popupClassNames = 'fixed rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none overflow-auto';

  let popupPanel;
  if (popupSize) {

    const maxHeight = Math.min(288, safeAreaHeight - 16);
    const layouts = createLayouts(
      anchorPosition,
      { width: anchorPosition.width, height: Math.min(popupSize.height, maxHeight) }
    );
    const popupPosition = computePosition(layouts, null, 8);

    const { top, left, topOrigin, leftOrigin } = popupPosition;
    const origin = getOriginStyleValue(topOrigin, leftOrigin);
    const popupStyle = {
      width: anchorPosition.width, top, left, transformOrigin: origin, maxHeight,
    };

    popupPanel = (
      <motion.div key="EditorNextTimerMenuPopup_popup" ref={popup} style={popupStyle} className={popupClassNames} variants={popupFMV} initial="hidden" animate="visible" exit="hidden" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
        <div className="py-1" role="none">
          {buttons}
        </div>
      </motion.div>
    );
  } else {
    popupPanel = (
      <div key="EditorNextTimerMenuPopup_popup" ref={popup} className={popupClassNames} role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
        <div className="py-1" role="none">
          {buttons}
        </div>
      </div>
    );
  }

  return (
    <AnimatePresence key="AP_EditorNextTimerMenuPopup">
      <motion.button key="EditorNextTimerMenuPopup_cancelBtn" ref={cancelBtn} onClick={onCancelBtnClick} className="fixed inset-0 w-full h-full bg-black bg-opacity-25 cursor-default focus:outline-none" variants={popupBgFMV} initial="hidden" animate="visible" exit="hidden" />
      {popupPanel}
    </AnimatePresence>
  );
};

export default React.memo(EditorNextTimerMenuPopup);
