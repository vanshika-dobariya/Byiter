import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './NavigationService';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';
import {SplashScreen} from '../screens';
import {createStackNavigator} from '@react-navigation/stack';
import linking from './linking';

const Stack = createStackNavigator();

/**
 * Manage application navigation flow, This function is called when application loads.
 * @class AppContainer
 */

export default AppContainer = () => {
  return (
    <NavigationContainer ref={navigationRef} linking={linking}>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="AppNavigator" component={AppNavigator} />
        <Stack.Screen name="AuthNavigator" component={AuthNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// const [initializing, setInitializing] = useState(true);
// useEffect(() => {
//   setTimeout(() => {
//     if (initializing) setInitializing(false);
//   }, 2000);
// }, []);
// if (initializing) return <SplashScreen />;
// {user ? <AppNavigator /> : <AuthNavigator />}
