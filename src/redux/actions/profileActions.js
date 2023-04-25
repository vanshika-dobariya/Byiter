/**
 * Reducer actions related with login
 * @class profileActions
 */
import * as types from './types';

/**
 * @description requestLogout - logout request
 */
export function requestLogout(fcm_token) {
  return {
    type: types.PROFILE_LOGOUT_REQUEST,
    fcm_token
  };
}

/**
 * @description  logoutFailed - login failed action
 */
export function logoutFailed() {
  return {
    type: types.PROFILE_LOGOUT_FAILED,
  };
}

/**
 * @description  logoutResponse - login failed action
 * @param  {object} response - Login Response
 */
export function logoutResponse(response) {
  return {
    type: types.PROFILE_LOGOUT_RESPONSE,
    response,
  };
}

/**
 * @description enableLoader - enable Loader
 */
export function enableLoader() {
  return {
    type: types.PROFILE_ENABLE_LOADER,
  };
}

/**
 * @description  disableLoader - disable Loader
 */
export function disableLoader() {
  return {
    type: types.PROFILE_DISABLE_LOADER,
  };
}
