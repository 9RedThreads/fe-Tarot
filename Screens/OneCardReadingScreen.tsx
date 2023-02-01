import { View, Text, TextInput, Button,StyleSheet, TouchableOpacity, Image, ScrollView, Modal} from 'react-native'
import React from 'react'
import { sidsInfo } from '../Tarot-cards/sids-cards'
import axios from 'axios'



  

const OneCardReadingScreen = () => {

  const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    images: {
      height: 160,
      width: 90,
      alignItems: 'center',
  
    }
  })
  const [intention, setIntention] = React.useState('');
  const [entry, setEntry] = React.useState('');
  const [intentionPressed, setIntentionPressed] = React.useState(false);
  const [cardOne, setCardOne] = React.useState(sidsInfo[Math.floor(Math.random() * sidsInfo.length)])
const [imagePressed, setImagePressed] = React.useState(false);
const [selectedCard, setSelectedCard] = React.useState(cardOne);
const [isLightCardOne, setIsLightCardOne] = React.useState(Math.random() < 0.5);

// const postEntry = (postBody: any) => {

//   const headers = {
//     'Content-Type': 'application/json',
//     'Authorization': "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNpZG5leXBpbnNlbnQzQGhvdG1haWwuY28udWsiLCJ1c2VySWQiOiIxMCIsImlhdCI6MTY3NTE3NjI0MywiZXhwIjoxNjkwNzI4MjQzfQ.4vDUWe0Yt2IBUW0XS7qL4I0l1cQW6amcOLEoY0MkvWo"
//   }

//   axios.post('https://tarot-api-k1ed.onrender.com/api/entries', postBody, {

//   headers: headers
// })
// .then((response) => {
// console.log(response.data, "response.data")
// console.log(response.data.entries[0].tarot_card_id, "response.data.entries.tarot_card_id")

// })
// .catch((error) => {

//   console.log(error.response.data, "error.response.data")
// })

// }



// const handleSubmit = (e: any) => {
//   e.preventDefault();

//   const postBody = {intention: intention, entry_body: entry, tarot_card_id: [{id: cardOne.name,  isLight: isLightCardOne, readingStyle: readingCardOne }]}

//   postEntry(postBody)
// }



const [cardOneImage, setCardOneImage ] = React.useState(
  <TouchableOpacity onPress={() =>{{setImagePressed(true); setSelectedCard(cardOne)};}}>
  <Image style = {styles.images}   source = {cardOne.image} />
  </TouchableOpacity>);


  
const ShowSingleCard = () =>(
<ScrollView>

{cardOneImage}

</ScrollView>

)

  return (
    <View>


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


 

<ShowSingleCard/> 

    <Text>Please type your diary entry</Text>
    <TextInput 
           placeholder="Please type your diary entry here"
            style={styles.input}
            onChangeText={setEntry}
            value={entry}
          />

      {/* onPress just console logs entry but entry changes state as you type would likely need another function on onPress to post new entry     */}
    <Button title="Submit Entry" onPress={ () => { console.log(entry)}}
    />

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
<Button title="Submit Entry" onPress={()=>{console.log(entry)}}
/>
</View>

                  
                  </ScrollView>
                  <Text
  onPress={() => {
    setImagePressed(!imagePressed);}
  }> Close Card </Text>

    </Modal>
    </View>


  )
}

export default OneCardReadingScreen