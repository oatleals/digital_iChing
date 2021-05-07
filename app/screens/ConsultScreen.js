import React, { useState, useContext } from "react";
import { View, Button, Alert, ImageBackground, StyleSheet, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { hexData } from '../assets/dictionary/HexagramDatabase'

import { IconButton } from "react-native-paper";

function ConsultScreen(props) {

  const [value, onChangeText] = useState()
  const [bg, setbgImage] = useState(require('../assets/background/Opening.jpg'))

  eventhandler = () => {

  }
  return (
    <ImageBackground source={bg} style={styles.image}>
      <View style={styles.container}>


        <Text style={{ color: "#e0ffff", fontFamily: 'futura-book', fontSize: 21, textAlign: "center", alignContent: 'center' }}>What would you like to ask the I Ching?</Text>
        <TextInput style={styles.input}
          placeholder="Enter a question here"
          placeholderTextColor="white"
          onChangeText={question => onChangeText(question)}
          onChangeTextColor="white"
          maxLength={100}
          value={value}
          multiline={true}
        />

        <Button title="Throw coins" color="#008b8b" onPress={() => props.navigation.navigate("CoinFlip", value)} />

        <IconButton icon="arrow-left" color="#008b8b" size={50} onPress={() => (props.navigation.navigate("Home"))} />


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
    borderColor: '#e0ffff',
    padding: 10,
    margin: 10
  }
});

export default ConsultScreen