import React, { useState, useEffect, useRef } from "react";
import {  } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../views/screens/SplashScreen";
import LoginScreen from "../views/screens/LoginScreen";
import ButtonScreen from "../views/screens/ButtonScreen";
import SignupScreen1 from "../views/screens/SignupScreens/SignupScreen1";
import SignupScreen2 from "../views/screens/SignupScreens/SignupScreen2";
import SignupScreen3 from "../views/screens/SignupScreens/SignupScreen3";
import SignupScreen4 from "../views/screens/SignupScreens/SignupScreen4";
import SignupScreen5 from "../views/screens/SignupScreens/SignupScreen5";


const Stack = createNativeStackNavigator();
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";

const Navigator = () => {
  
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen name="SplashScreen" component={SplashScreen}  options={{ headerShown: false }}/>
      <Stack.Screen name="LoginScreen" component={LoginScreen}    options={{ headerShown: false }}/>
      <Stack.Screen name="ButtonScreen" component={ButtonScreen}  options={{ headerShown: false }}/>
      <Stack.Screen name="SignupScreen1" component={SignupScreen1}  options={{ headerShown: false }}/>
      <Stack.Screen name="SignupScreen2" component={SignupScreen2}  options={{ headerShown: false }}/>
      <Stack.Screen name="SignupScreen3" component={SignupScreen3}  options={{ headerShown: false }}/>
      <Stack.Screen name="SignupScreen4" component={SignupScreen4}  options={{ headerShown: false }}/>
      <Stack.Screen name="SignupScreen5" component={SignupScreen5}  options={{ headerShown: false }}/>
    </Stack.Navigator>
      </NavigationContainer>
  );
};

export default Navigator;

