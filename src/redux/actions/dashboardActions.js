/**
 * Reducer actions related with dshboard
 * @class dashboardActions
 */
import * as types from './types';

/**
 * @description getDeviceList - get Device List request
 */
export function getDeviceList(size, from, lat, long, searchPhrase) {
  return {
    type: types.GET_DEVICE_REQUEST,
    size,
    from,
    lat,
    long,
    searchPhrase,
  };
}

/**
 * @description  getDeviceList - get evice List failed action
 */
export function getDeviceFailed() {
  return {
    type: types.GET_DEVICE_FAILED,
  };
}

/**
 * @description  getDeviceResponse - get Device List failed action
 * @param  {object} response - deal Response
 */
export function getDeviceResponse(response) {
  return {
    type: types.GET_DEVICE_RESPONSE,
    response,
  };
}

/**
 * @description  refreshLocation - Refresh the location
 * @param  {location} location - locarion Response
 */
 export function refreshLocation(location) {
  return {
    type: types.REFRESH_LOCATION,
    location
  };
}
//---
/**
 * @description getDealDetails - get Device List request
 * @param  {string} token - User token for get device list request
 */
 export function getDealDetails(sourceDealId) {
  return {
    type: types.GET_DEAL_DETAILS_REQUEST,
    sourceDealId,
  };
}

/**
 * @description  getDeviceList - get evice List failed action
 */
export function getDealDetailsFailed() {
  return {
    type: types.GET_DEAL_DETAILS_FAILED,
  };
}

/**
 * @description  getDeviceResponse - get Device List failed action
 * @param  {object} response - deal Response
 */
export function getDealDetailsResponse(response) {
  return {
    type: types.GET_DEAL_DETAILS_RESPONSE,
    response,
  };
}
//---

/**
 * @description enableLoader - enable Loader
 */
export function enableLoader() {
  return {
    type: types.DASHBOARD_ENABLE_LOADER,
  };
}

/**
 * @description  disableLoader - disable Loader
 */
export function disableLoader() {
  return {
    type: types.DASHBOARD_DISABLE_LOADER,
  };
}
