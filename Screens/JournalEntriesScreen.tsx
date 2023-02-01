import { View, Text, Image, ScrollView, TextInput } from 'react-native'
import React from 'react'
import { sidsInfo } from '../Tarot-cards/sids-cards';

const JournalEntriesScreen = ({route}) => {

  const {entry} = route.params;
  const entryCards = entry.tarot_card_id
  const cardInfo = JSON.parse(entryCards)
  let imagePosition = 1
  

  return (
    <ScrollView className='flex flex-col-3 flex-rows-3 gap-5' >
      <Text className='text-tRed col-span-full'>{entry.created_at}</Text>
        {cardInfo.map((card)=> {
          return <Image className={`flex col-span-${imagePosition++} row-span-2`} key={card.id} source={sidsInfo[card.id].image}/>
        })}
      <TextInput 
      className=' col-span-full'
            value={entry.entry_body}
          />
    </ScrollView>
  )
}

export default JournalEntriesScreen