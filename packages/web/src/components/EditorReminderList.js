import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion, AnimateSharedLayout } from 'framer-motion';

import { updateTooltip, addEditorReminder } from '../actions';
import { EDITOR_REPETITIONS_TOOLTIP, EDITOR_INTERVAL_TOOLTIP } from '../types/const';

import EditorReminderItem from './EditorReminderItem';

const EditorReminderList = () => {

  const reminders = useSelector(state => state.editor.reminders);
  const repetitionsMark = useRef(null);
  const intervalMark = useRef(null);
  const dispatch = useDispatch();

  const onAddBtnClick = () => {
    dispatch(addEditorReminder());
  };

  const onRepetitionsMouseEnter = () => {
    dispatch(updateTooltip(
      EDITOR_REPETITIONS_TOOLTIP, true, repetitionsMark.current.getBoundingClientRect()
    ));
  };

  const onRepetitionsMouseLeave = () => {
    dispatch(updateTooltip(EDITOR_REPETITIONS_TOOLTIP, false, null));
  };

  const onIntervalMouseEnter = () => {
    dispatch(updateTooltip(
      EDITOR_INTERVAL_TOOLTIP, true, intervalMark.current.getBoundingClientRect()
    ));
  };

  const onIntervalMouseLeave = () => {
    dispatch(updateTooltip(EDITOR_INTERVAL_TOOLTIP, false, null));
  };

  let rows;
  if (!reminders) throw new Error('Not possible to reach here?');
  else if (reminders.length === 0) {
    rows = null;
  } else {
    rows = (
      <React.Fragment>
        {reminders.map((reminder, i) => <EditorReminderItem key={reminder.key} seq={i} reminder={reminder} />)}
      </React.Fragment>
    );
  }

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow-sm overflow-hidden border border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                  <th scope="col" className="px-6 py-3">
                    <div className="flex">
                      <div style={{ paddingTop: '1px' }} className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider">repetitions</div>
                      <svg ref={repetitionsMark} onMouseEnter={onRepetitionsMouseEnter} onMouseLeave={onRepetitionsMouseLeave} className="ml-1 w-4 h-4 text-gray-500" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M14.4 8.0001C14.4 9.69748 13.7257 11.3253 12.5255 12.5256C11.3252 13.7258 9.69736 14.4001 7.99998 14.4001C6.30259 14.4001 4.67473 13.7258 3.47449 12.5256C2.27426 11.3253 1.59998 9.69748 1.59998 8.0001C1.59998 6.30271 2.27426 4.67485 3.47449 3.47461C4.67473 2.27438 6.30259 1.6001 7.99998 1.6001C9.69736 1.6001 11.3252 2.27438 12.5255 3.47461C13.7257 4.67485 14.4 6.30271 14.4 8.0001ZM7.99998 5.6001C7.85941 5.59996 7.7213 5.63686 7.59953 5.70708C7.47777 5.7773 7.37666 5.87837 7.30638 6.0001C7.25563 6.0944 7.18646 6.17755 7.10298 6.24463C7.0195 6.3117 6.92341 6.36133 6.82039 6.39058C6.71737 6.41983 6.60953 6.42809 6.50326 6.41489C6.39699 6.40168 6.29445 6.36728 6.20172 6.31371C6.109 6.26014 6.02797 6.1885 5.96344 6.10303C5.89891 6.01757 5.8522 5.92002 5.82608 5.81616C5.79995 5.71231 5.79494 5.60427 5.81135 5.49845C5.82775 5.39262 5.86523 5.29117 5.92158 5.2001C6.18575 4.74259 6.5935 4.38503 7.0816 4.18287C7.56969 3.98071 8.11085 3.94525 8.62115 4.08198C9.13145 4.21872 9.58238 4.52001 9.90399 4.93914C10.2256 5.35826 10.4 5.8718 10.4 6.4001C10.4001 6.89659 10.2463 7.38092 9.95978 7.78638C9.67324 8.19184 9.26804 8.49849 8.79998 8.6641V8.8001C8.79998 9.01227 8.71569 9.21575 8.56566 9.36578C8.41563 9.51581 8.21215 9.6001 7.99998 9.6001C7.7878 9.6001 7.58432 9.51581 7.43429 9.36578C7.28426 9.21575 7.19998 9.01227 7.19998 8.8001V8.0001C7.19998 7.78792 7.28426 7.58444 7.43429 7.43441C7.58432 7.28438 7.7878 7.2001 7.99998 7.2001C8.21215 7.2001 8.41563 7.11581 8.56566 6.96578C8.71569 6.81575 8.79998 6.61227 8.79998 6.4001C8.79998 6.18792 8.71569 5.98444 8.56566 5.83441C8.41563 5.68438 8.21215 5.6001 7.99998 5.6001ZM7.99998 12.0001C8.21215 12.0001 8.41563 11.9158 8.56566 11.7658C8.71569 11.6158 8.79998 11.4123 8.79998 11.2001C8.79998 10.9879 8.71569 10.7844 8.56566 10.6344C8.41563 10.4844 8.21215 10.4001 7.99998 10.4001C7.7878 10.4001 7.58432 10.4844 7.43429 10.6344C7.28426 10.7844 7.19998 10.9879 7.19998 11.2001C7.19998 11.4123 7.28426 11.6158 7.43429 11.7658C7.58432 11.9158 7.7878 12.0001 7.99998 12.0001Z" />
                      </svg>
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <div className="flex">
                      <div style={{ paddingTop: '1px' }} className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Interval</div>
                      <svg ref={intervalMark} onMouseEnter={onIntervalMouseEnter} onMouseLeave={onIntervalMouseLeave} className="ml-1 w-4 h-4 text-gray-500" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M14.4 8.0001C14.4 9.69748 13.7257 11.3253 12.5255 12.5256C11.3252 13.7258 9.69736 14.4001 7.99998 14.4001C6.30259 14.4001 4.67473 13.7258 3.47449 12.5256C2.27426 11.3253 1.59998 9.69748 1.59998 8.0001C1.59998 6.30271 2.27426 4.67485 3.47449 3.47461C4.67473 2.27438 6.30259 1.6001 7.99998 1.6001C9.69736 1.6001 11.3252 2.27438 12.5255 3.47461C13.7257 4.67485 14.4 6.30271 14.4 8.0001ZM7.99998 5.6001C7.85941 5.59996 7.7213 5.63686 7.59953 5.70708C7.47777 5.7773 7.37666 5.87837 7.30638 6.0001C7.25563 6.0944 7.18646 6.17755 7.10298 6.24463C7.0195 6.3117 6.92341 6.36133 6.82039 6.39058C6.71737 6.41983 6.60953 6.42809 6.50326 6.41489C6.39699 6.40168 6.29445 6.36728 6.20172 6.31371C6.109 6.26014 6.02797 6.1885 5.96344 6.10303C5.89891 6.01757 5.8522 5.92002 5.82608 5.81616C5.79995 5.71231 5.79494 5.60427 5.81135 5.49845C5.82775 5.39262 5.86523 5.29117 5.92158 5.2001C6.18575 4.74259 6.5935 4.38503 7.0816 4.18287C7.56969 3.98071 8.11085 3.94525 8.62115 4.08198C9.13145 4.21872 9.58238 4.52001 9.90399 4.93914C10.2256 5.35826 10.4 5.8718 10.4 6.4001C10.4001 6.89659 10.2463 7.38092 9.95978 7.78638C9.67324 8.19184 9.26804 8.49849 8.79998 8.6641V8.8001C8.79998 9.01227 8.71569 9.21575 8.56566 9.36578C8.41563 9.51581 8.21215 9.6001 7.99998 9.6001C7.7878 9.6001 7.58432 9.51581 7.43429 9.36578C7.28426 9.21575 7.19998 9.01227 7.19998 8.8001V8.0001C7.19998 7.78792 7.28426 7.58444 7.43429 7.43441C7.58432 7.28438 7.7878 7.2001 7.99998 7.2001C8.21215 7.2001 8.41563 7.11581 8.56566 6.96578C8.71569 6.81575 8.79998 6.61227 8.79998 6.4001C8.79998 6.18792 8.71569 5.98444 8.56566 5.83441C8.41563 5.68438 8.21215 5.6001 7.99998 5.6001ZM7.99998 12.0001C8.21215 12.0001 8.41563 11.9158 8.56566 11.7658C8.71569 11.6158 8.79998 11.4123 8.79998 11.2001C8.79998 10.9879 8.71569 10.7844 8.56566 10.6344C8.41563 10.4844 8.21215 10.4001 7.99998 10.4001C7.7878 10.4001 7.58432 10.4844 7.43429 10.6344C7.28426 10.7844 7.19998 10.9879 7.19998 11.2001C7.19998 11.4123 7.28426 11.6158 7.43429 11.7658C7.58432 11.9158 7.7878 12.0001 7.99998 12.0001Z" />
                      </svg>
                    </div>
                  </th>
                  <th scope="col" className="relative w-10">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <AnimateSharedLayout>
                  {rows}
                  <motion.tr key="R_ROW_ADD" layoutId="R_ROW_ADD" className="h-14">
                    <td colSpan={4}>
                      <div className="flex justify-center items-center">
                        <button onClick={onAddBtnClick} type="button" className="bg-white py-1.5 px-5 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Add</button>
                      </div>
                    </td>
                  </motion.tr>
                </AnimateSharedLayout>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(EditorReminderList);
