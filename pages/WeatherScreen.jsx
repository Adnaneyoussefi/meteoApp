import React, { useEffect, useState } from 'react';
import { Button, StatusBar, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
const axios = require('axios');

export default function WeatherScreen({ navigation, route }){

    const [loading, setLoading] = useState(false);
    const [temperature, setTemperature] = useState();
    const [maxTemperature, setMaxTemperature] = useState();
    const [minTemperature, setMinTemperature] = useState();
    const [pressure, setPressure] = useState();
    const [humidity, setHumidity] = useState();

    const goToHome = function(){
        navigation.navigate("Home");
    }

    const getWeather = async () => {
        setLoading(true);
        const LAT = route.params.item.latitude;
        const LON = route.params.item.longitude;
        const res = await axios.get('https://fcc-weather-api.glitch.me/api/current?lat='+LAT+'&lon='+LON);
        console.log(res.data);
        setTemperature(res.data.main.temp);
        setMaxTemperature(res.data.main.temp_max);
        setMinTemperature(res.data.main.temp_min);
        setPressure(res.data.main.pressure);
        setHumidity(res.data.main.humidity);
        setLoading(false);
    }

    useEffect(() => {
        getWeather();
    }, []);

    return(
        <View>
            {loading ? <ActivityIndicator size="small" color="#0000ff" />
            :
            <>
            <Text>Temperature: {temperature}</Text>
            <Button onPress={goToHome} title="Go To Home" />
            </>
            }
        </View>
    )
}