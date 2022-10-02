import React from 'react';
import { StyleSheet, View, Text, Button} from 'react-native';


// Knap og navigation funktion
const ScreenOne = ({navigation}) => {
    return (
            <View style={styles.container}>
                <Text>Vælg dine overkrops tøj her!</Text>
                <Button title={"Go Back"} onPress={() => navigation.goBack()}/>  
            </View>
    );
}



//Eksportere så vi kan importere den i App.js
export default ScreenOne;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});