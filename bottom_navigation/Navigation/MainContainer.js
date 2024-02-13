// MainContainer.js

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './Screens/HomeScreen';
import ProfileScreen from './Screens/Profile';
import CalculatorScreen from './Screens/CalculatorScreen'; 

const HomeName = 'Home';
const ProfileName = 'Profile';
const CalculatorName = 'Calculator'; 

const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={HomeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;
            if (rn === HomeName) {
              iconName = focused ? 'home' : 'home-outline';
            } else if (rn === ProfileName) {
              iconName = focused ? 'list' : 'list-outline';
            } else if (rn === CalculatorName) { 
              iconName = focused ? 'calculator' : 'calculator-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}>
        <Tab.Screen name={HomeName} component={HomeScreen} />
        <Tab.Screen name={ProfileName} component={ProfileScreen} />
        <Tab.Screen name={CalculatorName} component={CalculatorScreen} /> 
      </Tab.Navigator>
    </NavigationContainer>
  );
}
