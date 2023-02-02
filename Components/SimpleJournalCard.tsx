import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View, ScrollView, TouchableOpacity, Image } from "react-native";
import MyJournalScreen from "../Screens/MyJournalScreen";
import { useEffect, useState, useContext } from "react";
import EntriesContext from "../store/entriesContext";

type NavigateToJournalEntriesProp =
  NativeStackNavigationProp<RootStackParamList>;

const SimpleJournalCard = ({day, month}) => {
  const navigation = useNavigation<NavigateToJournalEntriesProp>();
  const {entries} = useContext(EntriesContext);

  const matchingEntries: any = entries.filter((entry: any) => {
    return entry.created_at.slice(5,10) === `${month}-${day}`
  })
const cardParams = (matchingEntries.length!==0)? () => navigation.navigate("JournalEntries", {entry: matchingEntries[0]}): () => alert('No entry found')

  return (
          <View className="border border-black">
    <TouchableOpacity key={`${month}-${day}`} onPress={cardParams}>
        <Image className="border transform scale-y-75 scale-x-50 h-16 w-14" source={require('../Tarot-cards/card-img/backOfCardsTestImage.jpg')}/>
    </TouchableOpacity> 
            </View>
  );
};

export default SimpleJournalCard;
