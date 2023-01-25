
import { View, Text } from 'react-native'
import React, { useState } from 'react'
import JournalPreviewCard from './JournalPreviewCard'
import { Props } from '../App'


export type journalExample = {recentJournal: { 
    isSingleCard: boolean
    layoutType: string | null
    cardsSelected: object
    intention: string
    journalBody: string
    created_at: string
}}

const journalExample = {
    isSingleCard: true,
    layoutType: null,
    cardsSelected: [{}],
    intention: "intention",
    journalBody: "journalBody",
    created_at: "Nov 1"
}

const journalExample2 = {
    isSingleCard: true,
    layoutType: null,
    cardsSelected: [{}],
    intention: "intention",
    journalBody: "journalBody",
    created_at: "Nov 2"
}

const journalExample3 = {
    isSingleCard: true,
    layoutType: null,
    cardsSelected: [{}],
    intention: "intention",
    journalBody: "journalBody",
    created_at: "Nov 3"
}

const JournalPreview = ({navigation, route}: Props) => {
    
    const [recentJournals, setRecentJournals] = useState([journalExample, journalExample2, journalExample3])

  return (
    <View>
      <Text>Recent Journals</Text>

      <View>
      {recentJournals.map( (recentJournal) => { return(<JournalPreviewCard key={recentJournal.created_at} recentJournal={recentJournal} />)
      })}
      </View>

    </View>
  )
}

export default JournalPreview