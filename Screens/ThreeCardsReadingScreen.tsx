
import { View, Text, TextInput, Button, Image, ScrollView, TouchableOpacity, Modal } from 'react-native'
import React from 'react'
import { sidsInfo } from '../Tarot-cards/sids-cards';
import axios from 'axios';


const ThreeCardsReadingScreen = () => {

// const styles = StyleSheet.create({
//   input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//   },
//   images: {
//     height: 160,
//     width: 90,
//     alignItems: 'center',

//   }
// })

const [intention, setIntention] = React.useState('');
const [entry, setEntry] = React.useState('');
const [intentionPressed, setIntentionPressed] = React.useState(false);
const [readingStyle, setReadingStyle] = React.useState('');
const [readingStylePressed, setReadingStylePressed] = React.useState(false);
const [showThreeCards, setShowThreeCards ] = React.useState(false);
const [readingCardOne, setReadingCardOne] = React.useState('');
const [readingCardTwo, setReadingCardTwo] = React.useState('');
const [readingCardThree, setReadingCardThree] = React.useState('');
const [isLightCardOne, setIsLightCardOne] = React.useState(true);
const [isLightCardTwo, setIsLightCardTwo] = React.useState(true);
const [isLightCardThree, setIsLightCardThree] = React.useState(true);
const [cardOne, setCardOne] = React.useState(sidsInfo[Math.floor(Math.random() * sidsInfo.length)])
const [cardTwo, setCardTwo] = React.useState(sidsInfo[Math.floor(Math.random() * sidsInfo.length)])
const [cardThree, setCardThree] = React.useState(sidsInfo[Math.floor(Math.random() * sidsInfo.length)])

const [imagePressed, setImagePressed] = React.useState(false);
const [selectedCard, setSelectedCard] = React.useState(cardOne);


const [cardOneImage, setCardOneImage ] = React.useState(
<TouchableOpacity onPress={() =>{{setImagePressed(true); setSelectedCard(cardOne)};}}>
<Image style = {styles.images} source = {cardOne.image} />
</TouchableOpacity>);

const [cardTwoImage, setCardTwoImage ] = React.useState(
  <TouchableOpacity onPress={() =>{{setImagePressed(true); setSelectedCard(cardTwo)};}}>
  <Image style = {styles.images} source = {cardTwo.image} />
  </TouchableOpacity>);

const [cardThreeImage, setCardThreeImage ] = React.useState(
  <TouchableOpacity onPress={() =>{{setImagePressed(true); setSelectedCard(cardThree)};}}>
  <Image style = {styles.images} source = {cardThree.image} />
  </TouchableOpacity>);

// States for each reading style if needed

// const [pasPresFut, setPasPresFut] = React.useState('');
// const [oppChallAd, setOpChallAd] = React.useState('');
// const [strWeakGro, setStrWeakGro] = React.useState('');


const postEntry = (postBody: any) => {

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNpZG5leXBpbnNlbnQzQGhvdG1haWwuY28udWsiLCJ1c2VySWQiOiIxMCIsImlhdCI6MTY3NTE3NjI0MywiZXhwIjoxNjkwNzI4MjQzfQ.4vDUWe0Yt2IBUW0XS7qL4I0l1cQW6amcOLEoY0MkvWo"
  }

  axios.post('https://tarot-api-k1ed.onrender.com/api/entries', postBody, {

  headers: headers
})
.then((response) => {
console.log(response.data, "response.data")
console.log(response.data.entries[0].tarot_card_id, "response.data.entries.tarot_card_id")

})
.catch((error) => {

  console.log(error.response.data, "error.response.data")
})

}

const handleSubmit = (e: any) => {
  e.preventDefault();

  const postBody = {intention: intention, entry_body: entry, tarot_card_id: [{id: cardOne.name,  isLight: isLightCardOne, readingStyle: readingCardOne }, {id: cardTwo.name,  isLight: isLightCardTwo, readingStyle: readingCardTwo }, {id: cardThree.name,  isLight: isLightCardThree, readingStyle: readingCardThree }]}

  postEntry(postBody)
}


const ShowingIntention = () => (
<View>
  <Text>
  Intention:  {intention}
  </Text>
</View>

)

const ReadingStyle = () =>(
<View>
<Text>Please select a reading style</Text>
<Button
        title="pastPresentFuture"
        onPress={() => { setReadingStyle("pastPresentFuture"); setReadingStylePressed(true); setIntentionPressed(false);setShowThreeCards(true); setReadingCardOne("Past"); setReadingCardTwo("Present"); setReadingCardThree("Future"); setIsLightCardOne(Math.random() < 0.5);setIsLightCardTwo(Math.random() < 0.5); setIsLightCardThree(Math.random() < 0.5) }}
       
      />

<Button
      
        title="opportunitiesChallengesAdvice"
        onPress={() =>  {setReadingStyle("opportunitiesChallengesAdvice"); setReadingStylePressed(true);setIntentionPressed(false); setShowThreeCards(true); setReadingCardOne("Opportunities"); setReadingCardTwo("Challenges"); setReadingCardThree("Advice"); setIsLightCardOne(Math.random() < 0.5);setIsLightCardTwo(Math.random() < 0.5); setIsLightCardThree(Math.random() < 0.5) }}
       
      />

<Button
        title="strengthsWeaknessesGrowth"
        onPress={() =>  {setReadingStyle("strengthsWeaknessesGrowth"); setReadingStylePressed(true); setIntentionPressed(false); setShowThreeCards(true); setReadingCardOne("Strengths"); setReadingCardTwo("Weaknesses"); setReadingCardThree("Growth"); setIsLightCardOne(Math.random() < 0.5);setIsLightCardTwo(Math.random() < 0.5); setIsLightCardThree(Math.random() < 0.5)}}
       
      />

</View>
)



const ShowThreeCard = () =>(
<ScrollView>
    {cardOneImage}
    {cardTwoImage}
    {cardThreeImage}
</ScrollView>


)
  return (

<ScrollView> 
  

      <View>
      <Text>ThreeCardsReadingScreen</Text>

      <TextInput 
       placeholder="Please type your intention here..."
        style={styles.input}
        onChangeText={setIntention}
        value={intention}
      />
<Button title="Submit Intention" onPress={ () => {setIntentionPressed(true)}}
/>
</View>

{intentionPressed? <ReadingStyle/> :null} 

{showThreeCards ? <ShowThreeCard/> :null}


{showThreeCards ? <ShowingIntention/>:null} 
<View>
      <Text>Submit Diary</Text>

      <TextInput 
       placeholder="Please type your diary here..."
        style={styles.input}
        onChangeText={setEntry}
        value={entry}
      />
<Button title="Submit Entry" onPress={handleSubmit}
/>
</View>


<Modal animationType = {"slide"}
    transparent={false}
    visible={imagePressed}
    >
<ScrollView>
  <Image style = {styles.images} source = {cardOne.image}/>
              <Text >
                   Name : {selectedCard.name}  
                    Number: {selectedCard.number} 
        Arcana: {selectedCard.arcana},
         Suit: {selectedCard.suit},
         Elemental: {selectedCard.Elemental}
      
                  </Text>

                  <View>
      <Text>Submit Diary</Text>

      <TextInput 
       placeholder="Please type your diary here..."
        style={styles.input}
        onChangeText={setEntry}
        value={entry}
      />
<Button title="Submit Entry" onPress={handleSubmit}
/>
</View>

                  
                  </ScrollView>
                  <Text
  onPress={() => {
    setImagePressed(!imagePressed);}
  }> Close Card </Text>

    </Modal>


    </ScrollView>
  
    
  )
}

export default ThreeCardsReadingScreen