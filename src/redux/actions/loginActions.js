/**
 * Reducer actions related with login
 * @class loginActions
 */
import * as types from './types';

/**
 * @description requestLogin - login request
 * @param  {string} email - Use email for login request
 * @param  {string} password - Use password for login request
 */
export function requestLogin(email, password) {
  return {
    type: types.LOGIN_REQUEST,
    email,
    password,
  };
}

/**
 * @description  loginFailed - login failed action
 */
export function loginFailed() {
  return {
    type: types.LOGIN_FAILED,
  };
}

/**
 * @description  onLoginResponse - login failed action
 * @param  {object} response - Login Response
 */
export function onLoginResponse(response) {
  return {
    type: types.LOGIN_RESPONSE,
    response,
  };
}

/**
 * @description enableLoader - enable Loader
 */
export function enableLoader() {
  return {
    type: types.LOGIN_ENABLE_LOADER,
  };
}

/**
 * @description  disableLoader - disable Loader
 */
export function disableLoader() {
  return {
    type: types.LOGIN_DISABLE_LOADER,
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
