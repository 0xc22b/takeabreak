import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';

import {
  updateEditorName, updateEditorDuration, updateEditorIsMoreSettingsShown,
} from '../actions';

import EditorReminderList from './EditorReminderList';

const EditorForm = () => {

  const isShown = useSelector(state => state.display.isEditorPopupShown);
  const isMoreSettingsShown = useSelector(state => state.editor.isMoreSettingsShown);
  const durationErrMsg = useSelector(state => state.editor.durationErrMsg);
  const nameInput = useRef(null);
  const dispatch = useDispatch();

  const onNameInputChange = (e) => {
    dispatch(updateEditorName(e.target.value));
  };

  const onDurationInputChange = (e) => {
    dispatch(updateEditorDuration(e.target.value));
  };

  const onMoreSettingsBtnClick = () => {
    dispatch(updateEditorIsMoreSettingsShown(!isMoreSettingsShown));
  };

  const onReminderSoundBtnClick = () => {

  };

  useEffect(() => {
    if (isShown) nameInput.current.focus();
    else {
      if (nameInput.current) nameInput.current.blur();
    }
  }, [isShown]);

  const moreSettings = (
    <div className="mt-8 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
      <div className="sm:col-span-3">
        <label htmlFor="reminder-message" className="block text-sm font-medium text-gray-700">Reminder message</label>
        <div className="mt-1">
          <input type="text" name="reminder-message" id="reminder-message" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />
        </div>
      </div>
      <div className="sm:col-span-3">
        <label htmlFor="reminder-display-duration" className="block text-sm font-medium text-gray-700">Reminder display duration (in seconds)</label>
        <div className="mt-1">
          <input type="text" name="reminder-display-duration" id="reminder-display-duration" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />
        </div>
      </div>
      <div className="sm:col-span-6">
        <label htmlFor="reminder-sound" className="block text-sm font-medium text-gray-700">Reminder sound</label>
        <div className="mt-1 flex">
          <input type="text" name="reminder-sound" id="reminder-sound" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />
          <button onClick={onReminderSoundBtnClick} className="ml-2 pl-1 rounded group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" type="button">
            <svg className="w-6 h-6 text-gray-500 group-hover:text-gray-600" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M11.2596 3.6912C11.4788 3.78209 11.6661 3.93594 11.7979 4.13331C11.9297 4.33067 12 4.56268 12 4.8V19.2C11.9999 19.4373 11.9295 19.6693 11.7976 19.8665C11.6658 20.0638 11.4784 20.2176 11.2591 20.3084C11.0399 20.3992 10.7987 20.423 10.5659 20.3767C10.3332 20.3304 10.1194 20.2162 9.95155 20.0484L5.50315 15.6H2.39995C2.08169 15.6 1.77647 15.4736 1.55142 15.2485C1.32638 15.0235 1.19995 14.7183 1.19995 14.4V9.6C1.19995 9.28174 1.32638 8.97651 1.55142 8.75147C1.77647 8.52642 2.08169 8.4 2.39995 8.4H5.50315L9.95155 3.9516C10.1194 3.78368 10.3332 3.66931 10.566 3.62295C10.7989 3.5766 11.0402 3.60035 11.2596 3.6912ZM17.5884 3.5148C17.8134 3.28983 18.1186 3.16345 18.4368 3.16345C18.7549 3.16345 19.0601 3.28983 19.2852 3.5148C20.4009 4.62798 21.2858 5.95062 21.889 7.40677C22.4922 8.86291 22.8018 10.4239 22.8 12C22.8018 13.5761 22.4922 15.1371 21.889 16.5932C21.2858 18.0494 20.4009 19.372 19.2852 20.4852C19.0588 20.7038 18.7557 20.8247 18.4411 20.822C18.1264 20.8193 17.8255 20.6931 17.603 20.4706C17.3805 20.2481 17.2543 19.9471 17.2515 19.6325C17.2488 19.3178 17.3698 19.0147 17.5884 18.7884C18.4813 17.8981 19.1894 16.84 19.672 15.6749C20.1545 14.5099 20.4019 13.261 20.4 12C20.4 9.348 19.3272 6.9504 17.5884 5.2116C17.3634 4.98656 17.237 4.68139 17.237 4.3632C17.237 4.045 17.3634 3.73983 17.5884 3.5148ZM14.1936 6.9084C14.305 6.79682 14.4373 6.70831 14.583 6.64792C14.7287 6.58754 14.8849 6.55645 15.0426 6.55645C15.2002 6.55645 15.3564 6.58754 15.5021 6.64792C15.6478 6.70831 15.7801 6.79682 15.8916 6.9084C16.561 7.57639 17.0919 8.37007 17.4537 9.24385C17.8155 10.1176 18.0012 11.0543 18 12C18.0011 12.9457 17.8155 13.8823 17.4536 14.7561C17.0918 15.6299 16.561 16.4236 15.8916 17.0916C15.6664 17.3168 15.361 17.4433 15.0426 17.4433C14.7241 17.4433 14.4187 17.3168 14.1936 17.0916C13.9684 16.8664 13.8419 16.561 13.8419 16.2426C13.8419 15.9242 13.9684 15.6188 14.1936 15.3936C14.6402 14.9486 14.9943 14.4197 15.2357 13.8373C15.4771 13.2549 15.6009 12.6304 15.6 12C15.6009 11.3695 15.4772 10.7451 15.2358 10.1627C14.9944 9.58026 14.6402 9.05134 14.1936 8.6064C14.082 8.49495 13.9935 8.3626 13.9331 8.21692C13.8727 8.07125 13.8416 7.91509 13.8416 7.7574C13.8416 7.5997 13.8727 7.44355 13.9331 7.29787C13.9935 7.15219 14.082 7.01984 14.1936 6.9084Z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="sm:col-span-6">
        <p className="block text-sm font-medium text-gray-700">Number of reminders, reminder sound repetitions, and reminder intervals</p>
        <div className="mt-1">
          <EditorReminderList />
        </div>
      </div>
      <div className="sm:col-span-3">
        <label htmlFor="next-timer" className="block text-sm font-medium text-gray-700">Next timer</label>
        <div className="mt-1">
          <input type="text" name="next-timer" id="next-timer" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />
        </div>
      </div>
      <div className="sm:col-span-3">
        <label htmlFor="next-timer-starts-by" className="block text-sm font-medium text-gray-700">Next timer starts by</label>
        <div className="mt-1">
          <input type="text" name="next-timer-starts-by" id="next-timer-starts-by" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />
        </div>
      </div>
    </div>
  );

  const durationInputClassNames = durationErrMsg ? 'border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500';

  return (
    <motion.div className="p-8" layout={true}>
      <h2 className="text-4xl text-gray-800 font-extrabold text-center">Timer</h2>
      <div className="mt-8 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <div className="mt-1">
            <input ref={nameInput} onChange={onNameInputChange} type="text" name="name" id="name" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />
          </div>
        </div>
        <div className="sm:col-span-3">
          <label htmlFor="duration" className="block text-sm font-medium text-gray-700">Duration (mm:ss) <span className="text-red-500">*</span></label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input onChange={onDurationInputChange} type="text" name="duration" id="duration" className={`block w-full pr-10 focus:outline-none sm:text-sm rounded-md ${durationInputClassNames}`} placeholder="00:00" />

            {durationErrMsg && <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>}
          </div>
          <p className="mt-2 text-sm text-red-600" id="duration-error">{durationErrMsg}</p>
        </div>
      </div>
      <button onClick={onMoreSettingsBtnClick} className="w-full mt-8 text-left group focus:outline-none" type="button">
        <span className="text-sm text-gray-500 rounded group-hover:text-gray-600 group-focus:ring-2 group-focus:ring-offset-2 group-focus:ring-indigo-500">&gt;&nbsp;More settings</span>
      </button>
      {isMoreSettingsShown && moreSettings}
      <button className="w-full mt-8 bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" type="button">Save</button>
    </motion.div>
  );
};

export default React.memo(EditorForm);
