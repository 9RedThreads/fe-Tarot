import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import React from 'react'

const ThreeCardsReadingScreen = () => {

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
})

const [intention, setIntention] = React.useState('');
const [entry, setEntry] = React.useState('');
const [intentionPressed, setIntentionPressed] = React.useState(false);
const [readingStyle, setReadingStyle] = React.useState('');
const [readingStylePressed, setReadingStylePressed] = React.useState(false);


// States for each reading style if needed

// const [pasPresFut, setPasPresFut] = React.useState('');
// const [oppChallAd, setOpChallAd] = React.useState('');
// const [strWeakGro, setStrWeakGro] = React.useState('');

const ReadingStyle = () =>(
<View>
<Text>Please select a reading style</Text>
<Button
        title="pastPresentFuture"
        onPress={() => { setReadingStyle("pastPresentFuture"); setReadingStylePressed(true)}}
       
      />

<Button
      
        title="opportunitiesChallengesAdvice"
        onPress={() =>  {setReadingStyle("opportunitiesChallengesAdvice"); setReadingStylePressed(true)}}
       
      />

<Button
        title="strengthsWeaknessesGrowth"
        onPress={() =>  {setReadingStyle("strengthsWeaknessesGrowth"); setReadingStylePressed(true)}}
       
      />

</View>
)

const EntryForm = ()=> (

  <View>
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
</View>
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

{intentionPressed? <ReadingStyle/> :null}

{readingStylePressed? <EntryForm/> :null}





    </View>
  
    
  )
}

export default ThreeCardsReadingScreen