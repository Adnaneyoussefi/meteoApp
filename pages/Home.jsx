import React, { useState } from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import { Button, Center } from "native-base";

export default function Home({ navigation }) {

    const villes = [
        { nom: 'Fes', latitude: 34.0255702, longitude: -5.0028763 },
        { nom: 'Casablanca', latitude: 33.5731104, longitude: -7.5898434 },
        { nom: 'Marrakech', latitude: 31.630000, longitude: -8.008889 },
        { nom: 'Tanger', latitude: 35.759465, longitude: -5.833954 },
        { nom: 'Agadir', latitude: 30.427755, longitude: -9.598107 }
    ];

    const goToApropos = () => {
        navigation.navigate("Apropos");
    }

    const goToWeatherScreen = item => {
        navigation.navigate("WeatherScreen", { item });
    }

    const afficherChaqueElement = ({ item }) => {
        return(
            <TouchableOpacity onPress={() => goToWeatherScreen(item)}>
                <Text>{item.nom}</Text>
                <Text>{item.latitude}</Text>
            </TouchableOpacity>
        );
    }

    return(
        <View>
            <Text>This is Home Screen</Text>
            <FlatList data={villes} renderItem={afficherChaqueElement} />
            <Center flex={1} px="3">
                <Button onPress={goToApropos} size="sm" colorScheme="warning">
                    A propos de l'application
                </Button>
            </Center>
        </View>
    )
}