import { StatusBar } from 'expo-status-bar';
import { extendTheme, NativeBaseProvider } from "native-base";
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Register from './Register';
import Login from './Login';
import StartingPage from './StartingPage';
import HomePage from './HomePage';

const newColorTheme = {
  brand: {
    900: "#8287af",
    800: "#7c83db",
    700: "#b3bef6",
  },
};
const config = {
  config: {
    // Changing initialColorMode to 'dark'
    initialColorMode: "dark",
  }
}
const theme = extendTheme({ colors: newColorTheme, config });

export default function App() {
  return (

    <NativeBaseProvider theme={theme}> 
      <View style={styles.container}>
        {/* <Register/>
        <Login />
        <StartingPage /> */}
        <HomePage />
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
