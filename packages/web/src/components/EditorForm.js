import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  updatePopupUrlHash, updateEditorName, updateEditorDuration,
  updateEditorReminderMessage, updateEditorReminderMessageDisplayDuration,
  updateEditorIsMoreSettingsShown,
} from '../actions';
import {
  EDITOR_REMINDER_SOUND_MENU_POPUP, EDITOR_NEXT_TIMER_MENU_POPUP,
  EDITOR_NEXT_TIMER_STARTS_BY_MENU_POPUP,
} from '../types/const';
import { getNextTimerName } from '../selectors';

import EditorReminderList from './EditorReminderList';

const EditorForm = () => {

  const isShown = useSelector(state => state.display.isEditorPopupShown);
  const isMoreSettingsShown = useSelector(state => state.editor.isMoreSettingsShown);
  const name = useSelector(state => state.editor.name);
  const duration = useSelector(state => state.editor.duration);
  const reminderMessage = useSelector(state => state.editor.reminderMessage);
  const reminderMessageDisplayDuration = useSelector(
    state => state.editor.reminderMessageDisplayDuration
  );
  const reminderSound = useSelector(state => state.editor.reminderSound);
  const nextTimerName = useSelector(state => getNextTimerName(state, state));
  const nextTimerStartsBy = useSelector(state => state.editor.nextTimerStartsBy);
  const durationErrMsg = useSelector(state => state.editor.durationErrMsg);
  const nameInput = useRef(null);
  const reminderSoundBtn = useRef(null);
  const nextTimerBtn = useRef(null);
  const nextTimerStartsByBtn = useRef(null);
  const dispatch = useDispatch();

  const onNameInputChange = (e) => {
    dispatch(updateEditorName(e.target.value));
  };

  const onDurationInputChange = (e) => {
    dispatch(updateEditorDuration(e.target.value));
  };

  const onReminderMessageInputChange = (e) => {
    dispatch(updateEditorReminderMessage(e.target.value));
  };

  const onReminderDisplayDurationInputChange = (e) => {
    dispatch(updateEditorReminderMessageDisplayDuration(e.target.value));
  };

  const onReminderSoundBtnClick = () => {
    updatePopupUrlHash(
      EDITOR_REMINDER_SOUND_MENU_POPUP,
      true,
      reminderSoundBtn.current.getBoundingClientRect()
    );
  };

  const onPlayBtnClick = () => {

  };

  const onNextTimerBtnClick = () => {
    updatePopupUrlHash(
      EDITOR_NEXT_TIMER_MENU_POPUP,
      true,
      nextTimerBtn.current.getBoundingClientRect()
    );
  };

  const onNextTimerStartsByBtnClick = () => {
    updatePopupUrlHash(
      EDITOR_NEXT_TIMER_STARTS_BY_MENU_POPUP,
      true,
      nextTimerStartsByBtn.current.getBoundingClientRect()
    );
    //dispatch(updateEditorNextTimerStartsBy(e.target.value));
  };

  const onMoreSettingsBtnClick = () => {
    dispatch(updateEditorIsMoreSettingsShown(!isMoreSettingsShown));
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
          <input onChange={onReminderMessageInputChange} type="text" name="reminder-message" id="reminder-message" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm text-gray-900 border-gray-300 rounded-md" value={reminderMessage} />
        </div>
      </div>
      <div className="sm:col-span-3">
        <label htmlFor="reminder-display-duration" className="block text-sm font-medium text-gray-700">Reminder display duration (in seconds)</label>
        <div className="mt-1">
          <input onChange={onReminderDisplayDurationInputChange} type="text" name="reminder-display-duration" id="reminder-display-duration" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm text-gray-900 border-gray-300 rounded-md" value={reminderMessageDisplayDuration} />
        </div>
      </div>
      <div className="sm:col-span-6">
        <label htmlFor="reminder-sound" className="block text-sm font-medium text-gray-700">Reminder sound</label>
        <div className="mt-1 flex">
          <button ref={reminderSoundBtn} onClick={onReminderSoundBtnClick} name="reminder-sound" id="reminder-sound" type="button" className="group inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-3 py-2 bg-white sm:text-sm text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-indigo-500" aria-expanded="true" aria-haspopup="true">
            {reminderSound}
            <svg className="-mr-1 ml-2 h-5 w-5 text-gray-500 group-hover:text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
          <button onClick={onPlayBtnClick} className="ml-2 pl-1 rounded group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" type="button">
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
          <button ref={nextTimerBtn} onClick={onNextTimerBtnClick} name="next-timer" id="next-timer" type="button" className="group inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-3 py-2 bg-white sm:text-sm text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-indigo-500" aria-expanded="true" aria-haspopup="true">
            {nextTimerName}
            <svg className="-mr-1 ml-2 h-5 w-5 text-gray-500 group-hover:text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
      <div className="sm:col-span-3">
        <label htmlFor="next-timer-starts-by" className="block text-sm font-medium text-gray-700">Next timer starts by</label>
        <div className="mt-1">

          <button ref={nextTimerStartsByBtn} onClick={onNextTimerStartsByBtnClick} name="next-timer-starts-by" id="next-timer-starts-by" type="button" className="group inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-3 py-2 bg-white sm:text-sm text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-indigo-500" aria-expanded="true" aria-haspopup="true">
            {nextTimerStartsBy}
            <svg className="-mr-1 ml-2 h-5 w-5 text-gray-500 group-hover:text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );

  const durationInputClassNames = durationErrMsg ? 'border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500';

  let moreSettingsSvg;
  if (isMoreSettingsShown) {
    moreSettingsSvg = (
      <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-500" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M5.29303 7.29302C5.48056 7.10555 5.73487 7.00023 6.00003 7.00023C6.26519 7.00023 6.5195 7.10555 6.70703 7.29302L10 10.586L13.293 7.29302C13.3853 7.19751 13.4956 7.12133 13.6176 7.06892C13.7396 7.01651 13.8709 6.98892 14.0036 6.98777C14.1364 6.98662 14.2681 7.01192 14.391 7.0622C14.5139 7.11248 14.6255 7.18673 14.7194 7.28062C14.8133 7.37452 14.8876 7.48617 14.9379 7.60907C14.9881 7.73196 15.0134 7.86364 15.0123 7.99642C15.0111 8.1292 14.9835 8.26042 14.9311 8.38242C14.8787 8.50443 14.8025 8.61477 14.707 8.70702L10.707 12.707C10.5195 12.8945 10.2652 12.9998 10 12.9998C9.73487 12.9998 9.48056 12.8945 9.29303 12.707L5.29303 8.70702C5.10556 8.51949 5.00024 8.26518 5.00024 8.00002C5.00024 7.73486 5.10556 7.48055 5.29303 7.29302Z" />
      </svg>

    );
  } else {
    moreSettingsSvg = (
      <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-500" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M7.29303 14.707C7.10556 14.5195 7.00024 14.2651 7.00024 14C7.00024 13.7348 7.10556 13.4805 7.29303 13.293L10.586 9.99998L7.29303 6.70698C7.11087 6.51838 7.01008 6.26578 7.01236 6.00358C7.01463 5.74138 7.1198 5.49057 7.30521 5.30516C7.49062 5.11975 7.74143 5.01458 8.00363 5.01231C8.26583 5.01003 8.51843 5.11082 8.70703 5.29298L12.707 9.29298C12.8945 9.48051 12.9998 9.73482 12.9998 9.99998C12.9998 10.2651 12.8945 10.5195 12.707 10.707L8.70703 14.707C8.5195 14.8945 8.26519 14.9998 8.00003 14.9998C7.73487 14.9998 7.48056 14.8945 7.29303 14.707Z" />
      </svg>

    );
  }

  return (
    <div className="p-8">
      <h2 className="text-4xl text-gray-800 font-extrabold text-center">Timer</h2>
      <div className="mt-8 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <div className="mt-1">
            <input ref={nameInput} onChange={onNameInputChange} type="text" name="name" id="name" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm text-gray-900 border-gray-300 rounded-md" value={name} />
          </div>
        </div>
        <div className="sm:col-span-3">
          <label htmlFor="duration" className="block text-sm font-medium text-gray-700">Duration (mm:ss) <span className="text-red-500">*</span></label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input onChange={onDurationInputChange} type="text" name="duration" id="duration" className={`block w-full pr-10 focus:outline-none sm:text-sm text-gray-900 rounded-md ${durationInputClassNames}`} placeholder="00:00" value={duration} />
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
        <div className="inline-flex rounded group-focus:ring-2 group-focus:ring-offset-2 group-focus:ring-indigo-500">
          {moreSettingsSvg}
          <span className="text-sm text-gray-500 group-hover:text-gray-600">More settings</span>
        </div>
      </button>
      {isMoreSettingsShown && moreSettings}
      <button className="w-full mt-8 bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" type="button">Save</button>
    </div>
  );
};

export default React.memo(EditorForm);
