/* eslint-disable prettier/prettier */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/loginScreens/login';
import Acessar from '../screens/loginScreens/acessar';
import Cadastrar from '../screens/loginScreens/cadastrar';
import MainBottom from '../navigators/mainBottom';
import SplashScreen from '../screens/splashScreen';

const Stack = createStackNavigator();

const MainStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Acessar" component={Acessar} />
            <Stack.Screen name="Cadastrar" component={Cadastrar} />
            <Stack.Screen name="MainBottom" component={MainBottom} />
        </Stack.Navigator>
    );
};

export default MainStack;

