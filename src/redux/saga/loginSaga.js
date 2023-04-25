import { call, cancel, cancelled, fork, put, take, takeLatest, takeEvery } from 'redux-saga/effects';
import { Alert } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { LogIn } from '../../services/Api';
import * as loginActions from '../actions/loginActions';
import * as type from '../actions/types';

/**
 * Create loginAsync file for manage saga effects
 * @class loginAsync
 */
export default function* loginAsync(action) {

  try {
    // Enable login loader
    yield put(loginActions.enableLoader());

    // Calling function for API
    const response = yield call(LogIn, action.email, action.password);
    // console.log('function*loginAsync :: response : ', response)

    if (response) {
      // Store login response
      yield put(loginActions.onLoginResponse(response));
      // Disable loader
      yield put(loginActions.disableLoader());
      // no need to call navigate as this is handled by redux store with SwitchNavigator
      // yield put(NavigationActions.navigate({ routeName: 'LaunchScreen' }));
    } else {
      // Login failed
      yield put(loginActions.loginFailed());
      // Disable loader
      yield put(loginActions.disableLoader());
    }
  } catch (error) {
    // Login failed
    yield put(loginActions.loginFailed());
    // Disable loader
    yield put(loginActions.disableLoader());

  }

}
