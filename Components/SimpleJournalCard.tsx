import MyJournalScreen from "../Screens/MyJournalScreen";

const SimpleJournalCard = () => {
  const arrOfDays = [];
  {
    for (let i = 1; i <= currentMonth; i++) {
      arrOfDays.push(i);
    }
  }

  return <div>SimpleJournalCard</div>;
};

export default SimpleJournalCard;
