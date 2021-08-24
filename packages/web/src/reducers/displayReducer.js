import {
  UPDATE_POPUP, UPDATE_RUNNING_TIMER_ID, UPDATE_RUNNING_FLAG, DECREASE_RUNNING_DURATION,
  UPDATE_SELECTING_TIMER_ID,
} from '../types/actionTypes';
import {
  TOP_BAR_MENU_POPUP, TIMER_ITEM_MENU_POPUP, EDITOR_POPUP, EDITOR_REMINDER_MENU_POPUP,
  EDITOR_REMINDER_SOUND_MENU_POPUP, EDITOR_NEXT_TIMER_MENU_POPUP,
  EDITOR_NEXT_TIMER_STARTS_BY_MENU_POPUP, CONFIRM_DELETE_POPUP, TIMED_UP,
} from '../types/const';

const initialState = {
  isTopBarMenuPopupShown: false,
  topBarMenuPopupPosition: null,
  isTimerItemMenuPopupShown: false,
  timerItemMenuPopupPosition: null,
  isEditorPopupShown: false,
  isEditorReminderMenuPopupShown: false,
  editorReminderMenuPopupPosition: null,
  isEditorReminderSoundMenuPopupShown: false,
  editorReminderSoundMenuPopupPosition: null,
  isEditorNextTimerMenuPopupShown: false,
  editorNextTimerMenuPopupPosition: null,
  isEditorNextTimerStartsByMenuPopupShown: false,
  editorNextTimerStartsByMenuPopupPosition: null,
  isConfirmDeletePopupShown: false,
  runningTimerId: null,
  runningFlag: null,
  runningDuration: null, // seconds
  selectingTimerId: null,
};

const displayReducer = (state = initialState, action) => {

  if (action.type === UPDATE_POPUP) {

    const { id, isShown, anchorPosition } = action.payload;

    if (id === TOP_BAR_MENU_POPUP) {
      return {
        ...state,
        isTopBarMenuPopupShown: isShown,
        topBarMenuPopupPosition: anchorPosition,
      };
    }

    if (id === TIMER_ITEM_MENU_POPUP) {
      return {
        ...state,
        isTimerItemMenuPopupShown: isShown,
        timerItemMenuPopupPosition: anchorPosition,
      };
    }

    if (id === EDITOR_POPUP) {
      return { ...state, isEditorPopupShown: isShown };
    }

    if (id === EDITOR_REMINDER_MENU_POPUP) {
      return {
        ...state,
        isEditorReminderMenuPopupShown: isShown,
        editorReminderMenuPopupPosition: anchorPosition,
      };
    }

    if (id === EDITOR_REMINDER_SOUND_MENU_POPUP) {
      return {
        ...state,
        isEditorReminderSoundMenuPopupShown: isShown,
        editorReminderSoundMenuPopupPosition: anchorPosition,
      };
    }

    if (id === EDITOR_NEXT_TIMER_MENU_POPUP) {
      return {
        ...state,
        isEditorNextTimerMenuPopupShown: isShown,
        editorNextTimerMenuPopupPosition: anchorPosition,
      };
    }

    if (id === EDITOR_NEXT_TIMER_STARTS_BY_MENU_POPUP) {
      return {
        ...state,
        isEditorNextTimerStartsByMenuPopupShown: isShown,
        editorNextTimerStartsByMenuPopupPosition: anchorPosition,
      };
    }

    if (id === CONFIRM_DELETE_POPUP) {
      return { ...state, isConfirmDeletePopupShown: isShown };
    }

    throw new Error(`Invalid type: ${action.type} and payload: ${action.payload}`);
  }

  if (action.type === UPDATE_RUNNING_TIMER_ID) {
    const { timerId, timerDuration } = action.payload;

    if (timerId) {
      return { ...state, runningTimerId: timerId, runningDuration: timerDuration };
    }

    return { ...state, runningTimerId: null, runningFlag: null, runningDuration: null };
  }

  if (action.type === UPDATE_RUNNING_FLAG) {
    return { ...state, runningFlag: action.payload };
  }

  if (action.type === DECREASE_RUNNING_DURATION) {
    const duration = state.runningDuration - action.payload;
    if (duration <= 0) return { ...state, runningFlag: TIMED_UP, runningDuration: 0 };
    return { ...state, runningDuration: duration };
  }

  if (action.type === UPDATE_SELECTING_TIMER_ID) {
    return { ...state, selectingTimerId: action.payload };
  }

  return state;
};

export default displayReducer;
