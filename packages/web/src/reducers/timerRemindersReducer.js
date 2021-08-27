import {
  INIT, ADD_TIMER, EDIT_TIMER, DELETE_TIMER, RESET_DATA,
} from '../types/actionTypes';
import { ID } from '../types/const';
import { defaultTimerRemindersState } from '../types/defaultStates';
import { _ } from '../utils/obj';

const timerRemindersReducer = (state = { byId: null }, action) => {

  if (action.type === INIT) {
    const { loadedState } = action.payload;
    if (loadedState && loadedState.timerReminders) return loadedState.timerReminders;

    return defaultTimerRemindersState;
  }

  if (action.type === ADD_TIMER || action.type === EDIT_TIMER) {
    const { reminders } = action.payload;
    const byIdReminders = _.mapKeys(reminders, ID);

    const newState = { ...state };
    newState.byId = { ...newState.byId, ...byIdReminders };
    return newState;
  }

  if (action.type === DELETE_TIMER) {
    const { reminderIds } = action.payload;
    const newState = { ...state };
    newState.byId = _.exclude(newState.byId, ID, reminderIds);
    return newState;
  }

  if (action.type === RESET_DATA) {
    return defaultTimerRemindersState;
  }

  return state;
};

export default timerRemindersReducer;
