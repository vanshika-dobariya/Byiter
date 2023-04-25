/**
 * Reducer actions related with signup
 * @class signupActions
 */
import * as types from './types';

/**
 * @description  {} requestSignUp - signup request
 * @param  {string} email - Use email for signup request
 * @param  {string} password - Use password for signup request
 */
export function requestSignUp(email, password) {
  console.log('requestSignUp :: email, password ', email, password);
  return {
    type: types.SIGNUP_REQUEST,
    email,
    password,
  };
}

/**
 * @description signUpFailed - signup failed action
 */
export function signUpFailed() {
  return {
    type: types.SIGNUP_FAILED,
  };
}

/**
 * @description onsignUpResponse - Signup failed action
 * @param  {object} response - Signup Response
 */
export function onsignUpResponse(response) {
  return {
    type: types.SIGNUP_RESPONSE,
    response,
  };
}

/**
 * @description enableLoader - enable Loader
 */
export function enableLoader() {
  return {
    type: types.SIGNUP_LOADING_ENDED,
  };
}

/**
 * @description disableLoader - disable Loader
 */
export function disableLoader() {
  return {
    type: types.SIGNUP_DISABLE_LOADER,
  };
}

/**
 * @description logOut - logOut user
 */
export function logOut() {
  return {
    type: types.LOG_OUT,
  };
}
/**
 * @description onlogoutResponse - Signup failed action
 * @param  {object} response - Signup Response
 */
 export function onlogoutResponse(response) {
  return {
    type: types.LOGOUT_RESPONSE,
    response,
  };
}
