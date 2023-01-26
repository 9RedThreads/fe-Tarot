import { View, Text } from "react-native";
import { Props } from "../App";
import { journalExample } from "./JournalPreview";
import { RootStackParamList } from "../App";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type NavigateToJournalEntriesProp =
  NativeStackNavigationProp<RootStackParamList>;

const JournalPreviewCard = ({ recentJournal }: Props) => {
  const navigation = useNavigation<NavigateToJournalEntriesProp>();

  return (
    <View>
      <Text
        onPress={() => {
          navigation.navigate("JournalEntries");
        }}
      >
        Journal Preview Card from 
        {recentJournal.created_at}-{recentJournal.journalBody}
      </Text>
    </View>
  );
};

export default JournalPreviewCard;
