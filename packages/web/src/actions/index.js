import { load as loadRedux } from "redux-localstorage-simple";
import Url from 'url-parse';

import {
  INIT, UPDATE_WINDOW_SIZE, UPDATE_POPUP,
  UPDATE_RUNNING_TIMER_ID, UPDATE_RUNNING_FLAG, DECREASE_RUNNING_DURATION,
  UPDATE_SELECTING_TIMER_ID,
  DELETE_TIMER, MOVE_TIMER_UP, MOVE_TIMER_DOWN,
  RESET_DATA,
} from '../types/actionTypes';
import {
  TIMER_ITEM_MENU_POPUP, EDITOR_POPUP, CONFIRM_DELETE_POPUP, CONFIRM_DISCARD_POPUP,
} from '../types/const';
import { throttle, urlHashToObj, objToUrlHash } from '../utils';

export const init = () => async (dispatch, getState) => {

  handleUrlHash();

  const loadedState = loadRedux();
  dispatch({
    type: INIT,
    payload: {
      loadedState,
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    },
  });

  // Let hash get updated first before add an listener
  setTimeout(() => {
    window.addEventListener('hashchange', function (e) {
      onUrlHashChange(e.oldURL, e.newURL, dispatch, getState);
    });
  }, 1);

  window.addEventListener('resize', throttle(() => {
    dispatch({
      type: UPDATE_WINDOW_SIZE,
      payload: {
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
      },
    });
  }, 16));

  window.addEventListener('beforeunload', (e) => {
    console.log('beforeunload is called.')
  }, { capture: true });
};

export const handleUrlHash = () => {
  const urlObj = new Url(window.location.href, {});
  if (urlObj.hash !== '') {
    urlObj.set('hash', '');
    window.location.replace(urlObj.toString());
  }
};

export const onUrlHashChange = (oldUrl, newUrl, dispatch, getState) => {

  const oldUrlObj = new Url(oldUrl, {});
  const oldHashObj = urlHashToObj(oldUrlObj.hash);

  const newUrlObj = new Url(newUrl, {});
  const newHashObj = urlHashToObj(newUrlObj.hash);

  // Popup
  if ('p' in oldHashObj && 'p' in newHashObj) {
    if (oldHashObj['p'] === newHashObj['p']) {
      // something else changed, do nothing here.
    } else {
      // i.e. from profilePopup to settingsPopup
      dispatch(updatePopup(oldHashObj['p'], false, null));

      let anchorPosition = null;
      if (newHashObj['ppt']) anchorPosition = {
        x: parseInt(newHashObj['ppx']),
        y: parseInt(newHashObj['ppy']),
        width: parseInt(newHashObj['ppw']),
        height: parseInt(newHashObj['pph']),
        top: parseInt(newHashObj['ppt']),
        right: parseInt(newHashObj['ppr']),
        bottom: parseInt(newHashObj['ppb']),
        left: parseInt(newHashObj['ppl']),
      }
      dispatch(updatePopup(newHashObj['p'], true, anchorPosition));
    }
  } else if ('p' in oldHashObj && !('p' in newHashObj)) {
    // Close popup
    dispatch(updatePopup(oldHashObj['p'], false, null));
  } else if (!('p' in oldHashObj) && 'p' in newHashObj) {
    // Open popup
    let anchorPosition = null;
    if (newHashObj['ppt']) anchorPosition = {
      x: parseInt(newHashObj['ppx']),
      y: parseInt(newHashObj['ppy']),
      width: parseInt(newHashObj['ppw']),
      height: parseInt(newHashObj['pph']),
      top: parseInt(newHashObj['ppt']),
      right: parseInt(newHashObj['ppr']),
      bottom: parseInt(newHashObj['ppb']),
      left: parseInt(newHashObj['ppl']),
    }
    dispatch(updatePopup(newHashObj['p'], true, anchorPosition));
  }

  // editor popup
  if ('ep' in oldHashObj && 'ep' in newHashObj) {
    if (oldHashObj['ep'] === newHashObj['ep']) {
      // something else changed, do nothing here.
    } else {
      throw new Error(`Shouldn't reach here!`);
    }
  } else if ('ep' in oldHashObj && !('ep' in newHashObj)) {
    // Close editor popup
    dispatch(updatePopup(EDITOR_POPUP, false, null));
  } else if (!('ep' in oldHashObj) && 'ep' in newHashObj) {
    // Open editor popup
    dispatch(updatePopup(EDITOR_POPUP, true, null));
  }

  // confirm delete popup
  if ('cdp' in oldHashObj && 'cdp' in newHashObj) {
    if (oldHashObj['cdp'] === newHashObj['cdp']) {
      // something else changed, do nothing here.
    } else {
      throw new Error(`Shouldn't reach here!`);
    }
  } else if ('cdp' in oldHashObj && !('cdp' in newHashObj)) {
    // Close confirm delete popup
    dispatch(updatePopup(CONFIRM_DELETE_POPUP, false, null));
  } else if (!('cdp' in oldHashObj) && 'cdp' in newHashObj) {
    // Open confirm delete popup
    dispatch(updatePopup(CONFIRM_DELETE_POPUP, true, null));
  }

  // confirm discard popup
  if ('cdip' in oldHashObj && 'cdip' in newHashObj) {
    if (oldHashObj['cdip'] === newHashObj['cdip']) {
      // something else changed, do nothing here.
    } else {
      throw new Error(`Shouldn't reach here!`);
    }
  } else if ('cdip' in oldHashObj && !('cdip' in newHashObj)) {
    // Close confirm discard popup
    dispatch(updatePopup(CONFIRM_DISCARD_POPUP, false, null));
  } else if (!('cdip' in oldHashObj) && 'cdip' in newHashObj) {
    // Open confirm discard popup
    dispatch(updatePopup(CONFIRM_DISCARD_POPUP, true, null));
  }
};

export const updateUrlHash = (q, doReplace = false) => {
  const hashObj = { ...urlHashToObj(window.location.hash), ...q };
  const updatedHash = objToUrlHash(hashObj);

  if (doReplace) {
    const urlObj = new Url(window.location.href, {});
    urlObj.set('hash', updatedHash);
    window.location.replace(urlObj.toString());
  } else window.location.hash = updatedHash;
};

export const updatePopupUrlHash = (id, isShown, anchorPosition, doReplace = false) => {
  if (!isShown) {
    window.history.back();
    return;
  }

  // editorPopup, confirmDeletePopup, and confirmDiscardpopup
  //   uses diff key because can display together with others
  let obj;
  if (id === EDITOR_POPUP) obj = { ep: true };
  else if (id === CONFIRM_DELETE_POPUP) obj = { cdp: true };
  else if (id === CONFIRM_DISCARD_POPUP) obj = { cdip: true };
  else {
    obj = {
      p: id,
      ppx: anchorPosition ? Math.round(anchorPosition.x) : null,
      ppy: anchorPosition ? Math.round(anchorPosition.y) : null,
      ppw: anchorPosition ? Math.round(anchorPosition.width) : null,
      pph: anchorPosition ? Math.round(anchorPosition.height) : null,
      ppt: anchorPosition ? Math.round(anchorPosition.top) : null,
      ppr: anchorPosition ? Math.round(anchorPosition.right) : null,
      ppb: anchorPosition ? Math.round(anchorPosition.bottom) : null,
      ppl: anchorPosition ? Math.round(anchorPosition.left) : null,
    };
  }
  updateUrlHash(obj, doReplace);
};

export const updatePopup = (id, isShown, anchorPosition) => {
  return {
    type: UPDATE_POPUP,
    payload: { id, isShown, anchorPosition },
  };
};

export const updateRunningTimerId = (id) => async (dispatch, getState) => {
  const duration = id ? getState().timers.byId[id].duration : null;
  dispatch({
    type: UPDATE_RUNNING_TIMER_ID,
    payload: { timerId: id, timerDuration: duration },
  });
};

export const updateRunningFlag = (flag) => {
  return { type: UPDATE_RUNNING_FLAG, payload: flag };
};

export const decreaseRunningDuration = (amount = 1) => {
  return { type: DECREASE_RUNNING_DURATION, payload: amount };
};

export const updateSelectingTimerId = (id) => {
  return { type: UPDATE_SELECTING_TIMER_ID, payload: id };
};

export const moveTimerUp = () => async (dispatch, getState) => {
  const id = getState().display.selectingTimerId;
  dispatch({ type: MOVE_TIMER_UP, payload: id });
};

export const moveTimerDown = () => async (dispatch, getState) => {
  const id = getState().display.selectingTimerId;
  dispatch({ type: MOVE_TIMER_DOWN, payload: id });
};

export const confirmDelete = () => async (dispatch, getState) => {
  const id = getState().display.selectingTimerId;
  dispatch({ type: DELETE_TIMER, payload: id });
  updatePopupUrlHash(TIMER_ITEM_MENU_POPUP, false, null);
};

export const importData = () => async (dispatch, getState) => {

};

export const exportData = () => async (dispatch, getState) => {

};

export const resetData = () => {
  return { type: RESET_DATA };
};
