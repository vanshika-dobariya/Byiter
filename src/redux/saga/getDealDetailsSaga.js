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
import { GetDealsDetails } from '../../services/Api';
import * as dashboardActions from '../actions/dashboardActions';
// Redux
import { useDispatch, useSelector } from 'react-redux';

/**
 * Create dealDetailsAsync file for manage saga effects
 * @class dealDetailsAsync
 */
export default function* dashboardAsync(action) {
  try {
    // Enable dashboard loader
    yield put(dashboardActions.enableLoader());

    // how to call api
    const response = yield call(
      GetDealsDetails,
      action.sourceDealId
    );

    // console.log('function*getDeviceList :: response', response);

    if (response) {
      // Store dashboard get device response
      yield put(dashboardActions.getDealDetailsResponse(response));
      // Disable loader
      yield put(dashboardActions.disableLoader());
      // no need to call navigate as this is handled by redux store with SwitchNavigator
      // yield put(NavigationActions.navigate({ routeName: 'LaunchScreen' }));
    } else {
      // Get device list failed
      yield put(dashboardActions.getDealDetailsFailed());
      // Disable loader
      yield put(dashboardActions.disableLoader());
    }
  } catch (error) {
    console.log('Error Here : ' + error);
    yield put(dashboardActions.disableLoader());
  }
}
