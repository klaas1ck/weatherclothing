import React from 'react';
import { StyleSheet, View, Text, Button} from 'react-native';

const navController = (navigation, route) => {
    navigation.navigate(route)}

// Vores Settings app, som skal være der hvor man personliggøre sine clothing indstillinger
function DetailsScreenC ({navigation}) {
    return (
            <View style={styles.container}>
                <Text>Personalize your weather clothing!</Text>
                <Button title="Upper Body" onPress={() => navController(navigation, 'ScreenOne')}/> 
                <Button title="Lower Body" onPress={() => navController(navigation, 'ScreenTwo')}/> 
            </View>
    );
}



//Eksportere så vi kan importere den i App.js
export default DetailsScreenC;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});