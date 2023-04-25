import React, { useEffect, useState } from 'react';
import {
  Alert,
  Linking,
  PermissionsAndroid,
  Platform,
  SafeAreaView,
  Text,
  ToastAndroid,
  View,
  StatusBar,
  FlatList,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo';
import { colors } from '../../constants';
import { DealItem, Spinner } from '../../components';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import {
  getDeviceList,
  getDeviceResponse,
  refreshLocation,
} from '../../redux/actions/dashboardActions';
// Images
import Images from '../../utils/Images';
// Style
import styles from './style';
import Geocoder from 'react-native-geocoder';

const API_KEY = 'AIzaSyCoOSAYqfkrSCKCupmG9uF-wUsPGKw2FaI';

/**
 * @class Featured
 * @param  {Object} navigation - Use for navigation
 */
export default Featured = ({ navigation }) => {
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
  const [selectedId, setSelectedId] = useState(null);
  const [dealList, setDealList] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [offset, setOffset] = useState(1);
  const [pullToRefresh, setPullToRefresh] = useState(false);
  const [size, setSize] = useState(5);
  const [from, setFrom] = useState(0);
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [searchPhrase, setSearchPhrase] = useState('');
  const [subLocality, setSubLocality] = useState('Current Location');

  const dealsResponse = useSelector(state => state.dashboardReducer.dealsList);
  // const spinnerResponse = useSelector(state => state.dashboardReducer.spinner);
  const getUpdateLocation = useSelector(
    state => state.dashboardReducer.location,
  );

  useEffect(() => {
    getLocation(0);
  }, []);


  useEffect(() => {
    // console.log('Get the deals ::: ' + JSON.stringify(dealsResponse.data));
    if (dealsResponse.data && dealsResponse.data.length > 0) {
      // setDealList(dealsResponse.data);
      setFrom(from + 1);
      //Increasing the offset for the next API call
      setDealList([...dealList, ...dealsResponse.data]);
      setLoading(false);
      setSpinner(false);

      var setResponse = {};
      dispatch(getDeviceResponse(setResponse));
    } else {
      setSpinner(false);
      setLoading(false);
    }
  }, [dealsResponse]);

  useEffect(() => {
    if (Object.keys(getUpdateLocation).length !== 0) {
      console.log(
        '..Finally Update the location.. : ' +
        JSON.stringify(getUpdateLocation),
      );

      setSpinner(true);
      setDealList([]);
      getPlaceName(getUpdateLocation.lat, getUpdateLocation.lng);
      setTimeout(() => {
        dispatch(
          getDeviceList(
            size,
            0,
            getUpdateLocation.lat,
            getUpdateLocation.lng,
            searchPhrase,
          ),
        );
      }, 500);

      var setResponse = {};
      dispatch(refreshLocation(setResponse));
    }
  }, [getUpdateLocation]);

  const onRefresh = async () => {
    console.log('..Pull To Refresh..');
    setSpinner(true);
    setDealList([]);
    setSize(10);
    await getLocation(0);
  };

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

  const getLocation = async from => {
    const hasPermission = await hasLocationPermission();

    // if (!hasPermission) {
    //   return;
    // }

    Geolocation.getCurrentPosition(
      position => {
        setLocation(position);
        // console.log('position : '+JSON.stringify(position));
        if (position) {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          dispatch(
            getDeviceList(
              size,
              from,
              position.coords.latitude,
              position.coords.longitude,
              searchPhrase,
            ),
          );

          getPlaceName(position.coords.latitude, position.coords.longitude);
        } else {
          dispatch(
            getDeviceList(size, from, latitude, longitude, searchPhrase),
          );
        }
      },
      error => {
        // Alert.alert(`Code ${error.code}`, error.message);
        setLocation(null);
        dispatch(
          getDeviceList(
            size,
            from,
            '',
            '',
            searchPhrase,
          ),
        );
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

  const getPlaceName = async (lat, lng) => {
    // simply add your google key
    Geocoder.fallbackToGoogle(API_KEY);
    // use the lib as usual
    let ret = await Geocoder.geocodePosition({ lat, lng });
    let address = ret[0];
    if (
      address.hasOwnProperty('streetName') &&
      address.streetName != '' &&
      address.streetName != null
    ) {
      setSubLocality(address.streetName);
    } else {
      var setLocality = address.formattedAddress.split(',');
      setSubLocality(setLocality[0]);
    }
    console.log('Get Place Name : ' + JSON.stringify(ret[0]));
  };

  const searchDeals = () => {
    console.log('..Search Deals ..' + searchPhrase);
    setSpinner(true);
    setDealList([]);
    dispatch(getDeviceList(size, 0, latitude, longitude, searchPhrase));
  };

  const renderItem = ({ item }) => {
    return (
      <DealItem
        item={item._source}
        onPress={() => {
          navigation.navigate('FeaturedDetails', {
            id: item._source.sourceDealId
          });
        }}
      />
    );
  };

  const renderFooter = () => {
    return (
      //Footer View with Load More button
      <View style={styles.footer}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => {
            console.log('..Load More Data..'),
              dispatch(
                getDeviceList(size, from, latitude, longitude, searchPhrase),
              );
          }}
          //On Click of button load more data
          style={styles.loadMoreBtn}>
          <Text style={styles.btnText}>Load More</Text>
          {loading ? (
            <ActivityIndicator color="blue" style={{ marginLeft: 8 }} />
          ) : null}
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safeView}>
      <View style={{ marginVertical: 18, flexDirection: 'row' }}>
        <View style={{ flex: 0.1, marginStart: 5 }}>
          <Entypo
            name="menu"
            size={25}
            color={colors.appCommonColor}
            onPress={() => {
              navigation.openDrawer();
            }}
          />
        </View>
        <View style={{ flex: 0.8 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Location')}
            style={styles.locationHeader}>
            <Entypo
              name="location-pin"
              size={25}
              color={colors.appCommonColor}
            />
            <Text numberOfLines={1} style={styles.headerText}>
              {subLocality}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.topView}>
        <TextInput
          style={styles.input}
          placeholder={'Search deals'}
          onChangeText={setSearchPhrase}
          value={searchPhrase}
          onSubmitEditing={() => searchDeals()}
        />
      </View>

      {spinner || dealList.length === 0 ? (
        <Spinner color={colors.blue} />
      ) : (
        <View style={styles.container}>
          <FlatList
            data={dealList}
            renderItem={renderItem}
            keyExtractor={(item, index) => item._id + index}
            extraData={selectedId}
            // ItemSeparatorComponent={ItemSeparatorView}
            enableEmptySections={true}
            // ListFooterComponent={renderFooter}
            onRefresh={() => {
              onRefresh();
            }}
            refreshing={pullToRefresh}
            onEndReached={() => {
              console.log('..Load More Data..');
              if (dealList.length > 5) {
                dispatch(
                  getDeviceList(size, from, latitude, longitude, searchPhrase),
                );
              }
            }}
            onEndReachedThreshold={0.5}
          />
        </View>
      )}
    </SafeAreaView>
  );
};
