import { Button, ScrollView, Text, View } from 'react-native';
import { Props } from '../App';
import JournalPreview from '../Components/JournalPreview';
import OneCardBanner from '../Components/OneCardBanner';


const HomePage = ({navigation, route}: Props) => {
    

    return(
        <ScrollView className="flex-1 items-center justify-center bg-white">
            <Text>Tarot App</Text>

            <OneCardBanner navigation={navigation} route={route} />

            <Button
                title="Do A Three Card Reading"
                onPress={() => {
                    navigation.navigate('ThreeCardReading')
                }}
            />

            <JournalPreview navigation={navigation} route={route}/>
            

        </ScrollView>
    )
}

export default HomePage