import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import SimpleJournalCard from "../Components/SimpleJournalCard";

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

const MyJournalScreen = ({ month }) => {
  const [monthAsNumber, setMonthAsNumber] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentDaysInMonth, setCurrentDaysInMonth] = useState(daysInThisMonth);
  const [currentMonth, setCurrentMonth] = useState(months[monthAsNumber]);
  const [viewingCurrentMonth, setViewingCurrentMonth] = useState(true);

  function daysInThisMonth() {
    return new Date(currentYear, monthAsNumber + 1, 0).getDate();
  }

  function goBackAMonth() {
    monthAsNumber > 0
      ? //note: January = 0, December = 11
        setMonthAsNumber(monthAsNumber - 1)
      : (setMonthAsNumber(monthAsNumber + 11), setCurrentYear(currentYear - 1));
  }

  function goForwardAMonth() {
    monthAsNumber < 11
      ? //note: January = 0, December = 11
        setMonthAsNumber(monthAsNumber + 1)
      : (setMonthAsNumber(monthAsNumber - 11), setCurrentYear(currentYear + 1));
  }

  function areWeOnThisMonth(monthAsNumber: number, currentYear: number) {
    monthAsNumber === new Date().getMonth() &&
    currentYear === new Date().getFullYear()
      ? setViewingCurrentMonth(true)
      : setViewingCurrentMonth(false);
  }

  useEffect(() => {
    setCurrentDaysInMonth(daysInThisMonth);
    setCurrentMonth(months[monthAsNumber]);
    areWeOnThisMonth(monthAsNumber, currentYear);
  }, [monthAsNumber]);

  return (
    <ScrollView>
      <Text className="border">{`${currentMonth} ${currentYear} `}</Text>
      <View className="border flex-row flex-wrap justify-evenly">
        <TouchableOpacity onPress={goBackAMonth}>
          <Text className="w-20 h-20 border m-1 p-1 justify-center bg-yellow-100 rounded">
            Previous..
          </Text>
        </TouchableOpacity>

        {viewingCurrentMonth === true ? (
          <Text className="w-20 h-20 border m-1 p-1 justify-center bg-white-100 rounded">
            Next..
          </Text>
        ) : (
          <TouchableOpacity onPress={goForwardAMonth}>
            <TouchableOpacity onPress={goForwardAMonth}>
              <Text className="w-20 h-20 border m-1 p-1 justify-center bg-yellow-100 rounded">
                Next..
              </Text>
            </TouchableOpacity>
          </TouchableOpacity>
        )}

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
