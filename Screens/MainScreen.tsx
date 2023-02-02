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

type MainScreenNavigation = CompositeNavigationProp<
  BottomTabNavigationProp<BottomTabStackParamList>,
  NativeStackNavigationProp<RootStackParamList>
>;


const MainScreen = () => {

  const navigation = useNavigation<MainScreenNavigation>();

  return (
  <ScrollView className= "bg-white bg-origin-border p-3 rounded-md border-darkGrey border-8">
  <Text className="text-darkGrey font-semibold text-2xl ">Tarot Journal</Text>
  <TouchableOpacity onPress={() => navigation.navigate("Auth")}>
  <Text className="text-center bg-red rounded-md w-80 self-center p-3 m-3">Login / SignIn</Text>
      </TouchableOpacity>
      <TouchableOpacity
      //onPress={() => navigation.navigate("OneCardReading")}
      >
        <View className= "relative flex flex-wrap flex-row bg-blue pb-20 h-60 ">
        <Image className= "scale-75 inline-flex p-0 m-0 -translate-y-3"
          source={require("../Tarot-cards/backCard.png")}
          />
        <View className="inline-flex p-10 ">
        <Text className=" text-center text-lg font-Georgia ">Daily</Text>
        <Text className="text-center text-lg">Reading</Text>
        </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("ThreeCardsReading")}> 
      <Text className="text-center bg-red rounded-md w-80 self-center p-3 m-3">Three Card Reading</Text>
      </TouchableOpacity>
      <JournalPreview></JournalPreview>
    </ScrollView>
  );
};

export default MainScreen;
