import { View, Text, TextInput, Button,StyleSheet, TouchableOpacity, Image, ScrollView, Modal} from 'react-native'
import React from 'react'
import { sidsInfo } from '../Tarot-cards/sids-cards'



  

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

  const [entry, setEntry] = React.useState('');
  const [cardOne, setCardOne] = React.useState(sidsInfo[Math.floor(Math.random() * sidsInfo.length)])
const [imagePressed, setImagePressed] = React.useState(false);
const [selectedCard, setSelectedCard] = React.useState(cardOne);



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
<Button title="Submit Entry" onPress={() =>{console.log(entry)}}
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