import { INIT, RESET_DATA } from '../types/actionTypes';
import { defaultTimerRemindersState } from '../types/defaultStates';

const timerRemindersReducer = (state = { byId: null }, action) => {

  if (action.type === INIT) {
    const { loadedState } = action.payload;
    if (loadedState && loadedState.timerReminders) return loadedState.timerReminders;

    return defaultTimerRemindersState;
  }

  if (action.type === RESET_DATA) {
    return defaultTimerRemindersState;
  }

  return state;
};

export default timerRemindersReducer;
