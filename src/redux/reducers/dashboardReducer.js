import * as types from '../actions/types';

// init state value 
const initialState = {
  id: 0,
  device_id: 0,
  limit: 10,
  offset: 10,
  spinner: false,
  size: 10,
  from: 0,
  lat: '',
  long: '',
  searchPhrase: '',
  dealsList: {},
  location: {},
  deviceDetailsResponse: {},
  dealDetailsResponse: {},
  sourceDealId: ''
};

/**
 * Reducer
 * @class dashboardReducer
 */
export default function dashboardReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_DEVICE_REQUEST:
      return {
        ...state,
        size: action.size,
        from: action.from,
        lat: action.lat,
        long: action.long,
        searchPhrase: action.searchPhrase,
        spinner: true,
      };
    case types.DASHBOARD_ENABLE_LOADER:
      return {
        ...state,
        spinner: true,
      };
    case types.DASHBOARD_DISABLE_LOADER:
      return {
        ...state,
        spinner: false,
      };
    case types.GET_DEVICE_RESPONSE:
      return {
        ...state,
        dealsList: action.response,
        spinner: false,
      };
    case types.GET_DEVICE_DETAILS_REQUEST:
      return {
        ...state,
        device_id: action.device_id,
        spinner: true,
      };
    case types.GET_DEVICE_DETAILS_RESPONSE:
      return {
        ...state,
        deviceDetailsResponse: action.response,
        spinner: false,
      };
    case types.GET_DEVICE_DETAILS_FAILED:
      return {
        ...state,
        deviceDetailsResponse: {},
        spinner: false,
      };
    case types.REFRESH_LOCATION:
      return {
        ...state,
        location: action.location,
        spinner: false,
      };
    case types.GET_DEVICE_FAILED:
      return {
        ...state,
        spinner: false,
      };
    //--
    case types.GET_DEAL_DETAILS_REQUEST:
      return {
        ...state,
        sourceDealId: action.sourceDealId,
        spinner: true,
      };
    case types.GET_DEAL_DETAILS_RESPONSE:
      return {
        ...state,
        dealDetailsResponse: action.response,
        spinner: false,
      };
    case types.GET_DEAL_DETAILS_FAILED:
      return {
        ...state,
        dealDetailsResponse: {},
        spinner: false,
      };
    //--
    default:
      return state;
  }
}