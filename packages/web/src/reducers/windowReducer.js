import { INIT, UPDATE_WINDOW_SIZE } from '../types/actionTypes';

const initialState = {
  width: null,
  height: null,
};

const windowReducer = (state = initialState, action) => {

  if (action.type === INIT) {
    return {
      ...state,
      width: action.payload.windowWidth,
      height: action.payload.windowHeight,
    };
  }

  if (action.type === UPDATE_WINDOW_SIZE) {
    return {
      ...state,
      width: action.payload.windowWidth,
      height: action.payload.windowHeight,
    };
  }

  return state;
};

export default windowReducer;
