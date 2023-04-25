import { Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';

const constants = {
      hasNotch : DeviceInfo.hasNotch(),
      isIphoneX : DeviceInfo.hasNotch() && Platform.OS === 'ios',
      SERVICEURL : 'http://api-dev.tattlebox.net/tattlebox/',
      ProvacyPolicyURL : 'http://www.tattlebox.net/privacy.html'
}

export default constants;