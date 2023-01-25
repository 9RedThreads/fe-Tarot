import { View, Text } from 'react-native'
import { Props } from '../App'
import { journalExample } from './JournalPreview'

const JournalPreviewCard = (recentJournal: journalExample, {navigation, route}: Props) => {
  return (
    <View>
      <Text onPress={() => {
        navigation.navigate('OneCardReading')
    }}>Journal Preview Card</Text>
    </View>
  )
}

export default JournalPreviewCard