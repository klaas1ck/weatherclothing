import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

// Basal template til vores HomeScreen, som ikke er blevet developed endnu.
const HomeScreenC = (props) => {

    return (
            <View style={styles.container}>
               <Text>Home Screen!</Text>
            </View>
    );
}

//Eksportere så vi kan importere den i App.js
export default HomeScreenC;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0099FF',
        alignItems: 'center',
        justifyContent: 'center',
    },
});