import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';

import { updatePopupUrlHash, importData, exportData, resetData } from '../actions';
import { TOP_BAR_MENU_POPUP } from '../types/const';
import { popupBgFMV, popupFMV } from '../types/animConfigs';

import { useSafeAreaFrame } from '.';

const TopBarMenuPopup = () => {

  const { width: safeAreaWidth } = useSafeAreaFrame();
  const isShown = useSelector(state => state.display.isTopBarMenuPopupShown);
  const anchorPosition = useSelector(state => state.display.topBarMenuPopupPosition);
  const cancelBtn = useRef(null);
  const dispatch = useDispatch();

  const onCancelBtnClick = () => {
    updatePopupUrlHash(TOP_BAR_MENU_POPUP, false, null);
  };

  const onImportBtnClick = () => {
    onCancelBtnClick();
    dispatch(importData());
  };

  const onExportBtnClick = () => {
    onCancelBtnClick();
    dispatch(exportData());
  };

  const onResetBtnClick = () => {
    onCancelBtnClick();
    dispatch(resetData());
  };

  useEffect(() => {
    if (isShown) cancelBtn.current.focus();
  }, [isShown]);

  if (!isShown) return (
    <AnimatePresence key="AP_TopBarMenuPopup" />
  );

  const popupStyle = {
    top: anchorPosition.top + anchorPosition.height,
    right: safeAreaWidth - anchorPosition.right,
  };

  return (
    <AnimatePresence key="AP_TopBarMenuPopup">
      <motion.button key="TopBarMenuPopup_cancelBtn" ref={cancelBtn} onClick={onCancelBtnClick} className="fixed inset-0 w-full h-full bg-black bg-opacity-25 cursor-default focus:outline-none" variants={popupBgFMV} initial="hidden" animate="visible" exit="hidden" />
      <motion.div key="TopBarMenuPopup_popup" style={popupStyle} className="absolute origin-top-right mt-1 w-64 rounded-md shadow-lg overflow-hidden bg-white ring-1 ring-black ring-opacity-5" variants={popupFMV} initial="hidden" animate="visible" exit="hidden" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
        <div className="py-1 divide-y divide-gray-200">
          <button onClick={onImportBtnClick} className="group w-full px-4 py-3 text-sm text-left hover:bg-gray-100 focus:outline-none focus:bg-gray-100" role="menuitem">
            <div className="flex flex-col">
              <p className="text-gray-700 group-hover:text-gray-900 group-focus:text-gray-900">Import</p>
              <p className="text-gray-500 mt-2 group-hover:text-gray-700 group-focus:text-gray-700">Import data from a text file</p>
            </div>
          </button>
          <button onClick={onExportBtnClick} className="group w-full px-4 py-3 text-sm text-left hover:bg-gray-100 focus:outline-none focus:bg-gray-100" role="menuitem">
            <div className="flex flex-col">
              <p className="text-gray-700 group-hover:text-gray-900 group-focus:text-gray-900">Export</p>
              <p className="text-gray-500 mt-2 group-hover:text-gray-700 group-focus:text-gray-700">Export data to a text file</p>
            </div>
          </button>
          <button onClick={onResetBtnClick} className="group w-full px-4 py-3 text-sm text-left hover:bg-gray-100 focus:outline-none focus:bg-gray-100" role="menuitem">
            <div className="flex flex-col">
              <p className="text-gray-700 group-hover:text-gray-900 group-focus:text-gray-900">Reset</p>
              <p className="text-gray-500 mt-2 group-hover:text-gray-700 group-focus:text-gray-700">Reset everything back to defaults</p>
            </div>
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default React.memo(TopBarMenuPopup);
