import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Box, FlatList, Heading, Avatar, HStack, VStack, Text, Spacer, Center, Button,
    NativeBaseProvider } from "native-base";
import { Entypo } from '@expo/vector-icons';

export default function Home({ navigation }) {

    const villes = [
        { nom: 'Fès - MA', latitude: 34.0255702, longitude: -5.0028763 },
        { nom: 'Casablanca - MA', latitude: 33.5731104, longitude: -7.5898434 },
        { nom: 'Marrakech - MA', latitude: 31.630000, longitude: -8.008889 },
        { nom: 'Tanger - MA', latitude: 35.759465, longitude: -5.833954 },
        { nom: 'Agadir - MA', latitude: 30.427755, longitude: -9.598107 }
    ];

    const goToApropos = () => {
        navigation.navigate("Apropos");
    }

    const goToWeatherScreen = item => {
        navigation.navigate("WeatherScreen", { item });
    }

    const afficherChaqueElement = ({ item }) => {
        return(
            <TouchableOpacity key={item.nom} onPress={() => goToWeatherScreen(item)}>
                <Box borderBottomWidth="1" _dark={{
                    borderColor: "gray.600"
                    }} borderColor="coolGray.200" pl="4" pr="5" py="2">
                <HStack space={3} justifyContent="space-between">
                    <Entypo name="location-pin" size={24} color="gold" />
                    <VStack>
                        <Text _dark={{
                            color: "warmGray.50"
                            }} color="coolGray.800" bold>
                            {item.nom}
                        </Text>
                        <Text color="coolGray.600" _dark={{
                            color: "warmGray.200"
                            }}>
                            Latitude: {item.latitude} - Longitude: {item.longitude}
                        </Text>
                    </VStack>
                    <Spacer />
                    <Text fontSize="xs" _dark={{
                        color: "warmGray.50"
                        }} color="coolGray.800" alignSelf="flex-start">
                        {item.timeStamp}
                    </Text>
                </HStack>
                </Box>
            </TouchableOpacity>
        );
    }

    return(
        <View>
            <Text>Weather App</Text>
            <FlatList data={villes} renderItem={afficherChaqueElement} />
            <Center px="3">
                <Button onPress={goToApropos} size="sm" colorScheme="warning">
                    A propos de l'application
                </Button>
            </Center>
        </View>
    )
}