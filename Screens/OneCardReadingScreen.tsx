import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal,
} from "react-native";
import React from "react";
import { sidsInfo } from "../Tarot-cards/sids-cards";
import axios from "axios";
import { styled } from "nativewind";

// const StyledView = styled(View)
// const StyledText = styled(Text)
// const StyledImage = styled(Image)

const OneCardReadingScreen = () => {
  // const styles = StyleSheet.create({
  //   input: {
  //     height: 40,
  //     margin: 12,
  //     borderWidth: 1,
  //     padding: 10,
  //   },
  //   images: {
  //     height: 190,
  //     width: 90,
  //     alignItems: 'center',

  //   }
  // })
  const [intention, setIntention] = React.useState("oneCard");
  const [entry, setEntry] = React.useState("");
  const [intentionPressed, setIntentionPressed] = React.useState(false);
  const [cardOne, setCardOne] = React.useState(
    sidsInfo[Math.floor(Math.random() * sidsInfo.length)]
  );
  const [imagePressed, setImagePressed] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(cardOne);
  const [isLightCardOne, setIsLightCardOne] = React.useState(
    Math.random() < 0.5
  );
  const [readingCardOne, setReadingCardOne] = React.useState("");
  const [questionToAsk, setQuestionToAsk] = React.useState(
    cardOne["Questions to Ask"][
      Math.floor(Math.random() * cardOne["Questions to Ask"].length)
    ]
  );

  const postEntry = (postBody: any) => {
    const headers = {
      "Content-Type": "application/json",
      Authorization:
        "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNpZG5leXBpbnNlbnQzQGhvdG1haWwuY28udWsiLCJ1c2VySWQiOiIxMCIsImlhdCI6MTY3NTE3NjI0MywiZXhwIjoxNjkwNzI4MjQzfQ.4vDUWe0Yt2IBUW0XS7qL4I0l1cQW6amcOLEoY0MkvWo",
    };

    axios
      .post("https://tarot-api-k1ed.onrender.com/api/entries", postBody, {
        headers: headers,
      })
      .then((response) => {
        console.log(response.data, "response.data");
        console.log(
          response.data.entries[0].tarot_card_id,
          "response.data.entries.tarot_card_id"
        );
      })
      .catch((error) => {
        console.log(error.response.data, "error.response.data");
      });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const postBody = {
      intention: intention,
      entry_body: entry,
      tarot_card_id: [
        {
          id: cardOne.name,
          isLight: isLightCardOne,
          readingStyle: readingCardOne,
        },
      ],
    };

    postEntry(postBody);
  };

  const [cardOneImage, setCardOneImage] = React.useState(
    <TouchableOpacity 
      onPress={() => {
        {
          setImagePressed(true);
          setSelectedCard(cardOne);
        }
      }}
    >
      <Image
        // style={styles.images}

        source={cardOne.image}
      />
    </TouchableOpacity>
  );

  const ShowSingleCard = () => <ScrollView>{cardOneImage}</ScrollView>;

  return (
    <ScrollView>
      <ShowSingleCard />
      <Text>{questionToAsk} </Text>

      <Text className="text-xl text-300">Please type your diary entry</Text>
      <TextInput
        placeholder="Please type your diary entry here"
        // style={styles.input}
        onChangeText={setEntry}
        value={entry}
        className="h-60 w-70 p-1 border-8  rounded-md bg-300"
      />

      {/* onPress just console logs entry but entry changes state as you type would likely need another function on onPress to post new entry     */}
      <Button title="Submit Entry" onPress={handleSubmit} />

      <Modal animationType={"slide"} transparent={false} visible={imagePressed}>
        <ScrollView>
          <Image
            // style={styles.images}
            source={cardOne.image}
          />
          <Text>
            Name : {selectedCard.name}
            Number: {selectedCard.number}
            Arcana: {selectedCard.arcana}, Suit: {selectedCard.suit}, Elemental:{" "}
            {selectedCard.Elemental}
            Description: {isLightCardOne ? selectedCard.meanings.light : null}
            Description: {!isLightCardOne ? selectedCard.meanings.shadow : null}
          </Text>

          <View>
            <Text>Submit Diary</Text>

            <TextInput
              placeholder="Please type your diary here..."
              // style={styles.input}
              onChangeText={setEntry}
              value={entry}
            />
            <Button title="Submit Entry" onPress={handleSubmit} />
          </View>
        </ScrollView>
        <Text
          onPress={() => {
            setImagePressed(!imagePressed);
          }}
        >
          {" "}
          Close Card{" "}
        </Text>
      </Modal>
    </ScrollView>
  );
};

export default OneCardReadingScreen;
