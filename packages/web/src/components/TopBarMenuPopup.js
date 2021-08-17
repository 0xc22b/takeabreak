import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';

import { updatePopupUrlHash } from '../actions';
import { TOP_BAR_MENU_POPUP } from '../types/const';
import { popupBgFMV, popupFMV } from '../types/animConfigs';

import { useSafeAreaFrame } from '.';

const TopBarMenuPopup = () => {

  const { width: safeAreaWidth } = useSafeAreaFrame();
  const isShown = useSelector(state => state.display.isTopBarMenuPopupShown);
  const anchorPosition = useSelector(state => state.display.topBarMenuPopupPosition);
  const cancelBtn = useRef(null);
  //const dispatch = useDispatch();

  const onCancelBtnClick = () => {
    updatePopupUrlHash(TOP_BAR_MENU_POPUP, false, null);
  };

  const onImportBtnClick = () => {
    onCancelBtnClick();
    //dispatch(importData());
  };

  const onExportBtnClick = () => {
    onCancelBtnClick();
    //dispatch(exportData());
  };

  const onResetBtnClick = () => {
    onCancelBtnClick();
    //dispatch(resetData());
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
      <motion.div key="TopBarMenuPopup_popup" style={popupStyle} className="absolute origin-top mt-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5" variants={popupFMV} initial="hidden" animate="visible" exit="hidden" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
        <div className="py-1">
          <button onClick={onImportBtnClick} className="group w-full flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">
            Import
          </button>
          <button onClick={onExportBtnClick} className="group w-full flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">
            Export
          </button>
          <button onClick={onResetBtnClick} className="group w-full flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">
            Reset
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default React.memo(TopBarMenuPopup);
