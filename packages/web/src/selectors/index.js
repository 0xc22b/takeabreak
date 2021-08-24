import { createSelector } from 'reselect';

import { INIT, RUNNING, PAUSED, TIMED_UP, DISABLED } from '../types/const';

/** @return {function(any, any, any): any} */
export const makeGetTimerState = () => {
  return createSelector(
    state => state.display.runningTimerId,
    (_, state) => state.display.runningFlag,
    (_, __, timerId) => timerId,
    (runningTimerId, runningFlag, timerId) => {
      if (runningTimerId) {
        if (runningTimerId !== timerId) return DISABLED;
        if (runningFlag === PAUSED) return PAUSED;
        if (runningFlag === TIMED_UP) return TIMED_UP;
        return RUNNING;
      }

      return INIT;
    }
  );
};

/** @return {function(any, any, any): any} */
export const makeGetRunningDuration = () => {
  return createSelector(
    state => state.display.runningTimerId,
    (_, state) => state.display.runningDuration,
    (_, __, timerId) => timerId,
    (runningTimerId, runningDuration, timerId) => {
      if (runningTimerId === timerId) return runningDuration;
      return null;
    }
  );
};

/** @return {function(any, any): any} */
export const getIsMoreOptionsShown = createSelector(
  state => state.editor.selectingReminderKey,
  (_, state) => state.editor.reminders,
  (key, reminders) => {
    if (key && reminders) {
      const reminder = reminders.find(reminder => reminder.key === key);
      if (reminder) return reminder.isMoreOptionsShown;
    }

    return false;
  }
);

/** @return {function(any, any): any} */
export const getNextTimers = createSelector(
  state => state.editor.id,
  (_, state) => state.timers.byId,
  (id, timers) => {
    let nextTimers = [];
    if (timers) {
      nextTimers = Object.values(timers)
        .filter(timer => timer.id !== id)
        .map(timer => ({ id: timer.id, name: timer.name }));
    }
    return [{ id: 'None', name: 'None' }, ...nextTimers];
  }
);

/** @return {function(any, any): any} */
export const getNextTimerName = createSelector(
  state => state.editor.nextTimerId,
  (_, state) => state.timers.byId,
  (nextTimerId, timers) => {
    if (nextTimerId && timers) {
      const timer = Object.values(timers).find(timer => timer.id === nextTimerId);
      if (timer) return timer.name;
    }

    return 'None';
  }
);
