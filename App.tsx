import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from 'src/navigation/TabNavigator';
import { queryClient } from 'src/domain/api/queryClient';
import { QueryClientProvider } from 'react-query';

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
