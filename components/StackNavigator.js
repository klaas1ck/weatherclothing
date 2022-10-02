import DetailsScreenC from './DetailsScreen';
import ScreenOne from "./stackComponents/ScreenOne";
import ScreenTwo from "./stackComponents/ScreenTwo";
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View } from 'react-native';


const Stack = createStackNavigator();
// Jeg og øvelseslærene blev enige om jeg måtte copy/paste, da vi ikke kunne finde hvorfor den fejlede
// Vha. copy paste fik vi løst fejlen (ved ik hvor fejlen var)
function StackNavigatorC() {
    return (
        <Stack.Navigator
            initialRouteName="Details"
        >
            <Stack.Screen name="Details" component={DetailsScreenC}
                          options={{
                              headerTitleAlign: 'center',
                              headerTitleStyle: {color: 'white'},
                              headerStyle: {backgroundColor: '#ba6262'}}
                          }
            />
            <Stack.Screen name="ScreenOne" component={ScreenOne} options={{
                headerTitleStyle: { textAlign: 'right', color: 'white' },
                headerStyle: {backgroundColor: '#0099FF'}
            }} />
            <Stack.Screen name="ScreenTwo" component={ScreenTwo} options={{
                headerTitleStyle: {color: 'black'},
                headerStyle: {backgroundColor: '#0099FF'}
            }}
            />
        </Stack.Navigator>
    )
}
//Eksportere så vi kan importere den i App.js
export default StackNavigatorC
