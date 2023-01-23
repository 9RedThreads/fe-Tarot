import { useState } from 'react';
import { Text, View } from 'react-native';
import { Form, FormItem } from 'react-native-form-component';


export const SearchBar = () => {

    const [email, setEmail] = useState('')

    const handleButtonPress = () => {
        console.log("someone pressed a button")
    }

    function validation(input: String){
        if(!input.includes("@")){
            return{
                status: false,
                message: "Please use a valid email address"
            }
        }
        else return{
            status: true
        }
    }

    return(
        <View>
        <Text> Search for something: </Text>
        <Form onButtonPress={handleButtonPress}>
            <FormItem 
            label='email'
            isRequired
            value={email}
            onChangeText={(text) => setEmail(text) }
            />
        </Form>
        </View>
    )
}