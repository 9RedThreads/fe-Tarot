import { View, Text, TouchableOpacity, Modal, ScrollView, Image, FlatList } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios';
import { sidsInfo } from '../Tarot-cards/sids-cards';



const LearningScreen = () => {


  const [useApp, setUseApp] = React.useState(false);
  const [howTarot, setHowTarot] = React.useState(false);
  const [imagePressed, setImagePressed] = React.useState(false);
  const [selectedCard, setSelectedCard]: any = React.useState("");
  const [arcanas, setAcana] = React.useState("");
  const [data, setData] = React.useState(sidsInfo);


  return(
    <ScrollView >
 

<Modal
            animationType = {"slide"}
            transparent={false}
            visible={useApp}
           >
     <ScrollView>
     <Text >{`


Our app is a space for you to get your tarot readings and to reflect on those readings. 

Single card reading

To make a single card reading please navigate to the home page using the navigation bar below. Once on the home page select one card reading. Once there you may set an intention and select the card to find out more information on the card. You will also be able to write your journal entry here.

Three card reading

You can make a three card reading in two ways. One way is to click on the three card reading page using the navigation bar below. Another way to make a three card reading is to navigate to the home page using the navigation bar below. Once on the home page you may select three card reading. Once there you may set an intention, the style of reading you would like and select a card to find out more information on the card. You will also be able to write your journal entry here.

Previous readings

First navigate to the Journal Entries page using the navigation bar below. This will show you a calender of previous reading. Select the day of the reading, and if there were multiple readings that day, please choose a reading from the list provided. This will show you your reading along with your journal entry.

Card info

Select the “Learning button” bellow. Here you will find a list of all the tarot cards where you may select each card and find out more information on the card. You may also use the filter at the top to narrow down the type of cards you’d like to see. 
`}</Text >

          
</ScrollView>
                  <Text className="text-center bg-red rounded-md w-30 self-end  p-0.5 m-3 mt-0 text-sm font-semibold"
  onPress={() => {
    setUseApp(!useApp);}
  }> Close how to use app </Text>

          </Modal>

          <Modal
            animationType = {"slide"}
            transparent={false}
            visible={howTarot}
           >
     <ScrollView>
              <Text >
              How to do Tarot

              What is Tarot?

              The history of Tarot is complex and much of it is likely unrecorded given its history being one of mysticism and the occult - as well as connections to the Romani people (being diverse themselves, of nomadic and oral traditions, and experiencing much prejudice means the written histories are lacking).

              This app uses the ‘Rider-Waite’ deck created in 1909, perhaps the most famous and widely used deck of tarot cards amongst English speakers (drawn by Pamela Colman-Smith).

              The 78 cards of the tarot deck are divided into two types: the major and minor arcana. The major arcana is 22 cards which together represent life: its various stages, events, and archetypes. The minor arcana are the remaining 56 cards, which take the more familiar structure of four suits - Wands, Cups, Swords, and Pentacles - containing cards from Ace to King. 

              Each card of the tarot has its own meaning, when they appear in different spreads and in response to different questions and the ‘querent’ (the person asking the cards for guidance) these meanings can then be interpreted in more detail - this is a tarot reading. These interpretations then usually aid the querent in reflecting on their situation or give them guidance - or even warnings - for the future. 


              Is Tarot fortune telling?

              For some, tarot is a form of fortune telling, others class it as ‘mysticism’ or ‘occult’, whilst still others look at it from a more psychological or therapeutic perspective as a method of exploring the self.

              This app is agnostic to what tarot exactly is and what forces may or may not lie behind it. However, the app was designed with the last of those perspectives in mind. We see tarot as a useful mode of communicating with the self and questioning assumptions, hence why we provide the journaling space. We believe it’s important to consider what’s going on in your life from a new perspective and that tarot can help you do just that!

              What do the different suits mean?

              Each suit is aligned with one of the four elements (air, water, fire and earth) and speaks to an aspect of human life.

              Wands (Element: Fire)

              Wands cards speak to motivation, creativity, action, passion and energy. They often appear regarding topics of inspiration and life purpose.


              Cups (Element: Water)

              Cups is the suit of emotion (particularly love) as well as intuition. As with wands it also speaks to creativity. Cups often appear in readings regarding relationships and emotional connections - these cards encourage you to consider yourself as a relational and social being.

              Swords (Element: Air )

              Swords relate to intellect and reason, as well as how these manifest in thoughts, words and actions. In readings they often appear in relation to communication and decisions.


              Pentacles (Element: Earth)

              Pentacles speak to the material world, possessions and of course money. They most often appear in readings related to finance and work. 


              Will this app give me a reading? 

              Not exactly. This app is more of a virtual deck of cards with the meanings of each card conveniently attached! The reading - i.e. interpretation - comes from you. That’s why we have provided the journal space for each spread, so you can record your reflections on how your experiences, your question or intention, and the card meanings all weave together.


              What is a spread? 

              A spread is simply the way in which the cards are laid out, this app offers a single card reading and three variations of a three-card spread. A spread simply helps ascertain meaning from the cards. These spreads can become much more complicated than the ones offered in our app - with many more cards used.



              How do I interpret my daily single-card reading?

              This reading is like a quick check-in - the card is aimed towards focussing you on something important that needs considering or that you need to know. Each card will come with a question for you to reflect on, but also make sure to pay attention to the meaning of the card itself.
              If you’re finding it difficult to understand what your single card reading might mean, you can then do a three card reading to continue exploring.


              What is ‘setting an intention’? 

              For three-card readings there’s the option to ‘set an intention’ for the reading - this simply means thinking of something in advance that you are looking to reflect or get guidance on. This is often phrased as a question, but can also be a simple statement of focus. 

              From a more mystical perspective, this energy guides and connects you with the cards, whilst for those who are less mystically inclined it can be more meditative and help focus your attention for an interpretation once the cards have been dealt.
                  </Text>
                  </ScrollView>
                  <Text className="text-center bg-red rounded-md w-30 self-end  p-0.5 m-3 mt-0 text-sm font-semibold" 
  onPress={() => {
    setHowTarot(!howTarot);}
  }> Close how to do a tarot reading </Text>

          </Modal>

       <TouchableOpacity           
            onPress={() => {
              setUseApp(true);
            }}>
            <Text  className="text-left bg-red rounded-md w-30  p-1 m-1 mt-0 text-white text-sm font-semibold">How to use App</Text>
        </TouchableOpacity>          

        <TouchableOpacity
            onPress={() => {
              setHowTarot(true);
            }}>
            <Text className="text-left bg-red rounded-md w-30  p-1 m-1 mt-0 text-white text-sm font-semibold" >How to do a Tarot reading</Text>
        </TouchableOpacity>   


        <TouchableOpacity           
            onPress={() => {{
              setAcana("Minor Arcana");
            }; setData(sidsInfo.filter(indCard => indCard.arcana === "Minor Arcana"))}}>
            <Text className="text-center bg-red rounded-md w-30 text-white self-end  p-1 m-1 mt-0 text-sm font-semibold" >Minor</Text>
        </TouchableOpacity>   

        <TouchableOpacity
            onPress={() => {{
              setAcana("Major Arcana");
            }; setData(sidsInfo.filter(indCard => indCard.arcana === "Major Arcana"))}}>
            <Text className="text-center bg-red rounded-md w-30 text-white self-end  p-1 m-1 mt-0 text-sm font-semibold">Major</Text>
        </TouchableOpacity>   

        <TouchableOpacity
            onPress={() => {{
              setAcana("");
            }; setData(sidsInfo)}}>
            <Text className="text-center bg-red rounded-md w-30 text-white self-end  p-1 m-1 mt-0 text-sm font-semibold"  >Clear</Text>
        </TouchableOpacity>  

      
        <FlatList
        data={data
        }
        renderItem={({item}) => {
       
        return  <TouchableOpacity onPress={() =>{{setImagePressed(true); setSelectedCard(item)}}}>
          <Image source = {item.image}/>

          
          </TouchableOpacity>
         
       }}
      />

<Modal animationType = {"slide"}
    transparent={false}
    visible={imagePressed}
    >
<ScrollView>
  <Image source = {selectedCard.image}/>
              <Text>
                   Name : {selectedCard.name}  
                    Number: {selectedCard.number} 
        Arcana: {selectedCard.arcana},
         Suit: {selectedCard.suit},
         Elemental: {selectedCard.Elemental}
        


                  </Text>
                  </ScrollView>
                  <Text className="text-center bg-red rounded-md w-30 self-end  p-0.5 m-3 mt-0 text-sm font-semibold"
  onPress={() => {
    setImagePressed(!imagePressed);}
  }> Close Card </Text>

    </Modal>
   
      </ScrollView>
    );

   

        }

        // const styles = StyleSheet.create({
        //   container: {
        //     padding: 10,
        //     flexWrap: 'nowrap',
            
            
       

        //   },
        //   button: {
        //     display: 'flex',
        //     height: 30,
        //     justifyContent: 'center',
        //     alignItems: 'center',
        //     width: '80%',
        //     backgroundColor: '#2AC062',
        //   },  
        //   text: {
        //     fontSize: 14,
        //     padding: 10,
        //   },
        //   closeText: {
        //     fontSize: 24,
        //     color: '#00479e',
        //     textAlign: 'center',
        //   },
        //   images: {
        //     height: 160,
        //     width: 90,
        //     alignItems: 'center',
         
          
        //   },
        //   button2:{
        //     display: 'flex',
        //     height: 30,
        //     justifyContent: 'center',
        //     alignItems: 'center',
        //     width: '30%',
        //     backgroundColor: '#ADD8E6',
        //   }

  
export default LearningScreen