import React, { useState, useContext } from "react";
import { View, Button, Alert, ImageBackground, StyleSheet, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { hexData } from '../assets/dictionary/HexagramDatabase'


function ConsultScreen(props) {

  const [value, onChangeText] = useState()
  const [bg, setbgImage] = useState(require('../assets/background/Opening.jpg'))

  eventhandler = () => {

  }
  return (
    <ImageBackground source={bg} style={styles.image}>
      <View style={styles.container}>


        <Text style={{ color: "#e0ffff", fontFamily: 'futura-bold', fontSize: 25, textAlign: "center", alignContent: 'center' }}>What would you like to ask the IChing?</Text>
        <TextInput style={styles.input}
          placeholder="Enter a question here"
          placeholderTextColor="white"
          color="white"
          onChangeText={question => onChangeText(question)}
          onChangeTextColor="white"
          maxLength={45}
          value={value}
        />

        <Button title="Throw coins" color="#3cb371" onPress={() => props.navigation.navigate("CoinFlip", value)} />
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
