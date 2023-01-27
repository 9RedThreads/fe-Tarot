import { View, Text } from "react-native";
import { useState } from "react";
import SimpleJournalCard from "../Components/SimpleJournalCard";

const MyJournalScreen = ({ month }) => {
  function daysInThisMonth() {
    const monthAsNumber = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    return new Date(currentYear, monthAsNumber, 0).getDate();
  }
  const [currentMonth, setCurrentMonth] = useState(daysInThisMonth);

  const arrOfDays = [];
  {
    for (let i = 1; i <= currentMonth; i++) {
      arrOfDays.push(i);
    }
  }

  return (
    <View>
      <Text>Days in this month are{arrOfDays}</Text>
      <View>
        <SimpleJournalCard CurrentMonth={currentMonth} />
      </View>
    </View>
  );
};

export default MyJournalScreen;
