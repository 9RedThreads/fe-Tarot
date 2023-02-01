import { Component } from "react";
import { ScrollView, Text, TouchableOpacity, Button, Image, View, ImageBackground } from "react-native";
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

const StyledText = styled(Text);
const StyledView = styled(View);
const StyledImage = styled(Image);


type MainScreenNavigation = CompositeNavigationProp<
  BottomTabNavigationProp<BottomTabStackParamList>,
  NativeStackNavigationProp<RootStackParamList>
>;

const MainScreen = () => {
  const navigation = useNavigation<MainScreenNavigation>();

  return (
    <ScrollView className="bg-white p-3 m-3 rounded-md bg-origin-padding border-darkGrey">
      <Text className="text-darkGrey font-{Georgia} text-lg">Tarot Journal</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Auth")}>
        <Text className="text-center bg-red rounded-md w-80 self-center p-3 m-3">Login / SignIn</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("OneCardReading")
    }
      >
        <StyledImage
        tw="self-center object-contain w-80 h-auto resizeMode-contain"
          source={require("../colourPalleteIdeas/backCard.png")}
          />
        <StyledText
        className="text-center bg-red rounded-md w-80 self-center p-3 m-3"
        >Daily Card Reading</StyledText>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("ThreeCardsReading")}
      > 
      <StyledText className="text-center bg-red rounded-md w-80 self-center p-3 m-3">
        Three Card Reading
      </StyledText>
      </TouchableOpacity>
      <JournalPreview></JournalPreview>
    </ScrollView>
  );
};

export default MainScreen;
