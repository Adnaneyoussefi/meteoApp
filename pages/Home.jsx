import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
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
                    </HStack>
                </Box>
            </TouchableOpacity>
        );
    }

    return(
        <View style={styles.app}>
            <Center>
                <Box width="60%" rounded="8" style={styles.container}>
                    <HStack m="2" space={3}>
                        <FontAwesome5 name="cloud-sun" size={26} color="white" />
                        <Stack style={{ flexShrink: 1 }}>
                            <Text fontSize="2xl" bold>Weather App</Text>
                            <Text fontSize="xs">This application is designed and developed
                            dqsdfdsfds dfsf fdsfsdkjlmkùlkj kjljkl klj klj</Text>
                        </Stack>  
                    </HStack>
                </Box>
            </Center>
            <FlatList data={villes} renderItem={afficherChaqueElement} />
            <Center px="3">
                <Button onPress={goToApropos} size="sm" style={styles.container}>
                    A PROPOS DE L'APPLICATION
                </Button>
            </Center>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#F39C12',
    },
    app: {
        marginTop: '100px'        
    }
  });