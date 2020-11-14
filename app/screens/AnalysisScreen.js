import React, {useState} from "react";
import { SafeAreaView, ImageBackground, Button, Text, StyleSheet, Image} from "react-native";

import AsyncStorage from '@react-native-community/async-storage';


//import HexagramDatabase from '../assets/dictionary/HexagramDatabase.txt'

const saveData = async(hexagram,question) => {
  
  try {  
    
    console.log("Saving " + hexagram +  " to journal")
    await AsyncStorage.setItem("hexKey", hexagram)
    await AsyncStorage.setItem("questionKey", question)

  } catch (error) {
    console.log(error)
  }
}


function AnalysisScreen(props) {

  const {userInput} = props.route.params
  const {hex} = props.route.params //receive the hexagram from coin flip
  var strHex = JSON.stringify(hex) //turn the object into strings
  var strUserInput = JSON.stringify(userInput)

  return (
    //pull from the hex dict to find background image
    <ImageBackground source={require('../assets/background/background.png')} style={styles.backgroundImage}>
    <SafeAreaView style={styles.container}>

    <Text style = {styles.questionTitle}> {strUserInput} </Text>
      <Image source = {require("../assets/hex/Hex01_Character.png")} style = {styles.hexChar} />

      <Text style = {styles.hexTitle}>Cast hexagram: </Text>
      <Text style = {styles.item}>{strHex}</Text>

      <Text style = {styles.hexText}>The rich, loamy Earth on the banks of the Marsh provides fertile soil for exceptional progress.
        The Superior Person is inexhaustible in his willingness to teach, and without limit in his tolerance and support of others.
        Supreme Success if you keep to your course.
        But be aware that your time is limited; your power will wane, as Summer changes to Fall.
      </Text>


    
        <Button style = {styles.buttonContainer} title="Save to Journal" color = "#008080" onPress = { 
        () => (saveData(strHex, strUserInput), alert("Saved hex: " + strHex + " to Journal"))} />

        <Button style = {styles.buttonContainer} title="Go Home" color = "#008080" onPress = {() => props.navigation.navigate("Home")} />        
    
    </SafeAreaView>
  </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  hexTitle: {
    fontSize: 25,
    marginBottom: 5,
    marginTop: 5
  },
  questionTitle: {
    fontSize: 20,
    marginBottom: 15
  },
  hexText: {
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    shadowOffset: { width: 0, height: 2 }, //experimental hehe
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  item: {
    backgroundColor: '#008080',
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 10,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  hexChar: {
    width: 150,
    height: 150,
    flex: 0.5,
    resizeMode: "contain",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  buttonContainer: {
    padding: 10
  }
})


export default AnalysisScreen