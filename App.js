/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React from 'react';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import {store, persistor} from './src/store';
import MainStack from './src/navigators/mainStack';

const App = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export default () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App/>
    </PersistGate>
  </Provider>
);

//#03061A
