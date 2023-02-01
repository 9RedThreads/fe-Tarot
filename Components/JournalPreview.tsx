import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import JournalPreviewCard from "./JournalPreviewCard";
import  Props  from "../App";
import { useNavigation } from "@react-navigation/native";

export type journalExample = {
  recentJournal: {
    isSingleCard: boolean;
    layoutType: string | null;
    cardsSelected: object;
    intention: string;
    journalBody: string;
    created_at: string;
  };
};

const journalExample = {
  isSingleCard: true,
  layoutType: null,
  cardsSelected: [{}],
  intention: "intention1",
  journalBody: "Example Journal Body 1",
  created_at: "Nov 1",
};

const journalExample2 = {
  isSingleCard: true,
  layoutType: null,
  cardsSelected: [{}],
  intention: "intention2",
  journalBody: "Example Journal Body 2",
  created_at: "Nov 2",
};

const journalExample3 = {
  isSingleCard: true,
  layoutType: null,
  cardsSelected: [{}],
  intention: "intention3",
  journalBody: "Example Journal Body 3",
  created_at: "Nov 3",
};

const JournalPreview = ({ navigation, route, entries }: Props) => {
  const [recentJournals, setRecentJournals] = useState([
    journalExample,
    journalExample2,
    journalExample3,
  ]);

  useEffect(() => {
    
    let recentEntries = [];
    for (let i = 0; i >= 3; i++) {
      recentEntries.push(entries[i]);
    }
    setRecentJournals(recentEntries);
  }, [entries]);

  const date = new Date().toISOString();
  const year = date.slice(0, 4);
  const month = date.slice(5, 7);
  const day = date.slice(8, 10);


  return (
    <ScrollView className="max-h-20 flex-1 h-full">
      <Text>Recent Journals:</Text>

      <ScrollView className="">
        {entries.map((entry) => {
          return (
            <JournalPreviewCard
              key={entry.created_at}
              entry={entry}
            />
          );
        })}
      </ScrollView>
    </ScrollView>
  );
};

export default JournalPreview;
