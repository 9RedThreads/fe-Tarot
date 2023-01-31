import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import RootNavigator from "./navigator/RootNavigator";

// Authentocation - For checking if user logged in
import AuthContextProvider from "./store/AuthProvider";

function App() {
  return(
    <AuthContextProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
     </AuthContextProvider>
  )
}

export default App;
