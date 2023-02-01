import { Component, useContext, useLayoutEffect } from "react";
import { ScrollView, Text, TouchableOpacity, Button,View, Image,SafeAreaView } from "react-native";
import {
  useNavigation,
  CompositeNavigationProp,
  NavigationContainer,
} from "@react-navigation/native";
import authContext from "../store/auth-context";
import { RootStackParamList } from "../navigator/RootNavigator";
import { BottomTabStackParamList } from "../navigator/BottomTabNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import React from "react";
import { styled } from "nativewind";
import JournalPreview from "../Components/JournalPreview";
import { Icon } from "@rneui/themed";


type MainScreenNavigation = CompositeNavigationProp<
  BottomTabNavigationProp<BottomTabStackParamList>,
  NativeStackNavigationProp<RootStackParamList>
>;


const MainScreen = () => {
  const navigation = useNavigation<MainScreenNavigation>();
  const authCtx = useContext(authContext);
    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      });
    }, []);

  const LoginButton = () => {
    return (
      <TouchableOpacity 
        onPress={() => {
          navigation.navigate("Auth", { isLogout:false})
      }}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Icon name="login" type="SimpleLineIcons" color="black" />
        <Text>Login / SignIng </Text>
      </View>
      </TouchableOpacity>
    )
  }

    const LogoutButton = () => {
      return (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Auth", { isLogout: true });
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Icon name="logout" type="SimpleLineIcons" color="black" />
            <Text>logout </Text>
          </View>
        </TouchableOpacity>
      );
    };

  return (
    // <ScrollView>
    <SafeAreaView>
      <TouchableOpacity onPress={() => navigation.navigate("Auth")}>
        {authCtx.isLogged ? (  <LogoutButton/> ) : (<LoginButton />)}
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
      <JournalPreview></JournalPreview>
    </SafeAreaView>
    // </ScrollView>
  );
};

export default MainScreen;
