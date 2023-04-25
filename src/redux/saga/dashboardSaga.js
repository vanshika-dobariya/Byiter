import {
  call,
  cancel,
  cancelled,
  fork,
  put,
  take,
  takeLatest,
  takeEvery,
} from 'redux-saga/effects';
import {Alert} from 'react-native';
import {NavigationActions} from '@react-navigation/native';
import {GetDeals} from '../../services/Api';
import * as dashboardActions from '../actions/dashboardActions';
// Redux
import {useDispatch, useSelector} from 'react-redux';

/**
 * Create dashboardAsync file for manage saga effects
 * @class dashboardAsync
 */
export default function* dashboardAsync(action) {
  try {
    // Enable dashboard loader
    yield put(dashboardActions.enableLoader());

    // how to call api
    const response = yield call(
      GetDeals,
      action.size,
      action.from,
      action.lat,
      action.long,
      action.searchPhrase,
    );

    // console.log('function*getDeviceList :: response', response);

    if (response) {
      // Store dashboard get device response
      yield put(dashboardActions.getDeviceResponse(response));
      // Disable loader
      yield put(dashboardActions.disableLoader());
      // no need to call navigate as this is handled by redux store with SwitchNavigator
      // yield put(NavigationActions.navigate({ routeName: 'LaunchScreen' }));
    } else {
      // Get device list failed
      yield put(dashboardActions.getDeviceFailed());
      // Disable loader
      yield put(dashboardActions.disableLoader());
    }
  } catch (error) {
    console.log('Error Here : ' + error);
    yield put(dashboardActions.disableLoader());
  }
}
