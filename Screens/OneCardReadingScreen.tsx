import { View, Text, TextInput, Button, TouchableOpacity, Image, ScrollView, Modal} from 'react-native'
import React from 'react'
import { sidsInfo } from '../Tarot-cards/sids-cards'
import axios from 'axios'


const OneCardReadingScreen = () => {

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
  const [intention, setIntention] = React.useState('oneCard');
  const [entry, setEntry] = React.useState('');
  const [intentionPressed, setIntentionPressed] = React.useState(false);
  const [cardOne, setCardOne] = React.useState(sidsInfo[Math.floor(Math.random() * sidsInfo.length)])
const [imagePressed, setImagePressed] = React.useState(false);
const [selectedCard, setSelectedCard] = React.useState(cardOne);
const [isLightCardOne, setIsLightCardOne] = React.useState(Math.random() < 0.5);
const [readingCardOne, setReadingCardOne] = React.useState('');
const [questionToAsk, setQuestionToAsk] = React.useState(cardOne["Questions to Ask"][Math.floor(Math.random() * cardOne["Questions to Ask"].length)]);

const meaningsLight = selectedCard.meanings.light

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

  const postBody = {intention: intention, entry_body: entry, tarot_card_id: [{id: cardOne.name,  isLight: isLightCardOne, readingStyle: readingCardOne }]}

  postEntry(postBody)
}



const [cardOneImage, setCardOneImage ] = React.useState(

  <View className='w-screen bg-red mt-5'>
  <TouchableOpacity onPress={() =>{{setImagePressed(true); setSelectedCard(cardOne)};}}>
  <Image className=' self-center m-4'   source = {cardOne.image} />
  </TouchableOpacity>
  </View>);
  
const ShowSingleCard = () =>(
<ScrollView>

{cardOneImage}

</ScrollView>

)

  return (
    <ScrollView className='bg-white'>
      
      <ShowSingleCard/> 
      
      <Text className=' text-base text-center font-semibold p-3 pb-0 pt-5 rounded-md bg-white border-blue border-[12px] m-4'  >{questionToAsk} </Text>

    <Text className='text-xl self-center  '>Journal Entry</Text>

    <ScrollView className=' m-3 rounded-md bg-blue'>
    <TextInput 
           placeholder="Please type your diary entry here"
            onChangeText={setEntry}
            multiline={true}
            value={entry}
            className=' p-1 m-3 bg-white text-start rounded-md h-24'
          />
    <TouchableOpacity onPress={handleSubmit}> 
      <Text className="text-center bg-red rounded-md w-30 self-end  p-2 m-3 mt-0 text-sm font-semibold">Submit Entry</Text>
      </TouchableOpacity>
    </ScrollView>

      {/* onPress just console logs entry but entry changes state as you type would likely need another function on onPress to post new entry     */}
      
     
    
<Modal animationType = {"slide"}
    transparent={false}
    visible={imagePressed}
    >
<ScrollView className='bg-white' >
  <Image className='self-center shadow-xl' source = {cardOne.image}/>
  <View className=' m-3 rounded-md bg-blue'>
  <View className=" p-3 m-3 bg-white rounded-md w-11/12 self-center " >
              <Text className='text-xl self-center ' >
                   {selectedCard.name}  

              </Text>
              <Text className=' inset-x-6 '>
                    Number: {selectedCard.number} 

              </Text>
                    <Text className=' inset-x-6 '>
        Arcana: {selectedCard.arcana}
        </Text>
                    <Text className=' inset-x-6 '>
         Suit: {selectedCard.suit}
         </Text>
                    <Text className=' inset-x-6 '>
         Elemental: {selectedCard.Elemental}
         </Text>
                    <Text className='mt-3'>
                    Description: 
                    </Text>
                    <View className=' inset-x-3'>

        {isLightCardOne? meaningsLight.map( (meaning) => {
  return(
    <Text key={meaning} className=''>
      {meaning}
    </Text>
  )
}): null}
       {!isLightCardOne? `${selectedCard.meanings.shadow}`: null}
      
                  </View>

                  </View>
                  </View>
                  <View>
    
                  <Text className='text-xl self-center  '>Journal Entry</Text>

<ScrollView className=' m-3 rounded-md bg-blue'>
    <TextInput 
           placeholder="Please type your diary entry here"
            onChangeText={setEntry}
            multiline={true}
            value={entry}
            className=' p-1 m-3 bg-white text-start rounded-md h-24'
          />
    <TouchableOpacity onPress={handleSubmit}> 
      <Text className="text-center bg-red rounded-md w-30 self-end  p-2 m-3 mt-0 text-sm font-semibold">Submit Entry</Text>
      </TouchableOpacity>
    </ScrollView>
</View>

                  
                  </ScrollView>
                  <Text className="text-center bg-red rounded-md w-30 self-end  p-0.5 m-3 mt-0 text-sm font-semibold"
  onPress={() => {
    setImagePressed(!imagePressed);}
  }> Close Card </Text>

    </Modal>
    </ScrollView>


  )
}

export default OneCardReadingScreen