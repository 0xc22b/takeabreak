import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion, AnimateSharedLayout } from 'framer-motion';

import { showEditor } from '../actions';

import TimerItem from './TimerItem';

const TimerList = () => {

  const ids = useSelector(state => state.timers.ids);
  const dispatch = useDispatch();

  const onAddBtnClick = () => {
    dispatch(showEditor(true));
  };

  const rowAdd = (
    <motion.tr key="ROW_ADD" layoutId="ROW_ADD" className="h-14">
      <td colSpan={4}>
        <div className="flex justify-center items-center">
          <button onClick={onAddBtnClick} type="button" className="bg-white py-1.5 px-5 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Add</button>
        </div>
      </td>
    </motion.tr>
  );

  let header, rows;
  if (!ids) {
    header = (
      <thead className="bg-indigo-500">
        <tr className="h-14">
          <th scope="col"></th>
        </tr>
      </thead>
    );
    rows = (
      <motion.tr key="ROW_LOADING" layoutId="ROW_LOADING" className="h-14">
        <td>
          <div className="flex justify-center items-center">
            <div className="lds-ellipsis">
              <div className="bg-indigo-400"></div>
              <div className="bg-indigo-400"></div>
              <div className="bg-indigo-400"></div>
              <div className="bg-indigo-400"></div>
            </div>
          </div>
        </td>
      </motion.tr>
    )
  } else if (ids.length === 0) {
    header = null;
    rows = (
      <React.Fragment>
        <motion.tr key="ROW_EMPTY" layoutId="ROW_EMPTY" className="h-36 bg-indigo-500">
          <td>
            <div className="flex flex-col justify-center items-center">
              <div className="w-9 h-9 flex justify-center items-center bg-indigo-50 rounded-md">
                <svg className="w-5 h-5 text-indigo-500" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.414 2.586C17.0389 2.21106 16.5303 2.00043 16 2.00043C15.4697 2.00043 14.9611 2.21106 14.586 2.586L7 10.172V13H9.828L17.414 5.414C17.7889 5.03894 17.9996 4.53033 17.9996 4C17.9996 3.46967 17.7889 2.96106 17.414 2.586Z" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M2 6C2 5.46957 2.21071 4.96086 2.58579 4.58579C2.96086 4.21071 3.46957 4 4 4H8C8.26522 4 8.51957 4.10536 8.70711 4.29289C8.89464 4.48043 9 4.73478 9 5C9 5.26522 8.89464 5.51957 8.70711 5.70711C8.51957 5.89464 8.26522 6 8 6H4V16H14V12C14 11.7348 14.1054 11.4804 14.2929 11.2929C14.4804 11.1054 14.7348 11 15 11C15.2652 11 15.5196 11.1054 15.7071 11.2929C15.8946 11.4804 16 11.7348 16 12V16C16 16.5304 15.7893 17.0391 15.4142 17.4142C15.0391 17.7893 14.5304 18 14 18H4C3.46957 18 2.96086 17.7893 2.58579 17.4142C2.21071 17.0391 2 16.5304 2 16V6Z" />
                </svg>
              </div>
              <p className="mt-3 mx-3 text-sm text-white text-center tracking-wide max-w-sm">Add a timer with 'Add' button below or reset to default timers with menu button at the top right corner.</p>
            </div>
          </td>
        </motion.tr>
        {rowAdd}
      </React.Fragment>
    );
  } else {
    header = (
      <thead className="bg-indigo-500">
        <tr className="h-14">
          <th scope="col" className="relative w-14">
            <span className="sr-only">Status</span>
          </th>
          <th scope="col" className="text-left text-xs font-medium text-white uppercase tracking-wider">Name</th>
          <th scope="col" className="w-20 text-left text-xs font-medium text-white uppercase tracking-wider">Duration</th>
          <th scope="col" className="relative w-72">
            <span className="sr-only">Actions</span>
          </th>
        </tr>
      </thead>
    );
    rows = (
      <React.Fragment>
        {ids.map(id => <TimerItem key={id} id={id} />)}
        {rowAdd}
      </React.Fragment>
    );
  }

  return (
    <div className="relative flex flex-col rounded-lg shadow-lg">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              {header}
              <tbody className="bg-white divide-y divide-gray-200">
                <AnimateSharedLayout>
                  {rows}
                </AnimateSharedLayout>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(TimerList);
