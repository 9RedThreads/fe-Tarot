import { Button, Image, Text, View } from "react-native"
import { Props } from "../App"


const OneCardBanner = ({navigation}: Props) => {

// if you've not done it
    return(
        <Button
        title="Do Your Daily Reading"
        onPress={() => {
            navigation.navigate('OneCardReading')
        }}
    />
    )

// //if you've done it

//         return(
//             <View>
//                 <Image source={/* logic for card chosen*/}/>
//             </View>
//         )

}

export default OneCardBanner