
import { Component, useEffect, useState, useContext } from "react";
import { ScrollView, Text, TouchableOpacity, Button, Image, View } from "react-native";

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
import JournalPreview from "../Components/JournalPreview";
import { getEntries } from "../utils";
import EntriesContext from "../store/entriesContext";

type MainScreenNavigation = CompositeNavigationProp<
  BottomTabNavigationProp<BottomTabStackParamList>,
  NativeStackNavigationProp<RootStackParamList>
>;


const MainScreen = () => {

  const navigation = useNavigation<MainScreenNavigation>();
  const entryContext = useContext(EntriesContext);

  const [user, setUser] = useState(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Impjc2hlYXJvbkBob3RtYWlsLmNvLnVrIiwidXNlcklkIjoiOSIsImlhdCI6MTY3NTMzMzExMSwiZXhwIjoxNjkwODg1MTExfQ.LgI7ZnBgucB1Bks9k3MiM0tZ9qJNllOCLciYRMz4Ejg"
  );
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    getEntries(user).then((entries) => {
      setEntries(entries)
      entryContext.setEntries(entries);
    });
  }, []);

  return (
  <ScrollView className= "bg-white bg-origin-border rounded-md border-darkGrey border-8">
    
    <TouchableOpacity onPress={() => navigation.navigate("Auth")}>
     <Text className="text-center bg-red rounded-md self-end w-20 p-3 mt-3 mr-3 font-bold ">login</Text>
     </TouchableOpacity>
     
     <Text className="text-darkGrey font-semibold text-3xl p-4 pl-6">Tarot Journal</Text>
      <TouchableOpacity
      onPress={() => navigation.navigate("OneCardReading")}
      >
        <View className= "flex flex-wrap flex-row bg-blue w-screen pb-20 h-60 ">
        <Image className= "scale-75 inline-flex p-0 m-0 -translate-y-3"
          source={require("../Tarot-cards/backCard.png")}
          />
        <View className="inline-flex p-10 pt-16 pl-14 ">
        <Text className=" text-center text-2xl font-Georgia  ">Daily</Text>
        <Text className="text-center text-2xl">Reading</Text>
        </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("ThreeCardsReading")}> 
      <Text className="text-center bg-red rounded-md w-80 self-center p-3 m-3 text-base font-bold">Three Card Reading</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("MyJournal")}> 
      <Text className="text-center bg-red rounded-md w-80 self-center p-3 text-base font-bold">My Journal</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Learning")}> 
      <Text className="text-center bg-red rounded-md w-80 self-center p-3 m-3 text-base font-bold">Learn</Text>
      </TouchableOpacity>

      {/* <JournalPreview></JournalPreview> */}

      <JournalPreview entries={entries} />

    </ScrollView>
  );
};

export default MainScreen;
