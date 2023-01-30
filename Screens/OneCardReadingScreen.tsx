import { View, Text, TextInput, Button,StyleSheet} from 'react-native'
import React from 'react'

const OneCardReadingScreen = () => {

  const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  })

  const [entry, setEntry] = React.useState('');

  return (
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
}

export default OneCardReadingScreen