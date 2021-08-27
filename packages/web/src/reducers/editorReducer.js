import {
  INIT_EDITOR, UPDATE_EDITOR_IS_MORE_SETTINGS_SHOWN,
  UPDATE_EDITOR_NAME, UPDATE_EDITOR_DURATION, UPDATE_EDITOR_REMINDER_MESSAGE,
  UPDATE_EDITOR_REMINDER_CUSTOM_MESSAGE, UPDATE_EDITOR_REMINDER_MESSAGE_DISPLAY_DURATION,
  UPDATE_EDITOR_REMINDER_CUSTOM_MESSAGE_DISPLAY_DURATION, UPDATE_EDITOR_REMINDER_SOUND,
  UPDATE_EDITOR_REMINDER_REPETITIONS, UPDATE_EDITOR_REMINDER_INTERVAL,
  UPDATE_EDITOR_NEXT_TIMER_ID, UPDATE_EDITOR_NEXT_TIMER_STARTS_BY,
  UPDATE_EDITOR_SELECTING_REMINDER_KEY, UPDATE_EDITOR_REMINDER_IS_MORE_OPTIONS_SHOWN,
  ADD_EDITOR_REMINDER, DELETE_EDITOR_REMINDER,
  MOVE_EDITOR_REMINDER_UP, MOVE_EDITOR_REMINDER_DOWN,
} from '../types/actionTypes';
import { defaultEditorReminderState } from '../types/defaultStates';
import { randomString, swapArrayElements } from '../utils';

const initialState = {
  id: null,
  name: null,
  duration: null,
  reminderMessage: null,
  reminderMessageDisplayDuration: null,
  reminderSound: null,
  reminders: null,
  nextTimerId: null,
  nextTimerStartsBy: null,
  isMoreSettingsShown: false,
  selectingReminderKey: null,
  durationErrMsg: null,
  reminderMessageDisplayDurationErrMsg: null,
  didReminderMessageTouch: false,
};

const editorReducer = (state = initialState, action) => {

  if (action.type === INIT_EDITOR) {
    const newState = {
      ...state,
      ...action.payload,
      isMoreSettingsShown: false,
      selectingReminderKey: null,
      durationErrMsg: null,
      reminderMessageDisplayDurationErrMsg: null,
      didReminderMessageTouch: false,
    };
    newState.reminders = newState.reminders.map(reminder => {
      return {
        ...reminder,
        key: `${randomString(6)}-${randomString(6)}`,
        isMoreOptionsShown: false,
        repetitionsErrMsg: null,
        intervalErrMsg: null,
        messageDisplayDurationErrMsg: null,
      };
    });
    return newState;
  }

  if (action.type === UPDATE_EDITOR_IS_MORE_SETTINGS_SHOWN) {
    return { ...state, isMoreSettingsShown: action.payload };
  }

  if (action.type === UPDATE_EDITOR_NAME) {
    const { name, reminderMessage } = action.payload;
    const newState = { ...state, name };
    if (reminderMessage !== null) newState.reminderMessage = reminderMessage;
    return newState;
  }

  if (action.type === UPDATE_EDITOR_DURATION) {
    const { duration, msg } = action.payload;
    return { ...state, duration, durationErrMsg: msg };
  }

  if (action.type === UPDATE_EDITOR_REMINDER_MESSAGE) {
    const { msg, key } = action.payload;
    if (!key) return { ...state, reminderMessage: msg, didReminderMessageTouch: true };
    else return {
      ...state,
      reminders: state.reminders.map(reminder => {
        if (reminder.key !== key) return reminder;
        return { ...reminder, message: msg };
      }),
    };
  }

  if (action.type === UPDATE_EDITOR_REMINDER_CUSTOM_MESSAGE) {
    const { msg, key } = action.payload;
    return {
      ...state,
      reminders: state.reminders.map(reminder => {
        if (reminder.key !== key) return reminder;
        return { ...reminder, customMessage: msg };
      }),
    };
  }

  if (action.type === UPDATE_EDITOR_REMINDER_MESSAGE_DISPLAY_DURATION) {
    const { duration, msg, key } = action.payload;
    if (!key) {
      return {
        ...state,
        reminderMessageDisplayDuration: duration,
        reminderMessageDisplayDurationErrMsg: msg,
      };
    } else {
      return {
        ...state,
        reminders: state.reminders.map(reminder => {
          if (reminder.key !== key) return reminder;
          // msg is an error msg, not apply to each reminder as it's dropdown
          return { ...reminder, messageDisplayDuration: duration };
        }),
      };
    }
  }

  if (action.type === UPDATE_EDITOR_REMINDER_CUSTOM_MESSAGE_DISPLAY_DURATION) {
    const { duration, msg, key } = action.payload;
    return {
      ...state,
      reminders: state.reminders.map(reminder => {
        if (reminder.key !== key) return reminder;
        return {
          ...reminder,
          customMessageDisplayDuration: duration,
          messageDisplayDurationErrMsg: msg,
        };
      }),
    };
  }

  if (action.type === UPDATE_EDITOR_REMINDER_SOUND) {
    const { sound, key } = action.payload;
    if (!key) return { ...state, reminderSound: sound };
    else return {
      ...state,
      reminders: state.reminders.map(reminder => {
        if (reminder.key !== key) return reminder;
        return { ...reminder, sound };
      }),
    };
  }

  if (action.type === UPDATE_EDITOR_REMINDER_REPETITIONS) {
    const { repetitions, msg, key } = action.payload;
    return {
      ...state,
      reminders: state.reminders.map(reminder => {
        if (reminder.key !== key) return reminder;
        return { ...reminder, repetitions, repetitionsErrMsg: msg };
      }),
    };
  }

  if (action.type === UPDATE_EDITOR_REMINDER_INTERVAL) {
    const { interval, msg, key } = action.payload;
    return {
      ...state,
      reminders: state.reminders.map(reminder => {
        if (reminder.key !== key) return reminder;
        return { ...reminder, interval, intervalErrMsg: msg };
      }),
    };
  }

  if (action.type === UPDATE_EDITOR_NEXT_TIMER_ID) {
    return { ...state, nextTimerId: action.payload };
  }

  if (action.type === UPDATE_EDITOR_NEXT_TIMER_STARTS_BY) {
    return { ...state, nextTimerStartsBy: action.payload };
  }

  if (action.type === UPDATE_EDITOR_SELECTING_REMINDER_KEY) {
    return { ...state, selectingReminderKey: action.payload };
  }

  if (action.type === UPDATE_EDITOR_REMINDER_IS_MORE_OPTIONS_SHOWN) {
    const { isShown, key } = action.payload;
    return {
      ...state,
      reminders: state.reminders.map(reminder => {
        if (reminder.key !== key) return reminder;
        return { ...reminder, isMoreOptionsShown: isShown };
      }),
    };
  }

  if (action.type === ADD_EDITOR_REMINDER) {
    return {
      ...state,
      reminders: [
        ...state.reminders,
        {
          ...defaultEditorReminderState,
          key: `${randomString(6)}-${randomString(6)}`,
          isMoreOptionsShown: false,
          repetitionsErrMsg: null,
          intervalErrMsg: null,
          messageDisplayDurationErrMsg: null,
        },
      ],
    }
  }

  if (action.type === DELETE_EDITOR_REMINDER) {
    const key = action.payload;
    const newState = { ...state };
    newState.reminders = newState.reminders.filter(reminder => reminder.key !== key);
    return newState;
  }

  if (action.type === MOVE_EDITOR_REMINDER_UP) {
    const key = action.payload;
    const i = state.reminders.findIndex(reminder => reminder.key === key);
    if (i === -1) {
      console.log(`Error in MOVE_EDITOR_REMINDER_UP: key: ${key} not in ${state.reminders}`);
      return state;
    }
    if (i === 0) return state;

    const newState = { ...state };
    newState.reminders = swapArrayElements(newState.reminders, i - 1, i);
    return newState;
  }

  if (action.type === MOVE_EDITOR_REMINDER_DOWN) {
    const key = action.payload;
    const length = state.reminders.length;
    const i = state.reminders.findIndex(reminder => reminder.key === key);
    if (i === -1) {
      console.log(`Error in MOVE_EDITOR_REMINDER_DOWN: key: ${key} not in ${state.reminders}`);
      return state;
    }
    if (i === length - 1) return state;

    const newState = { ...state };
    newState.reminders = swapArrayElements(newState.reminders, i, i + 1);
    return newState;
  }

  return state;
};

export default editorReducer;
