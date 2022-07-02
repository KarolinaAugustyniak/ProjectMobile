import React from 'react';
import { StyleSheet, Image, Text, View, TextInput, ActivityIndicator, FlatList, SafeAreaView } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import Home from './screens/Home';
import ChooseCategory from './screens/ChooseCategory';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName={"Home"}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ChooseCategory" component={ChooseCategory} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;