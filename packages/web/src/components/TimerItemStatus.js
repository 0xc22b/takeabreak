import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { makeGetTimerState, makeGetRunningDuration } from '../selectors';
import { PAUSED, RUNNING, TIMED_UP } from '../types/const';

const TimerItemStatus = (props) => {

  const { id } = props;
  const getTimerState = useMemo(makeGetTimerState, []);
  const getRunningDuration = useMemo(makeGetRunningDuration, []);
  const timer = useSelector(state => state.timers.byId[id]);
  const timerState = useSelector(state => getTimerState(state, state, id));
  const runningDuration = useSelector(state => getRunningDuration(state, state, id));

  if (timerState === TIMED_UP) {
    return (
      <div className="w-full h-12 flex items-center justify-center">
        <svg className="w-5 h-5 text-green-500" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 2C8.40873 2 6.88261 2.63214 5.75739 3.75736C4.63217 4.88258 4.00003 6.4087 4.00003 8V11.586L3.29303 12.293C3.15322 12.4329 3.05802 12.611 3.01945 12.805C2.98088 12.9989 3.00068 13.2 3.07635 13.3827C3.15202 13.5654 3.28016 13.7215 3.44457 13.8314C3.60898 13.9413 3.80228 14 4.00003 14H16C16.1978 14 16.3911 13.9413 16.5555 13.8314C16.7199 13.7215 16.848 13.5654 16.9237 13.3827C16.9994 13.2 17.0192 12.9989 16.9806 12.805C16.942 12.611 16.8468 12.4329 16.707 12.293L16 11.586V8C16 6.4087 15.3679 4.88258 14.2427 3.75736C13.1175 2.63214 11.5913 2 10 2ZM10 18C9.20438 18 8.44132 17.6839 7.87871 17.1213C7.3161 16.5587 7.00003 15.7956 7.00003 15H13C13 15.7956 12.684 16.5587 12.1214 17.1213C11.5587 17.6839 10.7957 18 10 18Z" />
        </svg>
      </div>
    );
  }

  if (timerState === PAUSED) {
    return (
      <div className="w-full h-12 flex items-center justify-center">
        <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
      </div>
    );
  }

  if (timerState === RUNNING) {

    const ratio = (timer.duration - runningDuration) / timer.duration;
    const deg1 = ratio < 0.5 ? 180 / 0.5 * ratio : 180;
    const deg2 = ratio < 0.5 ? 0 : 180 / 0.5 * (ratio - 0.5);

    const clip1 = { clip: 'rect(0rem, 1rem, 1rem, 0.5rem)' };
    const slice1 = {
      clip: 'rect(0rem, 0.5rem, 1rem, 0rem)',
      transform: `rotate(${deg1}deg)`,
    };
    const clip2 = { clip: 'rect(0rem, 0.5rem, 1rem, 0rem)' };
    const slice2 = {
      clip: 'rect(0rem, 1rem, 1rem, 0.5rem)',
      transform: `rotate(${deg2}deg)`,
    };

    return (
      <div className="w-full h-12 flex items-center justify-center">
        <div className="relative w-4 h-4 bg-indigo-400 rounded-full overflow-hidden">
          <div style={clip1} className="absolute top-0 left-0 w-4 h-4">
            <div style={slice1} className="absolute top-0 left-0 w-4 h-4 bg-white rounded-full origin-center" />
          </div>
          <div style={clip2} className="absolute top-0 left-0 w-4 h-4">
            <div style={slice2} className="absolute top-0 left-0 w-4 h-4 bg-white rounded-full origin-center" />
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default React.memo(TimerItemStatus);
