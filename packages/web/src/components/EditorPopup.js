import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';

import { updatePopupUrlHash } from '../actions';
import { EDITOR_POPUP } from '../types/const';
import { popupBgFMV, popupFMV } from '../types/animConfigs';

import { useSafeAreaFrame } from '.';
import EditorForm from './EditorForm';

const EditorPopup = () => {

  const { height: safeAreaHeight } = useSafeAreaFrame();
  const isShown = useSelector(state => state.display.isEditorPopupShown);
  const isMoreSettingsShown = useSelector(state => state.editor.isMoreSettingsShown);
  const cancelBtn = useRef(null);

  const onCancelBtnClick = () => {
    updatePopupUrlHash(EDITOR_POPUP, false, null);
  };

  useEffect(() => {
    if (isShown) cancelBtn.current.focus();
  }, [isShown]);

  if (!isShown) return (
    <AnimatePresence key="AP_EditorPopup" />
  );

  let panelHeight;
  if (isMoreSettingsShown) panelHeight = safeAreaHeight * 0.9;
  else panelHeight = Math.min(safeAreaHeight * 0.9, 324);

  let panelStyle;
  if (isMoreSettingsShown) panelStyle = { height: panelHeight };
  else panelStyle = { maxHeight: safeAreaHeight * 0.9 };

  let panelMarginTop = 0;
  const topSpace = (safeAreaHeight - panelHeight) / 2;
  const targetSpace = 160;
  if (topSpace > targetSpace) panelMarginTop = -1 * (topSpace - targetSpace) * 2;

  return (
    <AnimatePresence key="AP_EditorPopup">
      <div className="fixed inset-0 overflow-hidden">
        <div className="p-4 flex items-center justify-center" style={{ minHeight: safeAreaHeight }}>
          <div className="fixed inset-0">
            <motion.button ref={cancelBtn} onClick={onCancelBtnClick} className="absolute inset-0 w-full h-full bg-black bg-opacity-30 cursor-default focus:outline-none" variants={popupBgFMV} initial="hidden" animate="visible" exit="hidden" />
          </div>
          <motion.div className="relative w-full max-w-2xl px-4 sm:px-6" style={{ marginTop: panelMarginTop }} variants={popupFMV} initial="hidden" animate="visible" exit="hidden" layout={true} role="dialog" aria-modal="true" aria-labelledby="modal-headline">
            <motion.div className="bg-white rounded-lg shadow-xl overflow-x-hidden overflow-y-auto" style={panelStyle} layout={true}>
              <EditorForm />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default React.memo(EditorPopup);
