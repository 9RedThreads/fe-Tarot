import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useState } from "react";
import SimpleJournalCard from "../Components/SimpleJournalCard";

const MyJournalScreen = ({ month }) => {
  const [monthAsNumber, setMonthAsNumber] = useState(new Date().getMonth());
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

  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentDaysInMonth, setCurrentDaysInMonth] = useState(daysInThisMonth);
  const [currentMonth, setCurrentMonth] = useState(months[monthAsNumber]);

  function rollMonthBack() {
    monthAsNumber > 0
      //note: January = 0, December = 11
      ? (setMonthAsNumber(monthAsNumber - 1),
        setCurrentDaysInMonth(daysInThisMonth),
        setCurrentMonth(months[monthAsNumber]))
      : (setMonthAsNumber(monthAsNumber + 11),
      setCurrentYear(currentYear - 1), setCurrentMonth(months[monthAsNumber]));

    console.log(monthAsNumber);
    console.log(currentMonth);
    console.log(currentYear);
  }

  return (
    <ScrollView>
      <Text className="border">{`${currentMonth} ${currentYear} `}</Text>
      <View className="border flex-row flex-wrap justify-evenly">
        <TouchableOpacity onPress={() => rollMonthBack()}>
          <Text className="w-20 h-20 border m-1 p-1 justify-center bg-yellow-100 rounded">
            Previous..
          </Text>
        </TouchableOpacity>
        <SimpleJournalCard
          currentDaysInMonth={currentDaysInMonth}
          currentMonth={currentMonth}
          currentYear={currentYear}
        />
      </View>
    </ScrollView>
  );
};

export default MyJournalScreen;
