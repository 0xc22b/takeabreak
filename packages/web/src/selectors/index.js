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
