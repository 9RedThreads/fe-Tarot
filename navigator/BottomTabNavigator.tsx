import React, { useLayoutEffect } from 'react';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from '@react-navigation/native';

import MainScreen from '../Screens/MainScreen';
import LearningScreen from '../Screens/LearningScreen';
import ThreeCardsReadingScreen from '../Screens/ThreeCardsReadingScreen';
import JournalEntriesScreen from '../Screens/JournalEntriesScreen';

export type BottomTabStackParamList = {
    Main:undefined;
    ThreeCardsReading: undefined;
    Journal: undefined;
    Learning: undefined;

};



const BottomTabNavigator = () => {
    
    const navigation = useNavigation();
    const BottomTab = createBottomTabNavigator<BottomTabStackParamList>();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown:false,
        })
    },[]);

    return (
      <BottomTab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: "#59C1CC",
          tabBarInactiveTintColor: "gray"
        })}
      >

      <BottomTab.Screen name="Main" component={MainScreen} />
        <BottomTab.Screen
          name="ThreeCardsReading"
          component={ThreeCardsReadingScreen}
        />
        <BottomTab.Screen name="Journal" component={JournalEntriesScreen} />
        <BottomTab.Screen name="Learning" component={LearningScreen} />
      </BottomTab.Navigator>
    );
};

export default BottomTabNavigator;