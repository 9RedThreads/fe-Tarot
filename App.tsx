import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import RootNavigator from "./navigator/RootNavigator";
import EntriesContextProvider from "./store/entries-provider";
import AuthContextProvider from "./store/AuthProvider";

function App() {
  return (
    <AuthContextProvider>
    <EntriesContextProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </EntriesContextProvider>
     </AuthContextProvider>
  );
}

export default App;