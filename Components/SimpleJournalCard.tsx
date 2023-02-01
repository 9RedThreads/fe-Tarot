import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View, TouchableOpacity } from "react-native";
import MyJournalScreen from "../Screens/MyJournalScreen";

type NavigateToJournalEntriesProp =
  NativeStackNavigationProp<RootStackParamList>;

const SimpleJournalCard = (
  { currentDaysInMonth, currentYear, currentMonth },
 
) =>
  //erroring when sending over these props

  {
    const navigation = useNavigation<NavigateToJournalEntriesProp>();
    const testword = "spider";

    const arrOfDays = [];
    {
      for (let i = 1; i <= currentDaysInMonth; i++) {
        arrOfDays.push(i);
      }
    }

    return arrOfDays.map((dayNum) => {
      return (
        <TouchableOpacity
          key={`${dayNum}/${currentMonth}/${currentYear}`}
          //current key ID format is '31/January/2023 - change as needed
          onPress={() => navigation.navigate("JournalEntries")}
        >
          <Text className="w-20 h-20 border m-1 p-1 justify-center bg-white rounded">{`${dayNum}`}</Text>
        </TouchableOpacity>
      );
    });
  };

export default SimpleJournalCard;
