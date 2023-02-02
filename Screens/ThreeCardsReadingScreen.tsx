
import { View, Text, TextInput, Button, Image, ScrollView, TouchableOpacity, Modal } from 'react-native'
import React from 'react'
import { sidsInfo } from '../Tarot-cards/sids-cards';
import axios from 'axios';
import { styled } from 'nativewind';

const ThreeCardsReadingScreen = () => {


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
<TouchableOpacity className='inline-flex'  onPress={() =>{{setImagePressed(true); setSelectedCard(cardOne)};}}>
<Image className='inline-flex'  source = {cardOne.image} />
</TouchableOpacity>);

const [cardTwoImage, setCardTwoImage ] = React.useState(
  <TouchableOpacity className=' inline-flex '  onPress={() =>{{setImagePressed(true); setSelectedCard(cardTwo)};}}>
  <Image className=' inline-flex'  source = {cardTwo.image} />
  </TouchableOpacity>);

const [cardThreeImage, setCardThreeImage ] = React.useState(
  <TouchableOpacity className=' inline-flex '   onPress={() =>{{setImagePressed(true); setSelectedCard(cardThree)};}}>
  <Image className=' inline-flex '  source = {cardThree.image} />
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
  <Text className="text-xl self-center">Intention</Text>
<View className='m-3 rounded-md bg-blue'>
  <Text className='p-1 m-3 bg-white text-start rounded-md h-15' >
  {intention}
  </Text>
</View>
</View>

)

const ReadingStyle = () =>(
<View>
<Text>Please select a reading style</Text>

<TouchableOpacity onPress={() => { setReadingStyle("pastPresentFuture"); setReadingStylePressed(true); setIntentionPressed(false);setShowThreeCards(true); setReadingCardOne("Past"); setReadingCardTwo("Present"); setReadingCardThree("Future"); setIsLightCardOne(Math.random() < 0.5);setIsLightCardTwo(Math.random() < 0.5); setIsLightCardThree(Math.random() < 0.5) }}>
          <Text className="text-center bg-red rounded-md w-30 self-end  p-2 m-3 mt-0 text-sm font-semibold">
            Past Present Future 
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() =>  {setReadingStyle("opportunitiesChallengesAdvice"); setReadingStylePressed(true);setIntentionPressed(false); setShowThreeCards(true); setReadingCardOne("Opportunities"); setReadingCardTwo("Challenges"); setReadingCardThree("Advice"); setIsLightCardOne(Math.random() < 0.5);setIsLightCardTwo(Math.random() < 0.5); setIsLightCardThree(Math.random() < 0.5) }}>
          <Text className="text-center bg-red rounded-md w-30 self-end  p-2 m-3 mt-0 text-sm font-semibold">
            Opportunities Challenges Advice
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() =>  {setReadingStyle("strengthsWeaknessesGrowth"); setReadingStylePressed(true); setIntentionPressed(false); setShowThreeCards(true); setReadingCardOne("Strengths"); setReadingCardTwo("Weaknesses"); setReadingCardThree("Growth"); setIsLightCardOne(Math.random() < 0.5);setIsLightCardTwo(Math.random() < 0.5); setIsLightCardThree(Math.random() < 0.5)}}>
          <Text className="text-center bg-red rounded-md w-30 self-end  p-2 m-3 mt-0 text-sm font-semibold">
            Strengths Weaknesses Growth
          </Text>
        </TouchableOpacity>

</View>
)



const ShowThreeCard = () =>(


<View className='flex flex-wrap flex-row w-screen justify-around p-3 my-2 bg-red'>
    {cardOneImage}
    {cardTwoImage}
    {cardThreeImage}
    
</View>


)
  return (
<View className='bg-darkGrey'>


<ScrollView className='bg-white'> 
  

      <View>

      <TextInput 
       placeholder="Please type your intention here..."
        onChangeText={setIntention}
        value={intention}
        className = "bg-white border-8 border-blue text-black rounded-lg h-16 m-3 p-2"
      />

<TouchableOpacity onPress={ () => {setIntentionPressed(true)}}>
          <Text className="text-center bg-red rounded-md w-30 self-end  p-2 m-3 mt-0 text-sm font-semibold">
            Submit Intention
          </Text>
        </TouchableOpacity>

</View>

{intentionPressed? <ReadingStyle/> :null} 

{showThreeCards ? <ShowThreeCard/> :null}


{showThreeCards ? <ShowingIntention/>:null} 

<Text className="text-xl self-center  ">Journal Entry</Text>

      <ScrollView className=" m-3 rounded-md bg-blue">
        <TextInput
          placeholder="Please type your diary entry here"
          onChangeText={setEntry}
          multiline={true}
          value={entry}
          className=" p-1 m-3 bg-white text-start rounded-md h-24"
        />
        <TouchableOpacity onPress={handleSubmit}>
          <Text className="text-center bg-red rounded-md w-30 self-end  p-2 m-3 mt-0 text-sm font-semibold">
            Submit Entry
          </Text>
        </TouchableOpacity>
      </ScrollView>


      <Modal animationType={"slide"} transparent={false} visible={imagePressed}>
        <ScrollView className="bg-red">
          <Image className="self-center mt-3 " source={cardOne.image} />
          <View className=" m-3 rounded-md bg-blue">
            <View className=" p-3 m-3 bg-white rounded-md w-11/12 self-center ">
              <Text className="text-xl self-center mb-3 ">{selectedCard.name}</Text>
              <Text className=" inset-x-6 ">Number: {selectedCard.number}</Text>
              <Text className=" inset-x-6 ">Arcana: {selectedCard.arcana}</Text>
              <Text className=" inset-x-6 ">Suit: {selectedCard.suit}</Text>
              <Text className=" inset-x-6 ">Elemental: {selectedCard.Elemental}</Text>
              <Text className="mt-3">Description:</Text>
              <Text className=" inset-x-1">

         {isLightCardOne && selectedCard === cardOne? selectedCard.meanings.light: null}
       {!isLightCardOne  && selectedCard === cardOne?  selectedCard.meanings.shadow: null}
       {isLightCardTwo && selectedCard === cardTwo? selectedCard.meanings.light: null}
       {!isLightCardTwo  && selectedCard === cardTwo?  selectedCard.meanings.shadow: null}
       {isLightCardThree  && selectedCard === cardThree?  selectedCard.meanings.light: null}
       {!isLightCardThree && selectedCard === cardThree?  selectedCard.meanings.shadow + "": null}

      
                  </Text>

                  <Text className="text-xl self-center  ">Journal Entry</Text>

      <ScrollView className=" m-3 rounded-md bg-blue">
        <TextInput
          placeholder="Please type your diary entry here"
          onChangeText={setEntry}
          multiline={true}
          value={entry}
          className=" p-1 m-3 bg-white text-start rounded-md h-24"
        />
        <TouchableOpacity onPress={handleSubmit}>
          <Text className="text-center bg-red rounded-md w-30 self-end  p-2 m-3 mt-0 text-sm font-semibold">
            Submit Entry
          </Text>
        </TouchableOpacity>
      </ScrollView>

                  
      </View>
                  <Text
  onPress={() => {
    setImagePressed(!imagePressed);}
  }> Close Card </Text>

</View>
    </ScrollView>

    </Modal>
  
    </ScrollView>
  
    </View>
  )
}

export default ThreeCardsReadingScreen