/* eslint-disable prettier/prettier */
/* eslint-disable semi */
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/stackScreens/home'
import Perfil from '../screens/stackScreens/perfil'
import Videos from '../screens/stackScreens/videos'

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Perfil" component={Perfil} />
      <Stack.Screen name="Video" component={Videos} />
    </Stack.Navigator>
  );
};

export default HomeStack;
