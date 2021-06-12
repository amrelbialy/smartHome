import ROOMS from '../../rooms';

import { SaveState, SAVE_DEVICE_STATE } from '../actions/devicesState';

const initialState = {
  deviceKeys: ROOMS,
  currentState: [],
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_DEVICE_STATE:
      return state;
    default:
      return state;
  }
};

export default appReducer;
