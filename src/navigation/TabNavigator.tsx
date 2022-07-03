import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FavoritesScreen from 'src/screens/Favorites';
import { COLORS } from 'src/utils/colors';
import HomeScreen from 'src/screens/Home';
import SearchItem from 'src/components/Search/SearchItem';
import { FavoriteHeartFullIcon, HomeIcon } from 'src/utils/icons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: COLORS.background, borderTopWidth: 0 },
        tabBarIcon: ({ focused }) => {
          if (route.name === 'Home') {
            return (
              <HomeIcon
                height={25}
                width={25}
                fill={focused ? COLORS.cian : COLORS.lightGray}
              />
            );
          } else {
            return (
              <FavoriteHeartFullIcon
                height={25}
                width={25}
                fill={focused ? COLORS.cian : COLORS.lightGray}
              />
            );
          }
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: 'YugiOh Cards',
          headerStyle: {
            backgroundColor: COLORS.background,
          },
          headerTintColor: COLORS.whiteSand,
          headerRight: () => {
            return <SearchItem />;
          },
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          headerStyle: {
            backgroundColor: COLORS.background,
          },
          headerTintColor: COLORS.whiteSand,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
