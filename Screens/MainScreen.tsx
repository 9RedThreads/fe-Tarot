import { Component, useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, Button, Image } from "react-native";
import {
  useNavigation,
  CompositeNavigationProp,
  NavigationContainer,
} from "@react-navigation/native";
import { RootStackParamList } from "../navigator/RootNavigator";
import { BottomTabStackParamList } from "../navigator/BottomTabNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import React from "react";
import { styled } from "nativewind";
import JournalPreview from "../Components/JournalPreview";
import {getEntries} from "../utils"
type MainScreenNavigation = CompositeNavigationProp<
  BottomTabNavigationProp<BottomTabStackParamList>,
  NativeStackNavigationProp<RootStackParamList>
>;

const MainScreen = () => {
  const navigation = useNavigation<MainScreenNavigation>();

const [user, setUser] = useState("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Impjc2hlYXJvbkBob3RtYWlsLmNvLnVrIiwidXNlcklkIjoiOSIsImlhdCI6MTY3NTE2NTcyNSwiZXhwIjoxNjkwNzE3NzI1fQ.1_4GgiRnXm3RMxVG7IZ4CeSS5ypIar3FmF-HfC0FQvM")
const [entries, setEntries] = useState([])
  
  useEffect(() => {
    getEntries(user).then((entries) => {
      setEntries(entries);
    });
  }, []);



  return (
    <ScrollView>
      <Text>Tarrot App Main Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Auth")}>
        <Text>Login / SignIng ( click me)</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("OneCardReading")}>
        <Image
          onPress={() => navigation.navigate("ThreeCardsReading")}
          source={require("../Tarot-cards/card-img/backOfCardsTestImage.jpg")}
        />
      </TouchableOpacity>
      <Button
        title="3 Card Reading"
        onPress={() => navigation.navigate("ThreeCardsReading")}
      ></Button>
      <JournalPreview entries={entries} />
    </ScrollView>
  );
};

export default MainScreen;
