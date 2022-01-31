import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text, Center, Image } from 'native-base';

export default function Apropos({ navigation }){

    const goToButtonHome = () => {
        navigation.navigate("Home");
    }

    return(
        <View>
            <Center px="3">
                <Image 
                    source={require('../assets/www.jpg')}
                    alt="Alternate Text" 
                    borderRadius={100}
                    resizeMode={"contain"}
                    size={300}
                />
                <Text fontSize="3xl" style={styles.text}>
                    ALTEN Boost
                </Text>
                <Text fontSize="lg">
                    Mobile Project Capstone
                </Text>
                <Text fonSize="xs">
                    This application is designed and developed
                </Text>
                <Button onPress={goToButtonHome} size="sm" colorScheme="warning">
                    REVENIR A LA PAGE PRINCIPALE
                </Button>
            </Center>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
      color: '#F39C12'
    }
  });