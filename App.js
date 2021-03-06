import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './pages/Home';
import Apropos from './pages/Apropos';
import WeatherScreen from './pages/WeatherScreen';
import { NativeBaseProvider } from "native-base";

export default function App() {

  const Stack = createNativeStackNavigator();

  return(
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" component={Home} options={{ headerStyle: {
              backgroundColor: '#F39C12'
            }, headerTitleAlign: "center", headerTintColor: '#fff' }}/>
          <Stack.Screen name="Apropos" component={Apropos} options={{ title: 'A propoos', headerStyle: {
              backgroundColor: '#F39C12'
            }, headerTitleAlign: "center", headerTintColor: '#fff'}}/>
          <Stack.Screen name="WeatherScreen" component={WeatherScreen} 
          options={({ route }) => ({
            title: route.params.item.nom, 
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: '#F39C12',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            }, 
          })}/>
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
