import React, { useEffect, useState } from 'react';
import { StatusBar, StyleSheet, View, ActivityIndicator } from 'react-native';
import { Button, Center, Image, NativeBaseProvider, Stack, Text, Spinner, HStack, Heading } from "native-base";
const axios = require('axios');

export default function WeatherScreen({ navigation, route }){

    const [loading, setLoading] = useState(false);
    const [temperature, setTemperature] = useState();
    const [maxTemperature, setMaxTemperature] = useState();
    const [minTemperature, setMinTemperature] = useState();
    const [pressure, setPressure] = useState();
    const [humidity, setHumidity] = useState();
    const [img, setImg] = useState('');

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
        setImg(res.data.weather[0].icon);
        setLoading(false);
    }

    useEffect(() => {
        getWeather();
    }, []);

    return(
        <View>
            {loading ? 
                        <Center>
                            <Spinner size="lg" color="warning.500" accessibilityLabel="Loading posts" />
                            <Heading color="warning.500" fontSize="lg">
                                Loading
                            </Heading>
                        </Center>
            :
            <>
            <Stack direction="row" mb="2.5" mt="1.5" space={3}>
                <Image 
                    source={{
                        uri: img
                    }} 
                    alt="Alternate Text" 
                    size="md" 
                />
                <Text fontSize="3xl">{temperature} °C</Text>
                <Stack mb="2.5" mt="1.5" direction="column" space={2}>
                    <Text fontSize="xs">Max temperature: {maxTemperature} °C</Text>
                    <Text fontSize="xs">Min temperature: {minTemperature} °C</Text>
                    <Text fontSize="xs">Pressure: {pressure}</Text>
                    <Text fontSize="xs">Humidité: {humidity}%</Text>
                </Stack>
            </Stack>
            <Center px="3">
                <Button onPress={goToHome} size="sm" colorScheme="warning">
                    Go To Home
                </Button>
            </Center>
            </>
            }
        </View>
    )
}