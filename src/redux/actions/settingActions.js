/**
 * Reducer actions related with login
 * @class settingActions
 */
import * as types from './types';

/**
 * @description requestLogin - login request
 * @param  {string} device_id - Use email for login request
 */
export function settingGetDeviceList(device_id) {
  return {
    type: types.SETTING_GET_DEVICE_DETAILS_REQUEST,
    device_id
  };
}

/**
 * @description  getDeviceDetailsFailed - get evice List failed action
 */
 export function getDeviceDetailsFailed() {
  return {
    type: types.SETTING_RESPONSE_FAIL,
  };
}

/**
 * @description  getDeviceDetailsResponse - get Device List failed action
 * @param  {object} response - Login Response
 */
export function getDeviceDetailsResponse(response) {
  return {
    type: types.SETTING_GET_DEVICE_DETAILS_RESPONSE,
    response,
  };
}
//----

/**
 * @description requestLogin - login request
 * @param  {string} boatName - Update boat name
 * @param  {string} boatDescription - Update boat description
 */
 export function requestUpdateSetting(data) {
  return {
    type: types.SETTING_UPDATE_REQUEST,
    data
  };
}

/**
 * @description  loginFailed - login failed action
 */
export function updateDeviceFailed() {
  return {
    type: types.SETTING_REQUEST_FAIL,
  };
}

/**
 * @description  onLoginResponse - login failed action
 * @param  {object} response - Login Response
 */
export function deviceResponse(response) {
  return {
    type: types.SETTING_RESPONSE,
    response,
  };
}

/**
 * @description  onLoginResponse - login failed action
 * @param  {object} response - Login Response
 */
export function updateDeviceResponse(response) {
  return {
    type: types.SETTING_UPDATE_RESPONSE,
    response,
  };
}

/**
 * @description enableLoader - enable Loader
 */
export function enableLoader() {
  return {
    type: types.SETTING_ENABLE_LOADER,
  };
}

/**
 * @description  disableLoader - disable Loader
 */
export function disableLoader() {
  return {
    type: types.SETTING_DISABLE_LOADER,
  };
}
