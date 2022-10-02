import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreenC from './components/HomeScreen'
import StackNavigatorC from './components/StackNavigator'
import WeatherScreenC from './components/WeatherScreen';

// Laver vores funktion til HomeScreen, samt kalder den HomeScreen Component som vi har importeret.
function HomeScreen() {
  return (
    <View style={{ flex: 1,backgroundColor: '#0099FF', justifyContent: 'center', alignItems: 'center' }}>
      <HomeScreenC/>
    </View>
  );
}

// Laver vores funktion til WeatherScreen, samt kalder den WeatherScreen Component som vi har importeret.
function WeatherScreen() {
  return (
    <View style={{ flex: 1,backgroundColor: '#0099FF', justifyContent: 'center', alignItems: 'center' }}>
      <Text>Weather Today in London</Text>
      <WeatherScreenC/>
    </View>
  );
}

// Laver vores funktion til StackNavigator, samt kalder den StackNavigator Component som vi har importeret.
function StackNavigator() {
  return (
    <View style={{ flex: 1,backgroundColor: '#0099FF', justifyContent: 'center', alignItems: 'center' }}>
      <StackNavigatorC/>
    </View>
  );
}
// Laver en navigation vha. createBottomTabNavigator, som kan hjælpe os med at lave views og navigere i appen
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Weather" component={WeatherScreen} />
        <Tab.Screen name="Personal Settings" component={StackNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}