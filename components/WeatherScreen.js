import React, { useState, useEffect } from "react";
import {StyleSheet,Text, View, ActivityIndicator, FlatList, } from "react-native";

//Eksportere så vi kan importere den i App.js
export default function WeatherScreenC(){
  // Loading const/UseState kan fortælle os om data'en er ved at loade eller den er fejlet.
    const [Load, setLoading] = useState(true);
    const [data, setData] = useState([]);
  
    // Ved hjælp af en async funktion henter vi data fra openweathermap API'en, som henter data fra London vha vores API Key.
    const getWeather = async () => {
       try {
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=7e002da2d49214cdf4d0880471bb8053');
        const json = await response.json();
        setData(json.weather);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
  // Kalder på funktionen, dvs henter data. 
    useEffect(() => {
      getWeather();
    }, []);
  // Når data'en er hentet kan vi liste dem vha. kalde på id'et fra json data'en. 
    return (
      <View style={{ flex: 1, padding: 48 }}>
        {Load ? <ActivityIndicator/> : (
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Text>The Weather Condition for London right now: {item.main}, {item.description}.
              WeatherClothes recommendation for the current weather: Hoodie/Jacket, Long pants.
              </Text>
              
            )}
          />
        )}
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0099FF',
    alignItems: "center",
  }
});