import React, { useEffect, useLayoutEffect, useContext } from "react";
import AuthContext from "../store/auth-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from '@react-navigation/native';

import MainScreen from '../Screens/MainScreen';
import LearningScreen from '../Screens/LearningScreen';
import ThreeCardsReadingScreen from '../Screens/ThreeCardsReadingScreen';
import JournalEntriesScreen from '../Screens/JournalEntriesScreen';
import { View } from 'react-native';

// Authentocation - For checking if user logged in
import { useFocusEffect } from "@react-navigation/native";

export type BottomTabStackParamList = {
    Main:undefined;
    ThreeCardsReading: undefined;
    JournalEntries: undefined;
    Learning: undefined;

};





const BottomTabNavigator = () => {
  // Authentocation start - For checking if user logged in
  const authCtx = useContext(AuthContext);
  useFocusEffect(() => {
    console.log(authCtx.isLogged);
    console.log(authCtx.isLogged);
    console.log(authCtx.production);
    console.log(authCtx.userId);
    console.log(authCtx.jwt);
    console.log(authCtx.email);
    console.log(authCtx.username);
    console.log("show bottom tab screen");
  });
  // Authentocation end - For checking if user logged in

  const navigation = useNavigation();
  const BottomTab = createBottomTabNavigator<BottomTabStackParamList>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#59C1CC",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <BottomTab.Screen name="Main" component={MainScreen} />
      <BottomTab.Screen
        name="ThreeCardsReading"
        component={ThreeCardsReadingScreen}
        listeners={() => ({
          tabPress: (e) => {
            // Prevent default action
            e.preventDefault();

            // Do something with the `navigation` object
            navigation.navigate("ThreeCardsReading"); // Here!!!!!!!!!!!!!!!!!!!!!!!!!!!!
          },
        })}
      />
      <BottomTab.Screen
        name="JournalEntries"
        component={JournalEntriesScreen}
      />
      <BottomTab.Screen name="Learning" component={LearningScreen} />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;