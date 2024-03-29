import React, { useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import MainScreen from "../Screens/MainScreen";
import LearningScreen from "../Screens/LearningScreen";
import ThreeCardsReadingScreen from "../Screens/ThreeCardsReadingScreen";
import JournalEntriesScreen from "../Screens/JournalEntriesScreen";
import { View } from "react-native";
import MyJournalScreen from "../Screens/MyJournalScreen";

export type BottomTabStackParamList = {
  Main: undefined;
  ThreeCardsReading: undefined;
  MyJournal: undefined;
  Learning: undefined;
};

const BottomTabNavigator = () => {
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
        tabBarActiveTintColor: "#A74A28",
        tabBarInactiveTintColor: "darkGrey",
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
      <BottomTab.Screen name="MyJournal" component={MyJournalScreen} />
      <BottomTab.Screen name="Learning" component={LearningScreen} />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
