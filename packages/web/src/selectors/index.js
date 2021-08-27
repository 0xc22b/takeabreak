import { createSelector } from 'reselect';

import {
  INIT, RUNNING, PAUSED, TIMED_UP, DISABLED, DEFAULT, NONE, NO_SOUND,
} from '../types/const';
import { SOUNDS } from '../types/soundPaths';

/** @return {function(any, any, any): any} */
export const makeGetTimerState = () => {
  return createSelector(
    state => state.display.runningTimerId,
    state => state.display.runningFlag,
    (_, timerId) => timerId,
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
    state => state.display.runningDuration,
    (_, timerId) => timerId,
    (runningTimerId, runningDuration, timerId) => {
      if (runningTimerId === timerId) return runningDuration;
      return null;
    }
  );
};

export const getIsMoreOptionsShown = createSelector(
  state => state.editor.selectingReminderKey,
  state => state.editor.reminders,
  (key, reminders) => {
    if (key && reminders) {
      const reminder = reminders.find(reminder => reminder.key === key);
      if (reminder) return reminder.isMoreOptionsShown;
    }
    return false;
  }
);

export const getSounds = createSelector(
  state => state.editor.selectingReminderKey,
  (key) => {
    const sounds = [];
    if (key) sounds.push({ name: DEFAULT, path: null });
    sounds.push({ name: NO_SOUND, path: null });
    return [...sounds, ...SOUNDS];
  }
);

export const getNextTimers = createSelector(
  state => state.editor.id,
  state => state.timers.byId,
  (id, timers) => {
    let nextTimers = [];
    if (timers) {
      nextTimers = Object.values(timers)
        .filter(timer => timer.id !== id)
        .map(timer => ({ id: timer.id, name: timer.name }));
    }
    return [{ id: NONE, name: NONE }, ...nextTimers];
  }
);

export const getNextTimerName = createSelector(
  state => state.editor.nextTimerId,
  state => state.timers.byId,
  (nextTimerId, timers) => {
    if (nextTimerId && timers) {
      const timer = Object.values(timers).find(timer => timer.id === nextTimerId);
      if (timer) return timer.name;
    }
    return NONE;
  }
);
