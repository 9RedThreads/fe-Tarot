import { NavigationContainer } from "@react-navigation/native";
import { withExpoSnack } from "nativewind";
import React from "react";
import RootNavigator from "./navigator/RootNavigator";

function App() {
  return(
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  )
}

export default withExpoSnack(App);
