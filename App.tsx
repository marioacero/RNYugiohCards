import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { queryClient } from 'src/domain/api/queryClient';
import { QueryClientProvider } from 'react-query';
import { COLORS } from 'src/utils/colors';
import { HomeStack } from 'src/navigation/HomeStackNavigator';
import { FavoritesProvider } from 'src/domain/context/favoritesContext';

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: COLORS.background,
  },
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <FavoritesProvider>
        <NavigationContainer theme={navTheme}>
          <HomeStack />
        </NavigationContainer>
      </FavoritesProvider>
    </QueryClientProvider>
  );
};

export default App;
