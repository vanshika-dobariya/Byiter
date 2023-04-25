import { call, cancel, cancelled, fork, put, take, takeLatest, takeEvery } from 'redux-saga/effects';
import { ForgotPassword } from '../../services/Api';
import * as forgotPasswordActions from '../actions/forgotPasswordActions';
import * as type from '../actions/types';

/**
 * Create forgotPasswordAsync file for manage saga effects
 * @class forgotPasswordAsync
 */
export default function* forgotPasswordAsync(action) {

  try {
    // Enable login loader
    yield put(forgotPasswordActions.enableLoader());

    // Calling function for API
    const response = yield call(ForgotPassword, action.email);
    // console.log('function*forgotPasswordAsync :: response : ', response)

    if (response) {
      // Store login response
      yield put(forgotPasswordActions.onForgotPasswordResponse(response));
      // Disable loader
      yield put(forgotPasswordActions.disableLoader());
      // no need to call navigate as this is handled by redux store with SwitchNavigator
      // yield put(NavigationActions.navigate({ routeName: 'LaunchScreen' }));
    } else {
      // Login failed
      yield put(forgotPasswordActions.forgotPasswordFailed());
      // Disable loader
      yield put(forgotPasswordActions.disableLoader());
    }
  } catch (error) {
    // Login failed
    yield put(forgotPasswordActions.forgotPasswordFailed());
    // Disable loader
    yield put(forgotPasswordActions.disableLoader());

  }

}
