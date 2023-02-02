import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import RootNavigator from "./navigator/RootNavigator";

function App() {
  return(
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  )
}

export default App;