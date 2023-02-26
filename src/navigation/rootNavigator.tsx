import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

/* Screens */
import HomeScreen from '../screens/homeScreen';
import SideMenuScreen from '../screens/sideMenuScreen';

export type AppStackParamList = {
  HomeScreen: undefined;
  SideMenuScreen: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

const RootNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'HomeScreen'} component={HomeScreen} />
      <Stack.Screen name={'SideMenuScreen'} component={SideMenuScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default RootNavigator;
