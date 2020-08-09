/* eslint-disable prettier/prettier */
/* eslint-disable semi */
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Biblia from '../screens/bottomScreens/biblia'
import Chapters from '../screens/bibliaScreens/cap'
import Verses from '../screens/bibliaScreens/vers'

const Stack = createStackNavigator();

const BibliaStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Biblia" component={Biblia} />
      <Stack.Screen name="Capitulos" component={Chapters} />
      <Stack.Screen name="Versiculos" component={Verses} />
    </Stack.Navigator>
  );
};

export default BibliaStack;