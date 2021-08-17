import { UPDATE_POPUP } from '../types/actionTypes';
import { TOP_BAR_MENU_POPUP } from '../types/const';

const initialState = {
  isTopBarMenuPopupShown: false,
  topBarMenuPopupPosition: null,
};

const displayReducer = (state = initialState, action) => {

  if (action.type === UPDATE_POPUP) {

    const { id, isShown, anchorPosition } = action.payload;

    if (id === TOP_BAR_MENU_POPUP) {
      return {
        ...state,
        isTopBarMenuPopupShown: isShown,
        topBarMenuPopupPosition: anchorPosition,
      };
    }

    throw new Error(`Invalid type: ${action.type} and payload: ${action.payload}`);
  }

  return state;
};

export default displayReducer;
