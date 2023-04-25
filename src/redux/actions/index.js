// export action creators
import * as loginActions from './loginActions';
import * as signUpActions from './signUpActions';
import * as dashboardActions from './dashboardActions';
import * as settingActions from './settingActions';
import * as profileActions from './profileActions';

const ActionCreators = {
  ...loginActions,
  ...signUpActions,
  ...dashboardActions,
  ...settingActions,
  ...profileActions,
};

export default ActionCreators;
