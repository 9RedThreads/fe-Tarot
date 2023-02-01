import { View, Text, Image, ScrollView, TextInput } from 'react-native'
import React from 'react'

const JournalEntriesScreen = ({route}) => {

  const {entry} = route.params;
  const entryCards = JSON.parse(entry.tarot_card_id)
  


  console.log(a, '<<< a')
  return (
    <View>
      <Text className='text-green-500'>{entry.created_at}</Text>

        <Image source={require('../Tarot-cards/card-img/backOfCardsTestImage.jpg')}/>

      <TextInput 
            value={entry.entry_body}
          />

    </View>
  )
}

export default JournalEntriesScreen