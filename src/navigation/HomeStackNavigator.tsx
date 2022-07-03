import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from 'src/screens/Search';
import TabNavigator from './TabNavigator';
import DetailsScreen from 'src/screens/Details';
import { COLORS } from 'src/utils/colors';

const Stack = createNativeStackNavigator<any>();

export const HomeStack = () => (
  <Stack.Navigator
    initialRouteName="HomeTab"
    screenOptions={{
      headerStyle: {
        backgroundColor: COLORS.background,
      },
      headerTintColor: COLORS.whiteSand,
    }}
  >
    <Stack.Screen
      name="HomeTab"
      component={TabNavigator}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Search"
      component={SearchScreen}
      options={{ presentation: 'modal', headerShown: false }}
    />
    <Stack.Screen
      name="Details"
      component={DetailsScreen}
      options={{ headerTitle: '' }}
    />
  </Stack.Navigator>
);
