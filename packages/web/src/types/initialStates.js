export const initialTimersState = {
  byId: {
    't1629185871053': {
      id: 't1629185871053',
      name: 'Work',
      duration: 25 * 60, // seconds
      defaultMessage: 'Work has ended.',
      defaultMessageDisplayDuration: 10, // seconds
      defaultSound: '',
      reminders: ['r1629186381739'],
      nextTimer: null,
      nextTimerStartsBy: null,
    },
    't1629185891083': {
      id: 't1629185891083',
      name: 'Break',
      duration: 7 * 60,
      defaultMessage: 'Break has ended.',
      defaultMessageDisplayDuration: 10,
      defaultSound: '',
      reminders: ['r1629186403698'],
      nextTimer: null,
      nextTimerStartsBy: null,
    }
  },
  ids: ['t1629185871053', 't1629185891083'],
};

export const initialTimerRemindersState = {
  byId: {
    'r1629186381739': {
      id: 'r1629186381739',
      repetitions: 1, // times
      interval: 15, // seconds
      message: null,
      messageDisplayDuration: 10, // seconds
      sound: '',
    },
    'r1629186403698': {
      id: 'r1629186403698',
      repetitions: 1,
      interval: 15,
      message: null,
      messageDisplayDuration: 10,
      sound: '',
    }
  },
};
