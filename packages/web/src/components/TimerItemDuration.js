import React, { useEffect, useRef, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { decreaseRunningDuration } from '../actions';
import { INIT, RUNNING, PAUSED, TIMED_UP, DISABLED } from '../types/const';
import { makeGetTimerState, makeGetRunningDuration } from '../selectors';
import { getMMSS } from '../utils';

const TimerItemDuration = (props) => {

  const { id } = props;
  const getTimerState = useMemo(makeGetTimerState, []);
  const getRunningDuration = useMemo(makeGetRunningDuration, []);
  const timer = useSelector(state => state.timers.byId[id]);
  const timerState = useSelector(state => getTimerState(state, id));
  const runningDuration = useSelector(state => getRunningDuration(state, id));
  const intervalId = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (timerState === RUNNING) {
      if (intervalId.current) {
        console.log(`TimerItemDuration: duplicate setInterval calls!`);
        return;
      }

      dispatch(decreaseRunningDuration());
      intervalId.current = setInterval(() => {
        dispatch(decreaseRunningDuration());
      }, 1000);
    } else {
      if (intervalId.current) {
        clearInterval(intervalId.current);
        intervalId.current = null;
      }
    }
  }, [timerState, dispatch]);

  let duration;
  if ([INIT, DISABLED].includes(timerState)) duration = timer.duration;
  else if ([RUNNING, PAUSED, TIMED_UP].includes(timerState)) duration = runningDuration;
  else throw new Error(`Invalid timerState: ${timerState}`);

  return (
    <React.Fragment>{getMMSS(duration)}</React.Fragment>
  );
};

export default React.memo(TimerItemDuration);
