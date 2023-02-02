import { View, Text, Image, ScrollView, TextInput } from 'react-native'
import React from 'react'
import { sidsInfo } from '../Tarot-cards/sids-cards';
import { sidsInfo } from '../Tarot-cards/sids-cards';

const JournalEntriesScreen = ({route}) => {

  const {entry} = route.params;
  const entryCards = entry.tarot_card_id
  const cardInfo = JSON.parse(entryCards)
  let imagePosition = 1
  const entryCards = entry.tarot_card_id
  const cardInfo = JSON.parse(entryCards)
  let imagePosition = 1
  

  return (
    <ScrollView className='flex flex-col-3 flex-rows-3 gap-5' >
      <Text className='text-green-500 col-span-full'>{entry.created_at}</Text>
        {cardInfo.map((card)=> {
          return <Image className={`col-span-${imagePosition++} row-span-2 w-full`} key={card.id} source={sidsInfo[card.id].image}/>
        })}
      <TextInput 
      className=' col-span-full'
      className=' col-span-full'
            value={entry.entry_body}
          />
    </ScrollView>
    </ScrollView>
  )
}

export default JournalEntriesScreen