import { View, Text } from "react-native";
import { Props } from "../App";
import { journalExample } from "./JournalPreview";
import { RootStackParamList } from "../App";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type NavigateToJournalEntriesProp =
  NativeStackNavigationProp<RootStackParamList>;

const JournalPreviewCard = ({ entry }: Props) => {
  const navigation = useNavigation<NavigateToJournalEntriesProp>();

  return (
    <View>
      <Text className="bg-Red rounded-xl shadow-lg"
        onPress={() => {
          navigation.navigate("JournalEntries", {entry: entry});
        }}
      >
        Journal Preview Card from 
        {entry.created_at}-{entry.journalBody}
      </Text>
    </View>
  );
};

export default JournalPreviewCard;
