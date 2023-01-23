import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Form, FormItem } from "react-native-form-component";
import { SearchBar } from "./screens/SearchBar"



export default function App() {

  return (
  <View className="flex-1 items-center justify-center bg-black">
      <SearchBar />
    </View>
  );
}
