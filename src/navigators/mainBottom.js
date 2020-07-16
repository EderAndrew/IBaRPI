/* eslint-disable prettier/prettier */
import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import HomeStack from '../navigators/homeStack';
import Biblia from '../screens/bottomScreens/biblia';
import Oracao from '../screens/bottomScreens/oracao';
import Doacao from '../screens/bottomScreens/doacao';
import Mais from '../screens/bottomScreens/mais';

const Tab = createMaterialBottomTabNavigator();

const iconHome = <Icon name="home" size={22} color="#FFF"/>;
const iconBible = <Icon name="book" size={22} color="#FFF" />;
const iconPray = <Icon name="praying-hands" size={19} color="#FFF" />;
const iconHeart = <Icon name="hand-holding-heart" size={22} color="#FFF" />;
const iconPlus = <Icon name="plus-circle" size={22} color="#FFF"/>;

function MainBottom() {
  return (
    <Tab.Navigator screenOptions={{tabBarColor: '#04D94F'}}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{ tabBarIcon: ()=> iconHome }}
      />
      <Tab.Screen
        name="Biblia"
        component={Biblia}
        options={{ tabBarIcon: ()=> iconBible }}
      />
      <Tab.Screen
        name="Oração"
        component={Oracao}
        options={{ tabBarIcon: () => iconPray }}
      />
      <Tab.Screen
        name="Doação"
        component={Doacao}
        options={{ tabBarIcon: () => iconHeart }}
      />
      <Tab.Screen
        name="Mais"
        component={Mais}
        options={{ tabBarIcon: () => iconPlus }}
      />
    </Tab.Navigator>
  );
}

export default MainBottom;
