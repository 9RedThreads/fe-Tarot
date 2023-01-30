import { useNavigation } from "@react-navigation/native";
import { Text, View, TouchableOpacity } from "react-native";
import MyJournalScreen from "../Screens/MyJournalScreen";

type NavigateToJournalEntriesProp =
  NativeStackNavigationProp<RootStackParamList>;

const SimpleJournalCard = ({currentDaysInMonth}) => {

  const navigation = useNavigation<NavigateToJournalEntriesProp>();

  const arrOfDays = [];
  {
    for (let i = 1; i <= currentDaysInMonth; i++) {
      arrOfDays.push(i);
    }
  }

  return(arrOfDays.map((date) => {
    return(
    <TouchableOpacity key={date} onPress={() => navigation.navigate("JournalEntries")}> 
    <Text className="w-20 h-20 border m-1 p-1 justify-center bg-white" >{date}</Text>
    </TouchableOpacity>)
  }));
};

export default SimpleJournalCard;
