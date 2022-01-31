import React, { useState } from 'react';
import { Button, StatusBar, StyleSheet, Text, View } from 'react-native';

export default function Apropos({ navigation }){

    const goToButtonHome = () => {
        navigation.navigate("Home");
    }

    return(
        <View>
            <Text>This is a propos de l'application</Text>
            <Button onPress={goToButtonHome} title="Revenir à la page principale" />
        </View>
    )
}