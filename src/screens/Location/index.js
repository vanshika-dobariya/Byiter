import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import styles from './style';
// Images
import Images from '../../utils/Images';
import { colors } from '../../constants';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Geolocation from 'react-native-geolocation-service';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { refreshLocation } from '../../redux/actions/dashboardActions';

// Import Autocomplete component
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
const API_KEY = 'AIzaSyCoOSAYqfkrSCKCupmG9uF-wUsPGKw2FaI';

/**
 * @class Location
 * @param  {Object} navigation - Use for navigation
 */
export default Location = ({ navigation }) => {
  /**
   * @description dispatch {object} - Dispatch Action
   */
  const dispatch = useDispatch();

  const [spinner, setSpinner] = useState(false);
  const [forceLocation, setForceLocation] = useState(true);
  const [highAccuracy, setHighAccuracy] = useState(true);
  const [locationDialog, setLocationDialog] = useState(true);
  const [useLocationManager, setUseLocationManager] = useState(false);
  const [location, setLocation] = useState(null);
  const [postcode, setPostcode] = useState();
  const [textInput, setTextInput] = useState();


  const hasPermissionIOS = async () => {
    const openSetting = () => {
      Linking.openSettings().catch(() => {
        Alert.alert('Unable to open settings');
      });
    };
    const status = await Geolocation.requestAuthorization('whenInUse');

    if (status === 'granted') {
      return true;
    }

    if (status === 'denied') {
      Alert.alert('Location permission denied');
    }

    if (status === 'disabled') {
      Alert.alert(
        `Turn on Location Services to allow Buyiteer to determine your location.`,
        '',
        [
          { text: 'Go to Settings', onPress: openSetting },
          { text: "Don't Use Location", onPress: () => { } },
        ],
      );
    }

    return false;
  };

  const hasLocationPermission = async () => {
    if (Platform.OS === 'ios') {
      const hasPermission = await hasPermissionIOS();
      return hasPermission;
    }

    if (Platform.OS === 'android' && Platform.Version < 23) {
      return true;
    }

    const hasPermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    if (hasPermission) {
      return true;
    }

    const status = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    if (status === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    }

    if (status === PermissionsAndroid.RESULTS.DENIED) {
      ToastAndroid.show(
        'Location permission denied by user.',
        ToastAndroid.LONG,
      );
    } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
      ToastAndroid.show(
        'Location permission revoked by user.',
        ToastAndroid.LONG,
      );
    }

    return false;
  };

  const getLocation = async () => {
    const hasPermission = await hasLocationPermission();

    if (!hasPermission) {
      return;
    }

    Geolocation.getCurrentPosition(
      position => {
        var setCoords = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        console.log('setCoords : ' + JSON.stringify(setCoords));
        setLocation(setCoords);
        dispatch(refreshLocation(setCoords));
        navigation.navigate('Featured1');
        // console.log(position);
      },
      error => {
        Alert.alert(`Code ${error.code}`, error.message);
        console.log(error);
      },
      {
        accuracy: {
          android: 'high',
          ios: 'best',
        },
        enableHighAccuracy: highAccuracy,
        timeout: 15000,
        maximumAge: 10000,
        distanceFilter: 0,
        forceRequestLocation: forceLocation,
        forceLocationManager: useLocationManager,
        showLocationDialog: locationDialog,
      },
    );
  };

  const SpecifyLocation = () => { };

  return (
    <SafeAreaView style={styles.safeView}>
      <View style={{ marginVertical: 15, flexDirection: 'row' }}>
        <View style={{ flex: 0.1, marginStart: 5 }}>
          <Ionicons
            name="arrow-back"
            size={30}
            color={colors.white}
            onPress={() => {
              navigation.goBack();
            }}
          />
        </View>
        <View style={{ flex: 0.9, alignItems: 'center' }}>
          <Text style={styles.headerText}>Location</Text>
        </View>
      </View>

      <View style={styles.container}>
        <View style={{ margin: 20, flex: 1 }}>
          <View style={styles.locationView}>
            <TouchableOpacity
              onPress={() => {
                getLocation();
              }}
              style={styles.locationHeader}>
              <Entypo name="location-pin" size={25} color={colors.white} />
              <Text style={styles.locationText}>Current Location</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginVertical: 20,
            }}>
            <Text>OR</Text>
          </View>

          <Text style={{ fontSize: 15, marginBottom: 10 }}>Specify location</Text>
          <GooglePlacesAutocomplete
            GooglePlacesDetailsQuery={{ fields: 'geometry' }}
            minLength={2}
            listViewDisplayed="auto"
            autoFocus={false}
            returnKeyType={'search'}
            fetchDetails={true} // you need this to fetch the details object onPress
            placeholder='Enter suburb or postcode'
            textInputProps={{
              clearButtonMode: 'never',
              ref: input => {
                setTextInput(input);
              }
            }}
            onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true
              // console.log("data", data);
              // console.log("details", details);
              console.log(JSON.stringify(details?.geometry?.location));
              setLocation(details?.geometry?.location);
              dispatch(refreshLocation(details?.geometry?.location));
              navigation.navigate('Featured1');
            }}
            query={{
              key: API_KEY,
              language: 'en',
              components: 'country:aus',
              types: 'geocode'
            }}
            styles={{
              textInputContainer: {
                borderColor: colors.lightGrey,
                borderBottomWidth: 0.7,
                color: colors.black,
                fontSize: 18,
                paddingHorizontal: 1,
                backgroundColor: colors.white,
              },
              textInput: {
                fontSize: 17,
                color : colors.gray
              },
              predefinedPlacesDescription: {
                color: colors.lightGrey,
              },
            }}
            renderRightButton={() => (
              <TouchableOpacity
                style={{
                }}
                onPress={() => {
                  textInput.clear()
                }}
              >
                <Entypo
                  name="cross"
                  size={30}
                  color={colors.black}
                  onPress={() => {
                    console.log('..Cross Press..');
                  }}
                />
              </TouchableOpacity>
            )}
            onFail={(error) => console.error(error)}
          />


        </View>
      </View>
    </SafeAreaView>
  );
};
