import { DEFAULT, NONE, AUTO, MANUAL } from './const';

export const defaultTimersState = {
  byId: {
    't1629185871053': {
      id: 't1629185871053',
      name: 'Work',
      duration: 25 * 60, // seconds
      reminderMessage: 'Work has ended.',
      reminderMessageDisplayDuration: 7, // seconds
      reminderSound: 'Complete',
      reminders: [
        'r1629186381739', 'r1629186381740', 'r1629186381741', 'r1629186381742',
        'r1629186381743', 'r1629186381744', 'r1629186381745', 'r1629186381746',
        'r1629186381747', 'r1629186381748',
      ],
      nextTimerId: 't1629185891083',
      nextTimerStartsBy: MANUAL,
    },
    't1629185891083': {
      id: 't1629185891083',
      name: 'Break',
      duration: 5 * 60,
      reminderMessage: 'Break has ended.',
      reminderMessageDisplayDuration: 7,
      reminderSound: 'Complete',
      reminders: [
        'r1629186403698', 'r1629186403699', 'r1629186403700', 'r1629186403701',
        'r1629186403702', 'r1629186403703', 'r1629186403704', 'r1629186403705',
        'r1629186403706', 'r1629186403707',
      ],
      nextTimerId: 't1629185871053',
      nextTimerStartsBy: MANUAL,
    }
  },
  ids: ['t1629185871053', 't1629185891083'],
};

export const defaultTimerRemindersState = {
  byId: {
    'r1629186381739': {
      id: 'r1629186381739',
      repetitions: 1, // times
      interval: 15, // seconds
      message: null,
      messageDisplayDuration: 5, // seconds
      sound: null,
    },
    'r1629186381740': {
      id: 'r1629186381740',
      repetitions: 1,
      interval: 15,
      message: null,
      messageDisplayDuration: 5,
      sound: null,
    },
    'r1629186381741': {
      id: 'r1629186381741',
      repetitions: 1,
      interval: 30,
      message: null,
      messageDisplayDuration: null,
      sound: null,
    },
    'r1629186381742': {
      id: 'r1629186381742',
      repetitions: 1,
      interval: 30,
      message: null,
      messageDisplayDuration: null,
      sound: null,
    },
    'r1629186381743': {
      id: 'r1629186381743',
      repetitions: 1,
      interval: 30,
      message: null,
      messageDisplayDuration: null,
      sound: null,
    },
    'r1629186381744': {
      id: 'r1629186381744',
      repetitions: 1,
      interval: 30,
      message: null,
      messageDisplayDuration: null,
      sound: null,
    },
    'r1629186381745': {
      id: 'r1629186381745',
      repetitions: 1,
      interval: 45,
      message: null,
      messageDisplayDuration: null,
      sound: null,
    },
    'r1629186381746': {
      id: 'r1629186381746',
      repetitions: 1,
      interval: 45,
      message: null,
      messageDisplayDuration: null,
      sound: null,
    },
    'r1629186381747': {
      id: 'r1629186381747',
      repetitions: 1,
      interval: 45,
      message: null,
      messageDisplayDuration: null,
      sound: null,
    },
    'r1629186381748': {
      id: 'r1629186381748',
      repetitions: 1,
      interval: 60,
      message: null,
      messageDisplayDuration: null,
      sound: null,
    },
    'r1629186403698': {
      id: 'r1629186403698',
      repetitions: 1,
      interval: 15,
      message: null,
      messageDisplayDuration: 5,
      sound: null,
    },
    'r1629186403699': {
      id: 'r1629186403699',
      repetitions: 1,
      interval: 15,
      message: null,
      messageDisplayDuration: 5,
      sound: null,
    },
    'r1629186403700': {
      id: 'r1629186403700',
      repetitions: 1,
      interval: 30,
      message: null,
      messageDisplayDuration: null,
      sound: null,
    },
    'r1629186403701': {
      id: 'r1629186403701',
      repetitions: 1,
      interval: 30,
      message: null,
      messageDisplayDuration: null,
      sound: null,
    },
    'r1629186403702': {
      id: 'r1629186403702',
      repetitions: 1,
      interval: 30,
      message: null,
      messageDisplayDuration: null,
      sound: null,
    },
    'r1629186403703': {
      id: 'r1629186403703',
      repetitions: 1,
      interval: 30,
      message: null,
      messageDisplayDuration: null,
      sound: null,
    },
    'r1629186403704': {
      id: 'r1629186403704',
      repetitions: 1,
      interval: 45,
      message: null,
      messageDisplayDuration: null,
      sound: null,
    },
    'r1629186403705': {
      id: 'r1629186403705',
      repetitions: 1,
      interval: 45,
      message: null,
      messageDisplayDuration: null,
      sound: null,
    },
    'r1629186403706': {
      id: 'r1629186403706',
      repetitions: 1,
      interval: 45,
      message: null,
      messageDisplayDuration: null,
      sound: null,
    },
    'r1629186403707': {
      id: 'r1629186403707',
      repetitions: 1,
      interval: 60,
      message: null,
      messageDisplayDuration: null,
      sound: null,
    },
  },
};

export const defaultEditorState = {
  id: null,
  name: '',
  duration: '',
  reminderMessage: '',
  reminderMessageDisplayDuration: 10,
  reminderSound: 'Complete',
  reminders: [
    {
      id: null,
      repetitions: 1,
      interval: 15,
      message: DEFAULT,
      customMessage: '',
      messageDisplayDuration: DEFAULT,
      customMessageDisplayDuration: '',
      sound: DEFAULT,
    },
  ],
  nextTimerId: NONE,
  nextTimerStartsBy: AUTO,
};

export const defaultEditorReminderState = {
  id: null,
  repetitions: 1,
  interval: 15,
  message: DEFAULT,
  customMessage: '',
  messageDisplayDuration: DEFAULT,
  customMessageDisplayDuration: '',
  sound: DEFAULT,
};
