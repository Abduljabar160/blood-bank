import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { extendTheme, NativeBaseProvider } from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Routes } from "react-router-native";
import Register from './Register';
import Login from './Login';
import StartingPage from './StartingPage';
import HomePage from './HomePage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const newColorTheme = {
  brand: {
    900: "#8287af",
    800: "#7c83db",
    700: "#b3bef6",
  },
};
// Test comment
const config = {
  config: {
    initialColorMode: "dark",
  }
}
const theme = extendTheme({ colors: newColorTheme, config });

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <View style={styles.container}>
        {/* <Register /> */}
          {/* <Login /> */}
          {/* <StartingPage /> */}
          {/* <HomePage /> */}
          <NativeRouter>
            <Routes>
              <Route exact path="/" element={<StartingPage />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<HomePage />} />
            </Routes>
          </NativeRouter>
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'primary.500',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
