import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';

import { updatePopupUrlHash, moveTimerUp, moveTimerDown, showEditor } from '../actions';
import { TIMER_ITEM_MENU_POPUP, CONFIRM_DELETE_POPUP } from '../types/const';
import { popupBgFMV, popupFMV } from '../types/animConfigs';

import { useSafeAreaFrame } from '.';

const TimerItemMenuPopup = () => {

  const { width: safeAreaWidth } = useSafeAreaFrame();
  const isShown = useSelector(state => state.display.isTimerItemMenuPopupShown);
  const anchorPosition = useSelector(state => state.display.timerItemMenuPopupPosition);
  const cancelBtn = useRef(null);
  const dispatch = useDispatch();

  const onCancelBtnClick = () => {
    updatePopupUrlHash(TIMER_ITEM_MENU_POPUP, false, null);
  };

  const onEditBtnClick = () => {
    onCancelBtnClick();
    setTimeout(() => dispatch(showEditor(false)), 100);
  };

  const onMoveUpBtnClick = () => {
    onCancelBtnClick();
    dispatch(moveTimerUp());
  };

  const onMoveDownBtnClick = () => {
    onCancelBtnClick();
    dispatch(moveTimerDown());
  };

  const onDeleteBtnClick = () => {
    updatePopupUrlHash(CONFIRM_DELETE_POPUP, true, null);
  };

  useEffect(() => {
    if (isShown) cancelBtn.current.focus();
  }, [isShown]);

  if (!isShown) return <AnimatePresence key="AP_TimerItemMenuPopup" />;

  const popupStyle = {
    top: anchorPosition.top + anchorPosition.height + window.pageYOffset,
    right: safeAreaWidth - anchorPosition.right,
    transformOrigin: 'top right',
  };

  const buttons = (
    <React.Fragment>
      <button onClick={onEditBtnClick} className="group w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">
        <svg className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.414 2.586C17.0389 2.21106 16.5303 2.00043 16 2.00043C15.4697 2.00043 14.9611 2.21106 14.586 2.586L7 10.172V13H9.828L17.414 5.414C17.7889 5.03894 17.9996 4.53033 17.9996 4C17.9996 3.46967 17.7889 2.96106 17.414 2.586Z" />
          <path fillRule="evenodd" clipRule="evenodd" d="M2 6C2 5.46957 2.21071 4.96086 2.58579 4.58579C2.96086 4.21071 3.46957 4 4 4H8C8.26522 4 8.51957 4.10536 8.70711 4.29289C8.89464 4.48043 9 4.73478 9 5C9 5.26522 8.89464 5.51957 8.70711 5.70711C8.51957 5.89464 8.26522 6 8 6H4V16H14V12C14 11.7348 14.1054 11.4804 14.2929 11.2929C14.4804 11.1054 14.7348 11 15 11C15.2652 11 15.5196 11.1054 15.7071 11.2929C15.8946 11.4804 16 11.7348 16 12V16C16 16.5304 15.7893 17.0391 15.4142 17.4142C15.0391 17.7893 14.5304 18 14 18H4C3.46957 18 2.96086 17.7893 2.58579 17.4142C2.21071 17.0391 2 16.5304 2 16V6Z" />
        </svg>
        Edit
      </button>
      <button onClick={onMoveUpBtnClick} className="group w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">
        <svg className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M5.29303 7.707C5.10556 7.51947 5.00024 7.26516 5.00024 7C5.00024 6.73484 5.10556 6.48053 5.29303 6.293L9.29303 2.293C9.48056 2.10553 9.73487 2.00021 10 2.00021C10.2652 2.00021 10.5195 2.10553 10.707 2.293L14.707 6.293C14.8892 6.4816 14.99 6.7342 14.9877 6.9964C14.9854 7.2586 14.8803 7.50941 14.6948 7.69482C14.5094 7.88023 14.2586 7.9854 13.9964 7.98767C13.7342 7.98995 13.4816 7.88916 13.293 7.707L11 5.414V17C11 17.2652 10.8947 17.5196 10.7071 17.7071C10.5196 17.8946 10.2652 18 10 18C9.73481 18 9.48046 17.8946 9.29292 17.7071C9.10539 17.5196 9.00003 17.2652 9.00003 17V5.414L6.70703 7.707C6.5195 7.89447 6.26519 7.99979 6.00003 7.99979C5.73487 7.99979 5.48056 7.89447 5.29303 7.707Z" />
        </svg>
        Move up
      </button>
      <button onClick={onMoveDownBtnClick} className="group w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">
        <svg className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M14.7071 12.293C14.8946 12.4805 14.9999 12.7348 14.9999 13C14.9999 13.2652 14.8946 13.5195 14.7071 13.707L10.7071 17.707C10.5196 17.8945 10.2652 17.9998 10.0001 17.9998C9.73492 17.9998 9.48061 17.8945 9.29308 17.707L5.29308 13.707C5.19757 13.6148 5.12139 13.5044 5.06898 13.3824C5.01657 13.2604 4.98898 13.1292 4.98783 12.9964C4.98668 12.8636 5.01198 12.7319 5.06226 12.609C5.11254 12.4861 5.18679 12.3745 5.28069 12.2806C5.37458 12.1867 5.48623 12.1125 5.60913 12.0622C5.73202 12.0119 5.8637 11.9866 5.99648 11.9877C6.12926 11.9889 6.26048 12.0165 6.38249 12.0689C6.50449 12.1213 6.61483 12.1975 6.70708 12.293L9.00008 14.586V3C9.00008 2.73478 9.10544 2.48043 9.29297 2.29289C9.48051 2.10536 9.73486 2 10.0001 2C10.2653 2 10.5197 2.10536 10.7072 2.29289C10.8947 2.48043 11.0001 2.73478 11.0001 3V14.586L13.2931 12.293C13.4806 12.1055 13.7349 12.0002 14.0001 12.0002C14.2652 12.0002 14.5196 12.1055 14.7071 12.293Z" />
        </svg>
        Move down
      </button>
      <button onClick={onDeleteBtnClick} className="group w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">
        <svg className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M9 2C8.81434 2.0001 8.63237 2.05188 8.47447 2.14955C8.31658 2.24722 8.18899 2.38692 8.106 2.553L7.382 4H4C3.73478 4 3.48043 4.10536 3.29289 4.29289C3.10536 4.48043 3 4.73478 3 5C3 5.26522 3.10536 5.51957 3.29289 5.70711C3.48043 5.89464 3.73478 6 4 6V16C4 16.5304 4.21071 17.0391 4.58579 17.4142C4.96086 17.7893 5.46957 18 6 18H14C14.5304 18 15.0391 17.7893 15.4142 17.4142C15.7893 17.0391 16 16.5304 16 16V6C16.2652 6 16.5196 5.89464 16.7071 5.70711C16.8946 5.51957 17 5.26522 17 5C17 4.73478 16.8946 4.48043 16.7071 4.29289C16.5196 4.10536 16.2652 4 16 4H12.618L11.894 2.553C11.811 2.38692 11.6834 2.24722 11.5255 2.14955C11.3676 2.05188 11.1857 2.0001 11 2H9ZM7 8C7 7.73478 7.10536 7.48043 7.29289 7.29289C7.48043 7.10536 7.73478 7 8 7C8.26522 7 8.51957 7.10536 8.70711 7.29289C8.89464 7.48043 9 7.73478 9 8V14C9 14.2652 8.89464 14.5196 8.70711 14.7071C8.51957 14.8946 8.26522 15 8 15C7.73478 15 7.48043 14.8946 7.29289 14.7071C7.10536 14.5196 7 14.2652 7 14V8ZM12 7C11.7348 7 11.4804 7.10536 11.2929 7.29289C11.1054 7.48043 11 7.73478 11 8V14C11 14.2652 11.1054 14.5196 11.2929 14.7071C11.4804 14.8946 11.7348 15 12 15C12.2652 15 12.5196 14.8946 12.7071 14.7071C12.8946 14.5196 13 14.2652 13 14V8C13 7.73478 12.8946 7.48043 12.7071 7.29289C12.5196 7.10536 12.2652 7 12 7Z" />
        </svg>
        Delete
      </button>
    </React.Fragment>
  );

  return (
    <AnimatePresence key="AP_TimerItemMenuPopup">
      <motion.button key="TimerItemMenuPopup_cancelBtn" ref={cancelBtn} onClick={onCancelBtnClick} className="fixed inset-0 w-full h-full bg-black bg-opacity-25 cursor-default focus:outline-none" variants={popupBgFMV} initial="hidden" animate="visible" exit="hidden" />
      <motion.div key="TimerItemMenuPopup_popup" style={popupStyle} className="absolute mt-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" variants={popupFMV} initial="hidden" animate="visible" exit="hidden" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
        <div className="py-1" role="none">
          {buttons}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default React.memo(TimerItemMenuPopup);
