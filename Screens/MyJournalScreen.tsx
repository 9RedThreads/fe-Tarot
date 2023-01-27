import { View, Text, ScrollView } from "react-native";
import { useState } from "react";
import SimpleJournalCard from "../Components/SimpleJournalCard";

const MyJournalScreen = ({ month }) => {

  const monthAsNumber = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  function daysInThisMonth() {
    return new Date(currentYear, monthAsNumber, 0).getDate();
  }
  const [currentDaysInMonth, setCurrentDaysInMonth] = useState(daysInThisMonth);

  const months = ["January","February","March","April","May","June","July",
  "August","September","October","November","December"];

  return (
    <ScrollView>
      <Text className="border">{months[monthAsNumber]}</Text>
      <View className="border flex-row flex-wrap" >
        <SimpleJournalCard currentDaysInMonth={currentDaysInMonth} />
      </View>
    </ScrollView>
  );
};

export default MyJournalScreen;
