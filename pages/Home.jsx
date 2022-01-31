import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Box, FlatList, HStack, VStack, Text, Spacer, Center, Button, Stack } from "native-base";
import { Entypo, FontAwesome5 } from '@expo/vector-icons';

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
            <Center>
                <Box alignItems="center" width="70%" rounded="8" bg="warning.500">
                    <Stack direction="row" mb="2.5" mt="1.5" space={3}>
                        <FontAwesome5 name="cloud-sun" size={24} color="black" />
                        <Stack>
                            <Text fontSize="2xl">Weather App</Text>
                            <Text fontSize="xs">This application is designed and developed
                            dqsdfdsfds dfsf fdsfsdkjlmkùlkj kjljkl klj klj</Text>
                        </Stack>
                    </Stack>
                    
                </Box>
            </Center>
            <FlatList data={villes} renderItem={afficherChaqueElement} />
            <Center px="3">
                <Button onPress={goToApropos} size="sm" colorScheme="warning">
                    A PROPOS DE L'APPLICATION
                </Button>
            </Center>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#F39C12',
    }
  });