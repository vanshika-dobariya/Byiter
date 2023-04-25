import { call, cancel, cancelled, fork, put, take, takeLatest, takeEvery } from 'redux-saga/effects';
import { signOut } from '../../services/Api';
import * as profileActions from '../actions/profileActions';

/**
 * Create profileAsync file for manage saga effects
 * @class profileAsync
 */
export default function* profileAsync(action) {

  try {
    // Enable login loader
    yield put(profileActions.enableLoader());

    // Calling function for API
    const response = yield fork(signOut, action.fcm_token);
    // console.log('function*profileAsync :: response : ', response)

    if (response) {
      // Store login response
      yield put(profileActions.logoutResponse(response));
      // Disable loader
      yield put(profileActions.disableLoader());
      // no need to call navigate as this is handled by redux store with SwitchNavigator
      // yield put(NavigationActions.navigate({ routeName: 'LaunchScreen' }));
    } else {
      // Login failed
      yield put(profileActions.logoutFailed());
      // Disable loader
      yield put(profileActions.disableLoader());
    }
  } catch (error) {
    // Login failed
    yield put(profileActions.logoutFailed());
    // Disable loader
    yield put(profileActions.disableLoader());

  }

}
