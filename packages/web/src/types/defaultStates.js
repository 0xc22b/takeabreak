export const defaultTimersState = {
  byId: {
    't1629185871053': {
      id: 't1629185871053',
      name: 'Work',
      duration: 25 * 60, // seconds
      reminderMessage: 'Work has ended.',
      reminderMessageDisplayDuration: 10, // seconds
      reminderSound: 'Complete',
      reminders: ['r1629186381739'],
      nextTimerId: 'None',
      nextTimerStartsBy: 'Auto',
    },
    't1629185891083': {
      id: 't1629185891083',
      name: 'Break',
      duration: 7 * 60,
      reminderMessage: 'Break has ended.',
      reminderMessageDisplayDuration: 10,
      reminderSound: 'Complete',
      reminders: ['r1629186403698'],
      nextTimerId: 'None',
      nextTimerStartsBy: 'Auto',
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
      messageDisplayDuration: null, // seconds
      sound: null,
    },
    'r1629186403698': {
      id: 'r1629186403698',
      repetitions: 1,
      interval: 15,
      message: null,
      messageDisplayDuration: null,
      sound: null,
    }
  },
};

export const defaultEditorState = {
  id: null,
  name: '',
  duration: '',
  reminderMessage: '',
  reminderMessageDisplayDuration: '10',
  reminderSound: 'Complete',
  reminders: [
    {
      id: null,
      repetitions: 1,
      interval: 15,
      message: 'Default',
      customMessage: '',
      messageDisplayDuration: 'Default',
      customMessageDisplayDuration: '',
      sound: 'Complete',
    },
  ],
  nextTimerId: 'None',
  nextTimerStartsBy: 'Auto',
};

export const defaultEditorReminderState = {
  id: null,
  repetitions: 1,
  interval: 15,
  message: 'Default',
  customMessage: '',
  messageDisplayDuration: 'Default',
  customMessageDisplayDuration: '',
  sound: 'Complete',
};
