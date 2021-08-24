import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';

import {
  updatePopupUrlHash, updateEditorReminderIsMoreOptionsShown,
  moveEditorReminderUp, moveEditorReminderDown,
} from '../actions';
import { EDITOR_REMINDER_MENU_POPUP, CONFIRM_DELETE_POPUP } from '../types/const';
import { getIsMoreOptionsShown } from '../selectors';
import { popupBgFMV, popupFMV } from '../types/animConfigs';
import {
  computePosition, createLayouts, getOriginStyleValue,
} from './MenuPopupRenderer';

const EditorReminderMenuPopup = () => {

  const isShown = useSelector(state => state.display.isEditorReminderMenuPopupShown);
  const anchorPosition = useSelector(
    state => state.display.editorReminderMenuPopupPosition
  );
  const isMoreOptionsShown = useSelector(state => getIsMoreOptionsShown(state, state));
  const cancelBtn = useRef(null);
  const dispatch = useDispatch();

  const onCancelBtnClick = () => {
    updatePopupUrlHash(EDITOR_REMINDER_MENU_POPUP, false, null);
  };

  const onMoreOptionsBtnClick = () => {
    onCancelBtnClick();
    dispatch(updateEditorReminderIsMoreOptionsShown(!isMoreOptionsShown));
  };

  const onMoveUpBtnClick = () => {
    onCancelBtnClick();
    dispatch(moveEditorReminderUp());
  };

  const onMoveDownBtnClick = () => {
    onCancelBtnClick();
    dispatch(moveEditorReminderDown());
  };

  const onDeleteBtnClick = () => {
    updatePopupUrlHash(CONFIRM_DELETE_POPUP, true, null);
  };

  useEffect(() => {
    if (isShown) cancelBtn.current.focus();
  }, [isShown]);

  if (!isShown) return <AnimatePresence key="AP_EditorReminderMenuPopup" />;

  const layouts = createLayouts(anchorPosition, { width: 152, height: 152 });
  const popupPosition = computePosition(layouts, null, 8);

  const { top, left, topOrigin, leftOrigin } = popupPosition;
  const origin = getOriginStyleValue(topOrigin, leftOrigin);
  const popupStyle = { top, left, transformOrigin: origin };

  const buttons = (
    <React.Fragment>
      <button onClick={onMoreOptionsBtnClick} className="group w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">
        <svg className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.99991 4C4.99991 3.73478 4.89456 3.48043 4.70702 3.29289C4.51948 3.10536 4.26513 3 3.99991 3C3.7347 3 3.48034 3.10536 3.29281 3.29289C3.10527 3.48043 2.99991 3.73478 2.99991 4V11.268C2.6959 11.4435 2.44344 11.696 2.26792 12C2.0924 12.3041 2 12.6489 2 13C2 13.3511 2.0924 13.6959 2.26792 14C2.44344 14.304 2.6959 14.5565 2.99991 14.732V16C2.99991 16.2652 3.10527 16.5196 3.29281 16.7071C3.48034 16.8946 3.7347 17 3.99991 17C4.26513 17 4.51948 16.8946 4.70702 16.7071C4.89456 16.5196 4.99991 16.2652 4.99991 16V14.732C5.30393 14.5565 5.55638 14.304 5.7319 14C5.90742 13.6959 5.99982 13.3511 5.99982 13C5.99982 12.6489 5.90742 12.3041 5.7319 12C5.55638 11.696 5.30393 11.4435 4.99991 11.268V4ZM10.9999 4C10.9999 3.73478 10.8946 3.48043 10.707 3.29289C10.5195 3.10536 10.2651 3 9.99991 3C9.7347 3 9.48034 3.10536 9.29281 3.29289C9.10527 3.48043 8.99991 3.73478 8.99991 4V5.268C8.6959 5.44354 8.44344 5.69602 8.26792 6.00004C8.0924 6.30407 8 6.64894 8 7C8 7.35106 8.0924 7.69593 8.26792 7.99996C8.44344 8.30398 8.6959 8.55646 8.99991 8.732V16C8.99991 16.2652 9.10527 16.5196 9.29281 16.7071C9.48034 16.8946 9.7347 17 9.99991 17C10.2651 17 10.5195 16.8946 10.707 16.7071C10.8946 16.5196 10.9999 16.2652 10.9999 16V8.732C11.3039 8.55646 11.5564 8.30398 11.7319 7.99996C11.9074 7.69593 11.9998 7.35106 11.9998 7C11.9998 6.64894 11.9074 6.30407 11.7319 6.00004C11.5564 5.69602 11.3039 5.44354 10.9999 5.268V4ZM15.9999 3C16.2651 3 16.5195 3.10536 16.707 3.29289C16.8946 3.48043 16.9999 3.73478 16.9999 4V11.268C17.3039 11.4435 17.5564 11.696 17.7319 12C17.9074 12.3041 17.9998 12.6489 17.9998 13C17.9998 13.3511 17.9074 13.6959 17.7319 14C17.5564 14.304 17.3039 14.5565 16.9999 14.732V16C16.9999 16.2652 16.8946 16.5196 16.707 16.7071C16.5195 16.8946 16.2651 17 15.9999 17C15.7347 17 15.4803 16.8946 15.2928 16.7071C15.1053 16.5196 14.9999 16.2652 14.9999 16V14.732C14.6959 14.5565 14.4434 14.304 14.2679 14C14.0924 13.6959 14 13.3511 14 13C14 12.6489 14.0924 12.3041 14.2679 12C14.4434 11.696 14.6959 11.4435 14.9999 11.268V4C14.9999 3.73478 15.1053 3.48043 15.2928 3.29289C15.4803 3.10536 15.7347 3 15.9999 3Z" />
        </svg>
        {isMoreOptionsShown ? 'Hide more options' : 'More options'}
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
    <AnimatePresence key="AP_EditorReminderMenuPopup">
      <motion.button key="EditorReminderMenuPopup_cancelBtn" ref={cancelBtn} onClick={onCancelBtnClick} className="fixed inset-0 w-full h-full bg-black bg-opacity-25 cursor-default focus:outline-none" variants={popupBgFMV} initial="hidden" animate="visible" exit="hidden" />
      <motion.div key="EditorReminderMenuPopup_popup" style={popupStyle} className="fixed rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" variants={popupFMV} initial="hidden" animate="visible" exit="hidden" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
        <div className="py-1" role="none">
          {buttons}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default React.memo(EditorReminderMenuPopup);
