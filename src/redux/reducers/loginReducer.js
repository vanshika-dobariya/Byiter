import * as types from '../actions/types';

// init state value
const initialState = {
  isLoggedIn: false,
  id: 0,
  email: '',
  password: '',
  spinner: false,
  loginResponse : {}
};

/**
 * Reducer
 * @class loginReducer
 */
export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        email: action.email,
        password: action.password,
        spinner: true,
      };
    case types.LOGIN_ENABLE_LOADER:
      return {
        ...state,
        spinner: true,
      };
    case types.LOGIN_DISABLE_LOADER:
      return {
        ...state,
        spinner: false,
      };
    case types.LOGIN_RESPONSE:
      return {
        ...state,
        loginResponse : action.response,
        isLoggedIn: true,
        spinner: false,
      };
    case types.LOGIN_FAILED:
      return {
        ...state,
        isLoggedIn: false,
        spinner: false,
      };
    case types.LOG_OUT:
      return {
        ...state,
        isLoggedIn: false,
        spinner: false,
      };
    default:
      return state;
  }
}