import * as types from '../actions/types';

// init state value
const initialState = {
  id: 0,
  device_id: '',
  boatName: null,
  boatDescription: null,
  spinner: false,
  settingResponse: {},
  settingUpdateResponse: {},
  deviceDetailsResponse: {},
  data: {}
};

/**
 * Reducer
 * @class settingReducer
 */
export default function settingReducer(state = initialState, action) {
  switch (action.type) {
    case types.SETTING_REQUEST:
      return {
        ...state,
        device_id: action.device_id,
        spinner: true,
      };
    case types.SETTING_UPDATE_REQUEST:
      return {
        ...state,
        data: action.data,
        spinner: true,
      };
    case types.SETTING_ENABLE_LOADER:
      return {
        ...state,
        spinner: true,
      };
    case types.SETTING_DISABLE_LOADER:
      return {
        ...state,
        spinner: false,
      };
    case types.SETTING_RESPONSE:
      return {
        ...state,
        settingResponse: action.response,
        spinner: false,
      };
    case types.SETTING_UPDATE_RESPONSE:
      return {
        ...state,
        settingUpdateResponse: action.response,
        spinner: false,
      };
    case types.SETTING_REQUEST_FAIL:
      return {
        ...state,
        spinner: false,
      };
    //--
    case types.SETTING_GET_DEVICE_DETAILS_REQUEST:
      return {
        ...state,
        device_id: action.device_id,
        spinner: true,
      };
    case types.SETTING_GET_DEVICE_DETAILS_RESPONSE:
      return {
        ...state,
        deviceDetailsResponse: action.response,
        spinner: false,
      };
    case types.SETTING_GET_DEVICE_DETAILS_FAILED:
      return {
        ...state,
        deviceDetailsResponse: {},
        spinner: false,
      };
    //--
    default:
      return state;
  }
}