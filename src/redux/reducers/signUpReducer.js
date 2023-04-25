import * as types from '../actions/types';

// init state value
const initialState = {
  isLoggedIn: false,
  id: 0,
  email: '',
  password: '',
  signUpResponse: {},
  spinner: false,
};

/**
 * Reducer related with signup
 * @class signupReducer
 */
export default function signUpReducer(state = initialState, action) {
  switch (action.type) {
    case types.SIGNUP_REQUEST:
      return {
        ...state,
        email: action.email,
        password: action.password,
        spinner: true,
      };
    case types.SIGNUP_ENABLE_LOADER:
      return {
        ...state,
        spinner: true,
      };
    case types.SIGNUP_DISABLE_LOADER:
      return {
        ...state,
        spinner: false,
      };
    case types.SIGNUP_RESPONSE:
      return {
        ...state,
        isLoggedIn: true,
        signUpResponse: action.response,
        spinner: false,
      };
    case types.SIGNUP_FAILED:
      return {
        ...state,
        isLoggedIn: false,
        spinner: false,
      };
    default:
      return state;
  }
}
