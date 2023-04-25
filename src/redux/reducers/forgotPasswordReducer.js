import * as types from '../actions/types';

// init state value
const initialState = {
  isLoggedIn: false,
  id: 0,
  email: '',
  password: '',
  code: '',
  newPassword: '',
  confirmPassword: '',
  forgotPasswordResponse: {},
  verifyForgotPasswordResponse: {},
  spinner: false,
};

/**
 * Reducer related with signup
 * @class forgotPasswordReducer
 */
export default function forgotPasswordReducer(state = initialState, action) {
  switch (action.type) {
    case types.FORGOT_PASSWORD_REQUEST:
      return {
        ...state,
        email: action.email,
        spinner: true,
      };
    case types.FORGOT_PASSWORD_ENABLE_LOADER:
      return {
        ...state,
        spinner: true,
      };
    case types.FORGOT_PASSWORD_DISABLE_LOADER:
      return {
        ...state,
        spinner: false,
      };
    case types.FORGOT_PASSWORD_RESPONSE:
      return {
        ...state,
        isLoggedIn: true,
        forgotPasswordResponse: action.response,
        spinner: false,
      };
    case types.FORGOT_PASSWORD_FAILED:
      return {
        ...state,
        isLoggedIn: false,
        spinner: false,
      };
    case types.VERIFY_FORGOT_PASSWORD_REQUEST:
      return {
        ...state,
        code: action.code,
        newPassword: action.newPassword,
        confirmPassword: action.confirmPassword,
        email: action.email,
        spinner: true,
      };
    case types.VERIFY_FORGOT_PASSWORD_RESPONSE:
      return {
        ...state,
        verifyForgotPasswordResponse: action.response,
        spinner: false,
      };
    case types.VERIFY_FORGOT_PASSWORD_FAILED:
      return {
        ...state,
        spinner: false,
      };
    default:
      return state;
  }
}
