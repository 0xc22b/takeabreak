import { INIT, RESET_DATA } from '../types/actionTypes';
import { initialTimerRemindersState } from '../types/initialStates';

const timerRemindersReducer = (state = { byId: null }, action) => {

  if (action.type === INIT) {
    const { loadedState } = action.payload;
    if (loadedState && loadedState.timerReminders) return loadedState.timerReminders;

    return initialTimerRemindersState;
  }

  if (action.type === RESET_DATA) {
    return initialTimerRemindersState;
  }

  return state;
};

export default timerRemindersReducer;
