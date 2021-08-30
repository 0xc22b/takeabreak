import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';

import { hideEditor } from '../actions';
import { popupBgFMV, popupFMV } from '../types/animConfigs';

import { useSafeAreaFrame } from '.';
import EditorForm from './EditorForm';

const EditorPopup = () => {

  const { height: safeAreaHeight } = useSafeAreaFrame();
  const isShown = useSelector(state => state.display.isEditorPopupShown);
  const isMoreSettingsShown = useSelector(state => state.editor.isMoreSettingsShown);
  const cancelBtn = useRef(null);
  const dispatch = useDispatch();

  const onCancelBtnClick = () => {
    dispatch(hideEditor(true));
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
          <motion.div className="w-full max-w-2xl px-4 sm:px-6" style={{ marginTop: panelMarginTop }} variants={popupFMV} initial="hidden" animate="visible" exit="hidden" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
            <div className="bg-white rounded-lg shadow-xl relative overflow-x-hidden overflow-y-auto" style={panelStyle}>
              <EditorForm />
              <div className="absolute top-0 right-0 p-1">
                <button onClick={onCancelBtnClick} className="flex items-center justify-center h-7 w-7 group focus:outline-none" aria-label="Close settings popup">
                  <svg className="h-5 w-5 text-gray-400 rounded group-hover:text-gray-500 group-focus:ring-2 group-focus:ring-gray-400" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default React.memo(EditorPopup);
