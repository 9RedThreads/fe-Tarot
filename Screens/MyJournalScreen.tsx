import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useState } from "react";
import SimpleJournalCard from "../Components/SimpleJournalCard";

const MyJournalScreen = ({ month }) => {
  const monthAsNumber = new Date().getMonth();
  // const currentYear = new Date().getFullYear();

  function daysInThisMonth() {
    return new Date(currentYear, monthAsNumber, 0).getDate();
  }

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const year =  new Date().getFullYear()
  const [currentYear, setCurrentYear] = useState(year.toString());
  const [currentDaysInMonth, setCurrentDaysInMonth] = useState(daysInThisMonth);
  const [currentMonth, setCurrentMonth] = useState(months[monthAsNumber]);
  console.log(currentYear)

  return (
    <ScrollView>
      <Text className="border">{`${currentMonth} ${currentYear} `}</Text>
      <View className="border flex-row flex-wrap justify-evenly">
        <SimpleJournalCard
          currentDaysInMonth={currentDaysInMonth}
          currentMonth={currentMonth}
          currentYear={currentYear}
        />
        <TouchableOpacity>
          <Text>Next...</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    //on Monday work on this so on press of next rerenders month new month, changes setsCurrentMonthetc
  );
};

export default MyJournalScreen;
