import { View, Text, Image, ScrollView, TextInput } from 'react-native'
import React from 'react'
import { sidsInfo } from '../Tarot-cards/sids-cards';


const JournalEntriesScreen = ({route}) => {

  const {entry} = route.params;
  const entryCards = entry.tarot_card_id
  const cardInfo = JSON.parse(entryCards)
  let imagePosition = 1

  return (
    <ScrollView className='flex flex-wrap flex-row' >
      <Text className=' text-green-500'>{entry.created_at}</Text>
      <View className='flex flex-wrap flex-row w-screen'>
        {cardInfo.map((card)=> {
          return <Image className={`inline-flex`} key={card.id} source={sidsInfo[card.id].image}/>
        })}
        </View>
      <TextInput 
      className=' col-span-full'
            value={entry.entry_body}
          />
    </ScrollView>

  )
}

export default JournalEntriesScreen