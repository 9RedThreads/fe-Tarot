import { View, Text, TouchableOpacity } from "react-native";
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

type MainScreenNavigation = CompositeNavigationProp<
  BottomTabNavigationProp<BottomTabStackParamList>,
  NativeStackNavigationProp<RootStackParamList>
>;
const navigation = useNavigation<MainScreenNavigation>();
const LoginButton = () => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Auth")}>
      <Text>Login / SignIn ( click me HELLOGOGOGOG)</Text>
    </TouchableOpacity>
  );
};

const MainScreen = () => {
  return (
    <View>
      <LoginButton />
      <Text>MainScreen</Text>
    </View>
  );
};

export default MainScreen;
