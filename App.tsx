import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import RootNavigator from "./navigator/RootNavigator";
import EntriesContextProvider from "./store/entries-provider";

function App() {
  return (
    <EntriesContextProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </EntriesContextProvider>
  );
}

export default App;
