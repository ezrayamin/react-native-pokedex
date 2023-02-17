import React from 'react';
import { Provider } from 'react-redux'

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { MainNav } from './src/navigators/main-navigation';
import { store } from './src/redux'

export default function App() {
  // store.subscribe(() => {
  //   console.log(`subscribe: ${store.getState()}`)
  //   // console.log(store)
  // })
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNav />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
