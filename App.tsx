import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthUserProvider } from './src/hooks/useAuth';
import { ApolloProvider } from '@apollo/client';

import client from './src/graphQL/client';
import useCachedResources from './src/hooks/useCachedResources';
import useColorScheme from './src/hooks/useColorScheme';
import Navigation from './src/navigation';
import React from 'react';
import { DeliveriesProvider } from './src/hooks/useDeliveriesQuery';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <ApolloProvider client={client}>
        <SafeAreaProvider>
          <AuthUserProvider>
            <DeliveriesProvider>
              <Navigation colorScheme={colorScheme} />
            </DeliveriesProvider>
          </AuthUserProvider>
          <StatusBar />
        </SafeAreaProvider>
      </ApolloProvider>
    );
  }
}
