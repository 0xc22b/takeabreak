import {
  SHOW_EDITOR, UPDATE_EDITOR_NAME, UPDATE_EDITOR_DURATION,
  UPDATE_EDITOR_IS_MORE_SETTINGS_SHOWN, UPDATE_EDITOR_SELECTING_REMINDER_KEY,
  UPDATE_EDITOR_DURATION_ERR_MSG,
} from '../types/actionTypes';
import { randomString } from '../utils';

const initialState = {
  id: null,
  name: null,
  duration: null,
  defaultMessage: null,
  defaultMessageDisplayDuration: null,
  defaultSound: null,
  reminders: null,
  nextTimer: null,
  nextTimerStartsBy: null,
  isMoreSettingsShown: false,
  selectingReminderKey: null,
  durationErrMsg: null,
};

const editorReducer = (state = initialState, action) => {

  if (action.type === SHOW_EDITOR) {
    const newState = {
      ...state,
      ...action.payload,
      isMoreSettingsShown: false,
      selectingReminderKey: null,
      durationErrMsg: null,
    };
    newState.reminders = newState.reminders.map(reminder => {
      return {
        ...reminder,
        key: `${randomString(6)}-${randomString(6)}`,
        //isMoreOptionsShown: false,
        isMoreOptionsShown: true,
      };
    });
    return newState;
  }

  if (action.type === UPDATE_EDITOR_IS_MORE_SETTINGS_SHOWN) {
    return { ...state, isMoreSettingsShown: action.payload };
  }

  if (action.type === UPDATE_EDITOR_SELECTING_REMINDER_KEY) {
    return { ...state, selectingReminderKey: action.payload };
  }

  return state;
};

export default editorReducer;
