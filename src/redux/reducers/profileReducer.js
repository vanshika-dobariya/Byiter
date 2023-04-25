import * as types from '../actions/types';

// init state value
const initialState = {
  spinner: false,
  fcm_token: '',
  logoutResponse : {}
};

/**
 * Reducer
 * @class profileReducer
 */
export default function profileReducer(state = initialState, action) {
  switch (action.type) {
    case types.PROFILE_LOGOUT_REQUEST:
      return {
        ...state,
        fcm_token : action.fcm_token,
        spinner: true,
      };
    case types.PROFILE_ENABLE_LOADER:
      return {
        ...state,
        spinner: true,
      };
    case types.PROFILE_DISABLE_LOADER:
      return {
        ...state,
        spinner: false,
      };
    case types.PROFILE_LOGOUT_RESPONSE:
      return {
        ...state,
        logoutResponse : action.response,
        spinner: false,
      };
    case types.PROFILE_LOGOUT_FAILED:
      return {
        ...state,
        spinner: false,
      };
    default:
      return state;
  }
}