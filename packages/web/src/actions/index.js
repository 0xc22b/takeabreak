import { load as loadRedux } from "redux-localstorage-simple";
import Url from 'url-parse';

import { INIT, UPDATE_WINDOW_SIZE } from '../types/actionTypes';
import { throttle } from '../utils';

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

};
