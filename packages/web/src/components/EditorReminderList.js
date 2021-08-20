import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion, AnimateSharedLayout } from 'framer-motion';

import { addEditorReminder } from '../actions';

import EditorReminderItem from './EditorReminderItem';

const EditorReminderList = () => {

  const reminders = useSelector(state => state.editor.reminders);
  const dispatch = useDispatch();

  const onAddBtnClick = () => {
    dispatch(addEditorReminder());
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
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">repetitions</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Interval (in seconds)</th>
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
