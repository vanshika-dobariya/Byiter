import { call, cancel, cancelled, fork, put, take, takeLatest, takeEvery } from 'redux-saga/effects';
import { VerifyForgotPassword } from '../../services/Api';
import * as forgotPasswordActions from '../actions/forgotPasswordActions';
import * as type from '../actions/types';

/**
 * Create verifyForgotPasswordAsync file for manage saga effects
 * @class verifyForgotPasswordAsync
 */
export default function* verifyForgotPasswordAsync(action) {

  try {
    // Enable login loader
    yield put(forgotPasswordActions.enableLoader());

    // Calling function for API
    const response = yield call(VerifyForgotPassword, action.code, action.newPassword, action.confirmPassword, action.email);
    // console.log('function*verifyForgotPasswordAsync :: response : ', response)

    if (response) {
      // Store login response
      yield put(forgotPasswordActions.onVerifyForgotPasswordResponse(response));
      // Disable loader
      yield put(forgotPasswordActions.disableLoader());
      // no need to call navigate as this is handled by redux store with SwitchNavigator
      // yield put(NavigationActions.navigate({ routeName: 'LaunchScreen' }));
    } else {
      // Login failed
      yield put(forgotPasswordActions.verifyForgotPasswordFailed());
      // Disable loader
      yield put(forgotPasswordActions.disableLoader());
    }
  } catch (error) {
    // Login failed
    yield put(forgotPasswordActions.verifyForgotPasswordFailed());
    // Disable loader
    yield put(forgotPasswordActions.disableLoader());

  }

}
