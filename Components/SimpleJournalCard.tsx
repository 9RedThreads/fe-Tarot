import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import MyJournalScreen from "../Screens/MyJournalScreen";
import EntriesContext from "../store/entriesContext";

type NavigateToJournalEntriesProp =
  NativeStackNavigationProp<RootStackParamList>;

const SimpleJournalCard = ({
  currentDaysInMonth,
  currentYear,
  currentMonth,
  monthAsNumber
}) => {
  const entryContext = useContext(EntriesContext);
  const navigation = useNavigation<NavigateToJournalEntriesProp>();

  const arrOfDays = [];
  {
    for (let i = 1; i <= currentDaysInMonth; i++) {
      arrOfDays.push(i);
    }
  }

  console.log(entryContext.entries, "entryContext");

  // function iterateJounalEntries(dayNum) {
  //   entryContext.entries.filter((entry) => {
  //     console.log(entry.created_at.slice(0, 4) === dayNum)
  //     return entry.created_at.slice(0, 4) === dayNum
  //  })
  // }

  // const year = date.slice(0, 4);
  // const month = date.slice(5, 7);
  // const day = date.slice(8, 10);

  return arrOfDays.map((dayNum) => {
    return (
      <TouchableOpacity
        // key={`${currentYear}-${monthAsNumber +1}-${iterateJounalEntries(dayNum)}`}
        //current key ID format is '2023-02-01' - change as needed
        onPress={() => navigation.navigate("JournalEntries")}
      >
        <Text className="w-20 h-20 border m-1 p-1 justify-center bg-white rounded">{`${dayNum}`}</Text>
      </TouchableOpacity>
    );
  });
};

export default SimpleJournalCard;
