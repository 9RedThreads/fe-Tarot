import { View, Text } from "react-native";
import { Props } from "../App";
import { journalExample } from "./JournalPreview";
import {
  CompositeNavigationProp,
  useNavigation,
} from "@react-navigation/native";

const JournalPreviewCard = (
  recentJournal: journalExample,
  { route }: Props
) => {
  const navigation = useNavigation<JournalPreviewNavigationProp>();

  return (
    <View>
      <Text
        onPress={() => {
          navigation.navigate("OneCardReading");
        }}
      >
        Journal Preview Card
      </Text>
    </View>
  );
};

export default JournalPreviewCard;
