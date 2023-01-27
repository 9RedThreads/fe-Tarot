import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native'
import React from 'react'

const LearningScreen = () => {

  const [useApp, setUseApp] = React.useState(false);
  const [howTarot, setHowTarot] = React.useState(false);


  const styles = StyleSheet.create({
    container: {
      padding: 15,
      flex: 1,
 
    },
    button: {
      display: 'flex',
      height: 30,
      justifyContent: 'center',
      alignItems: 'center',
      width: '80%',
      backgroundColor: '#2AC062',
    },  
    text: {
      fontSize: 24,
      marginBottom: 30,
      padding: 40,
    },
    closeText: {
      fontSize: 24,
      color: '#00479e',
      textAlign: 'center',
    }
  });

  return(
    <View style = { styles.container }>

<Modal
            animationType = {"slide"}
            transparent={false}
            visible={useApp}
           >
     
              <Text style = { styles.text }>
                  Here's how to use our app. Blah Blah Blah etc..</Text>

                  <Text style={styles.closeText}
  onPress={() => {
    setUseApp(!useApp);}
  }> Close how to use app </Text>

          </Modal>

          <Modal
            animationType = {"slide"}
            transparent={false}
            visible={howTarot}
           >
     
              <Text style = { styles.text }>
                  Here's how to do tarot. Blah Blah Blah etc..</Text>

                  <Text style={styles.closeText}
  onPress={() => {
    setHowTarot(!howTarot);}
  }> Close how to do a tarot reading </Text>

          </Modal>

       <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setUseApp(true);
            }}>
            <Text >How to use App</Text>
        </TouchableOpacity>          

        <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setHowTarot(true);
            }}>
            <Text >How to do a Tarot reading</Text>
        </TouchableOpacity>        
      </View>
    );

        }


export default LearningScreen