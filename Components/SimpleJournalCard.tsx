import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View, ScrollView, TouchableOpacity, Image } from "react-native";
import MyJournalScreen from "../Screens/MyJournalScreen";
import { useContext } from "react";
import EntriesContext from "../store/entriesContext";
import { sidsInfo } from '../Tarot-cards/sids-cards';

type NavigateToJournalEntriesProp =
  NativeStackNavigationProp<RootStackParamList>;

const SimpleJournalCard = ({day, month}) => {
  const navigation = useNavigation<NavigateToJournalEntriesProp>();
  const {entries} = useContext(EntriesContext);

  const matchingEntries: any = entries.filter((entry: any) => {
    return entry.created_at.slice(5,10) === `${month}-${day}`
  })

const cardInfo = (matchingEntries.length!==0)? JSON.parse(matchingEntries[0].tarot_card_id): {id: 0}

const cardParams = (cardInfo.id!==0)? () => navigation.navigate("JournalEntries", {entry: matchingEntries[0]}): () => alert('No entry found')
const cardImg = (cardInfo.id!==0)?sidsInfo[cardInfo[0].id].image: require('../Tarot-cards/backCard.png')
  return (
          <View>
    <TouchableOpacity key={`${month}-${day}`} onPress={cardParams}>
        <Image className="transform scale-y-40 scale-x-30 h-16 w-14" source={cardImg}/>
    </TouchableOpacity> 
            </View>
  );
};

export default SimpleJournalCard;
