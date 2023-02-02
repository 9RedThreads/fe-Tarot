import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import SimpleJournalCard from "../Components/SimpleJournalCard";

const months = [
  ["January", 31],
  ["February", 28],
  ["March", 31],
  ["April",30],
  ["May",31],
  ["June",30],
  ["July", 31],
  ["August", 31],
  ["September", 30],
  ["October", 31],
  ["November", 30],
  ["December", 31]

];

const MyJournalScreen = () => {
  const date = new Date()
  const cMonth = date.getMonth()
  const [displayMonth, setDisplayMonth] = useState(cMonth)
  const [daysInMonth, setDaysInMonth] = useState([])

const changeMonth = (num: number) => {
  let a = displayMonth + num;
  if (a < 1) return setDisplayMonth(12);
  if (a > 12) return setDisplayMonth(1);
  return setDisplayMonth(a);
};

useEffect(() => {
  let allJCards: any = [];
  for (let i = 1; i < months[displayMonth - 1][1]; i++) {
    let d = (i<10)? `0${i}`: i
    let m = (displayMonth<10)? `0${displayMonth}`: displayMonth
    allJCards.push(
      <View>
        <SimpleJournalCard  key={i} day={d} month={m} />
      </View>
    );
  }
  setDaysInMonth(allJCards);
}, [displayMonth]);

  return (
    <ScrollView>
      <Text>{months[displayMonth-1][0]}</Text>
      <View className="border flex flex-row flex-wrap justify-evenly">
        <TouchableOpacity onPress={()=>changeMonth(-1)}>
          <Text className="w-10 h-10 border m-1 p-1 justify-center bg-yellow-100 rounded">
            Previous..
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>changeMonth(1)}>
          <Text className="w-10 h-10 border m-1 p-1 justify-center bg-yellow-100 rounded">
            Next..
          </Text>
        </TouchableOpacity>
        </View>
        <View className="flex flex-row flex-wrap justify-evenly m-10 gap-3" >
        {daysInMonth}
        </View>
    </ScrollView>
  );
};

export default MyJournalScreen;
