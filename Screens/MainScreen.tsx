import { View, Text, TouchableOpacity, Button } from "react-native";
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

const MainScreen = () => {
  const navigation = useNavigation<MainScreenNavigation>();

  return (
    <View>
      <Text>Tarrot App Main Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Auth")}>
        <Text>Login / SignIng ( click me)</Text>
      </TouchableOpacity>
      <Button
        title="hello"
        onPress={() => navigation.navigate("Auth")}
      ></Button>
    </View>
  );
};

export default MainScreen;
