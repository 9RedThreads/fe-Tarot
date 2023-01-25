import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { Library } from "./Screens/Library";
import HomePage from "./Screens/HomePage";
import ToBeConstructed from "./Screens/ToBeConstructed";

export type RootStackParamList = {
  HomePage: undefined;
  Library: undefined;
  OneCardReading: undefined;
  ThreeCardReading: undefined;
  MyJournal: undefined;
  JournalEntry: undefined;
  Guide: undefined;
  ProfilePage: undefined;
  SignInUp: undefined;
  JournalEntries: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export type Props = NativeStackScreenProps<RootStackParamList>;

function App() {
  const [journals, setJournals] = useState([]);
  const [loggedInAs, setLoggedInAs] = useState(null);
  const [dailyCardSelected, setDailyCardSelected] = useState("m00.jpg");

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="Library" component={Library} />
        <Stack.Screen name="OneCardReading" component={ToBeConstructed} />
        <Stack.Screen name="ThreeCardReading" component={ToBeConstructed} />
        <Stack.Screen name="MyJournal" component={ToBeConstructed} />
        <Stack.Screen name="JournalEntry" component={ToBeConstructed} />
        <Stack.Screen name="Guide" component={ToBeConstructed} />
        <Stack.Screen name="ProfilePage" component={ToBeConstructed} />
        <Stack.Screen name="SignInUp" component={ToBeConstructed} />
        <Stack.Screen name="JournalEntries" component={ToBeConstructed} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
