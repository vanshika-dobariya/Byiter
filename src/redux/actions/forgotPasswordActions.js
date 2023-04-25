/**
 * Reducer actions related with signup
 * @class signupActions
 */
import * as types from './types';

/**
 * @description  {} requestForgotPassword - signup request
 * @param  {string} email - Use email for signup request
 * @param  {string} password - Use password for signup request
 */
export function requestForgotPassword(email) {
  console.log('requestForgotPassword :: email ', email);
  return {
    type: types.FORGOT_PASSWORD_REQUEST,
    email,
  };
}

/**
 * @description signUpFailed - signup failed action
 */
export function forgotPasswordFailed() {
  return {
    type: types.FORGOT_PASSWORD_FAILED,
  };
}

/**
 * @description onsignUpResponse - Signup failed action
 * @param  {object} response - Signup Response
 */
export function onForgotPasswordResponse(response) {
  return {
    type: types.FORGOT_PASSWORD_RESPONSE,
    response,
  };
}

// ---
/**
 * @description  {} requestForgotPassword - signup request
 * @param  {string} email - Use email for signup request
 * @param  {string} password - Use password for signup request
 */
export function requestVerifyForgotPassword(code, newPassword, confirmPassword, email) {
  return {
    type: types.VERIFY_FORGOT_PASSWORD_REQUEST,
    code,
    newPassword,
    confirmPassword,
    email,
  };
}

/**
 * @description signUpFailed - signup failed action
 */
export function verifyForgotPasswordFailed() {
  return {
    type: types.VERIFY_FORGOT_PASSWORD_FAILED,
  };
}

/**
 * @description onsignUpResponse - Signup failed action
 * @param  {object} response - Signup Response
 */
export function onVerifyForgotPasswordResponse(response) {
  return {
    type: types.VERIFY_FORGOT_PASSWORD_RESPONSE,
    response,
  };
}
// ---

/**
 * @description enableLoader - enable Loader
 */
export function enableLoader() {
  return {
    type: types.FORGOT_PASSWORD_LOADING_ENDED,
  };
}

/**
 * @description disableLoader - disable Loader
 */
export function disableLoader() {
  return {
    type: types.FORGOT_PASSWORD_DISABLE_LOADER,
  };
}

