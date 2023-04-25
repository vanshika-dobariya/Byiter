import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  Featured,
  FeaturedDetails,
  Profile,
  About,
  Location,
  Logout
} from "../screens";
// Import vector icons
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { colors } from '../constants';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function CustomDrawerContent(props) {
  return (
    <View style={styles.container}>
      <View style={styles.mainView}>
        <View style={styles.detailsView}>
          <Icon
            name="user"
            size={30}
          />
          <Text style={{ color: colors.white, fontSize: 16, fontWeight: '500', marginTop: 10 }}>deepak6sp@gmail.com</Text>
        </View>
        <View>
          <DrawerItemList {...props} />
        </View>
      </View>
    </View>
  );
}

function LocationTitle() {
  return (
    <TouchableOpacity
      onPress={() => {
        console.log('..Go to location..');
      }}
      style={styles.locationHeader}>
      <Entypo
        name="location-pin"
        size={25}
        color={colors.appCommonColor}
      />
      <Text style={styles.headerText}>Current Location</Text>
    </TouchableOpacity>
  );
}

function FeaturedRouters() {
  return (
    <SafeAreaProvider>
      <Stack.Navigator initialRouteName="Featured1"
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="Featured1" component={Featured} />
        <Stack.Screen name="Location" component={Location} />
        <Stack.Screen name="FeaturedDetails" component={FeaturedDetails} />
      </Stack.Navigator>
    </SafeAreaProvider>
  );
}


export default AppNavigator = () => (
  <Drawer.Navigator
    initialRouteName="Featured"
    drawerContent={(props) => <CustomDrawerContent {...props} />}
    screenOptions={{
      headerShown: false
    }}>

    <Drawer.Screen
      name="Profile"
      component={Profile}
      options={{
        title: 'Profile',
        drawerIcon: ({ focused, size }) => (
          <Icon
            name="user"
            size={15}
            color={focused ? colors.appCommonColor : colors.black}
          />
        ),
      }} />

    <Drawer.Screen name="Featured" component={FeaturedRouters}
      options={{
        title: 'Featured',
        headerTitle: (props) => <LocationTitle {...props} />,
        headerStyle: {
          backgroundColor: colors.white,
        },
        headerTintColor: colors.appCommonColor,
        drawerIcon: ({ focused, size }) => (
          <AntDesign
            name="star"
            size={15}
            color={focused ? colors.appCommonColor : colors.black}
          />
        ),
      }} />

    <Drawer.Screen name="About Buyiteer" component={About}
      options={{
        title: 'About Buyiteer',
        drawerIcon: ({ focused, size }) => (
          <AntDesign
            name="infocirlce"
            size={15}
            color={focused ? colors.appCommonColor : colors.black}
          />
        ),
      }} />

    <Drawer.Screen name="Logout" component={Logout}
      options={{
        title: 'Logout',
        drawerIcon: ({ focused, size }) => (
          <Entypo
            name="log-out"
            size={15}
            color={focused ? colors.appCommonColor : colors.black}
          />
        ),
      }} />

  </Drawer.Navigator>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.white
  },
  mainView: {
    flexDirection: 'column',
    flex: 1
  },
  detailsView: {
    height: 150,
    backgroundColor: colors.appCommonColor,
    justifyContent: 'center',
    alignItems: 'center'
  },
  locationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    color: colors.appCommonColor,
    fontSize: 18,
    fontWeight: '500'
  }
});