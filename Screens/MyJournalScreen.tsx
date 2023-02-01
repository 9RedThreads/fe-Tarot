import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useState } from "react";
import SimpleJournalCard from "../Components/SimpleJournalCard";
import { styled } from "nativewind";

const MyJournalScreen = ({ month }) => {
  const monthAsNumber = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  const StyledView = styled(View);

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
  const [currentDaysInMonth, setCurrentDaysInMonth] = useState(daysInThisMonth);
  const [currentMonth, setCurrentMonth] = useState(months[monthAsNumber]);

  return (
    <ScrollView>
      <Text className="border">{currentMonth}</Text>
      <StyledView className="border flex-row flex-wrap justify-evenly">
        <SimpleJournalCard currentDaysInMonth={currentDaysInMonth} />
        <TouchableOpacity>
          <Text>Next...</Text>
        </TouchableOpacity>
      </StyledView>
    </ScrollView>
    //on Monday work on this so on press of next rerenders month new month, changes setsCurrentMonthetc
  );
};

export default MyJournalScreen;
