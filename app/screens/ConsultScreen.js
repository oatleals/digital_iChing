import React, {useState, useContext} from "react";
import { View, Button, Alert, ImageBackground, StyleSheet, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
//import {hexData} from '../assets/dictionary/HexagramDatabase'


function ConsultScreen(props) {

  const [value, onChangeText] = useState()

  return (
    <ImageBackground source={require('../assets/background/backgroundGradient.png')} style={styles.image}>
      <View style={styles.container}>

        <Text style = {{fontFamily: 'futura-bold', fontSize: 30,textAlign: "center", alignContent: 'center'}}>What would you like to ask the I-Ching?</Text>
            <TextInput style = {styles.input}
            placeholder = "Enter a question here"

            onChangeText={question => onChangeText(question)}
            value = {value}
          />

        <Button title="Throw coins" color = "#008b8b" onPress={() => props.navigation.navigate("CoinFlip", value)} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1, 
    alignItems: "center", 
    justifyContent: "center"
  },
  buttonContainer: {
    flex: 1,
    marginTop: 20,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10
  }
});

export default ConsultScreen
