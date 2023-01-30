import { View, Text, TouchableOpacity, StyleSheet, Modal, ScrollView } from 'react-native'
import React from 'react'

const LearningScreen = () => {

  const [useApp, setUseApp] = React.useState(false);
  const [howTarot, setHowTarot] = React.useState(false);

  return(
    <View style = { styles.container }>

<Modal
            animationType = {"slide"}
            transparent={false}
            visible={useApp}
           >
     <ScrollView>
     <Text style = { styles.text }>{`


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
                  <Text style={styles.closeText}
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
              <Text style = { styles.text }>
                  Here's how to do tarot. Blah Blah Blah etc..</Text>
                  </ScrollView>
                  <Text style={styles.closeText}
  onPress={() => {
    setHowTarot(!howTarot);}
  }> Close how to do a tarot reading </Text>

          </Modal>

       <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setUseApp(true);
            }}>
            <Text >How to use App</Text>
        </TouchableOpacity>          

        <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setHowTarot(true);
            }}>
            <Text >How to do a Tarot reading</Text>
        </TouchableOpacity>        
      </View>
    );

        }

        const styles = StyleSheet.create({
          container: {
            padding: 15,
            flex: 1,
       
          },
          button: {
            display: 'flex',
            height: 30,
            justifyContent: 'center',
            alignItems: 'center',
            width: '80%',
            backgroundColor: '#2AC062',
          },  
          text: {
            fontSize: 12,
            marginBottom: 30,
            padding: 40,
          },
          closeText: {
            fontSize: 24,
            color: '#00479e',
            textAlign: 'center',
          }
        });

export default LearningScreen