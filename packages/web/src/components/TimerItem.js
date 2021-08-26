import React, { useMemo, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';

import {
  updatePopupUrlHash, updateRunningTimerId, updateRunningFlag, updateSelectingTimerId,
} from '../actions';
import {
  TIMER_ITEM_MENU_POPUP, INIT, RUNNING, PAUSED, TIMED_UP, DISABLED,
} from '../types/const';
import { makeGetTimerState } from '../selectors';

import TimerItemStatus from './TimerItemStatus';
import TimerItemDuration from './TimerItemDuration';

const TimerItem = (props) => {

  const { id } = props;
  const getTimerState = useMemo(makeGetTimerState, []);
  const timer = useSelector(state => state.timers.byId[id]);
  const timerState = useSelector(state => getTimerState(state, id));
  const menuBtn = useRef(null);
  const dispatch = useDispatch();

  const onStartBtnClick = () => {
    dispatch(updateRunningTimerId(id));
  };

  const onStopBtnClick = () => {
    dispatch(updateRunningTimerId(null));
  };

  const onPauseBtnClick = () => {
    dispatch(updateRunningFlag(PAUSED));
  };

  const onResetBtnClick = () => {
    dispatch(updateRunningTimerId(null));
  };

  const onContinueBtnClick = () => {
    dispatch(updateRunningFlag(null));
  };

  const onNextBtnClick = () => {

  };

  const onMenuBtnClick = () => {
    dispatch(updateSelectingTimerId(id));
    updatePopupUrlHash(
      TIMER_ITEM_MENU_POPUP, true, menuBtn.current.getBoundingClientRect()
    );
  };

  return (
    <motion.tr layoutId={id} className="h-14">
      <td>
        <TimerItemStatus id={id} />
      </td>
      <td className={`pr-6 whitespace-nowrap text-sm font-medium ${timerState === DISABLED ? 'text-gray-400' : 'text-gray-900'} truncate`}>{timer.name}</td>
      <td className={`whitespace-nowrap text-sm ${timerState === DISABLED ? 'text-gray-400' : 'text-gray-500'}`}>
        <TimerItemDuration id={id} />
      </td>
      <td className="text-right">
        <div className="w-full h-full flex items-center justify-end">
          {(timerState === TIMED_UP && timer.nextTimerId) && <button onClick={onNextBtnClick} type="button" className="bg-white mx-1 py-1.5 px-5 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Next</button>}
          {timerState === PAUSED && <button onClick={onContinueBtnClick} type="button" className="bg-white mx-1 py-1.5 px-5 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Continue</button>}
          {timerState === RUNNING && <button onClick={onPauseBtnClick} type="button" className="bg-white mx-1 py-1.5 px-5 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Pause</button>}
          {timerState === PAUSED && <button onClick={onResetBtnClick} type="button" className="bg-white mx-1 py-1.5 px-5 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Reset</button>}
          {[RUNNING, TIMED_UP].includes(timerState) && <button onClick={onStopBtnClick} type="button" className="bg-white mx-1 py-1.5 px-5 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Stop</button>}
          {[INIT, DISABLED].includes(timerState) && <button onClick={onStartBtnClick} type="button" className={`bg-white mx-1 py-1.5 px-5 border border-gray-300 rounded-md shadow-sm text-sm font-medium ${timerState === DISABLED ? 'text-gray-400' : 'text-gray-700 hover:bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`} disabled={timerState === DISABLED}>Start</button>}
          <button ref={menuBtn} onClick={onMenuBtnClick} type="button" className="bg-white pl-3 pr-4 group focus:outline-none">
            <div className="w-5 h-9 rounded-full flex items-center group-hover:bg-gray-50 group-focus:ring-2 group-focus:ring-offset-2 group-focus:ring-indigo-500">
              <svg className="w-5 h-5 text-gray-500 group-hover:text-gray-600" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 6C9.46957 6 8.96086 5.78929 8.58579 5.41421C8.21071 5.03914 8 4.53043 8 4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2C10.5304 2 11.0391 2.21071 11.4142 2.58579C11.7893 2.96086 12 3.46957 12 4C12 4.53043 11.7893 5.03914 11.4142 5.41421C11.0391 5.78929 10.5304 6 10 6ZM10 12C9.46957 12 8.96086 11.7893 8.58579 11.4142C8.21071 11.0391 8 10.5304 8 10C8 9.46957 8.21071 8.96086 8.58579 8.58579C8.96086 8.21071 9.46957 8 10 8C10.5304 8 11.0391 8.21071 11.4142 8.58579C11.7893 8.96086 12 9.46957 12 10C12 10.5304 11.7893 11.0391 11.4142 11.4142C11.0391 11.7893 10.5304 12 10 12ZM10 18C9.46957 18 8.96086 17.7893 8.58579 17.4142C8.21071 17.0391 8 16.5304 8 16C8 15.4696 8.21071 14.9609 8.58579 14.5858C8.96086 14.2107 9.46957 14 10 14C10.5304 14 11.0391 14.2107 11.4142 14.5858C11.7893 14.9609 12 15.4696 12 16C12 16.5304 11.7893 17.0391 11.4142 17.4142C11.0391 17.7893 10.5304 18 10 18Z" />
              </svg>
            </div>
          </button>
        </div>
      </td>
    </motion.tr>
  );
};

export default React.memo(TimerItem);
