import React, {useState, useEffect} from "react";
import { SafeAreaView, ImageBackground, Button, Text, StyleSheet, Image, View, ScrollView} from "react-native";

import AsyncStorage from '@react-native-community/async-storage';


function AnalysisScreen(props) {

  
  const [hexagram, setHexagram] = useState()
  const [hexagramLines, setHexagramLines] = useState()
  const [question, setQuestion] = useState()

    const saveData = async(hexagram,question, hexagramLines) => {
    try {  

      var hexData = {hexagram, question, hexagramLines}
      await AsyncStorage.setItem("key1", JSON.stringify(hexData))  

      console.log("Saving hexagram to journal")

    } catch (error) {
      console.log(error)
    }
  }

  var {hexObj} = props.route.params

  const eventHandler = () => {
    setHexagram(hexObj.Hexagram)
    setQuestion(hexObj.question)
    setHexagramLines(hexObj.HexagramText) 
  }

  useEffect(() => {
    eventHandler()
  }, [])
  
  
  return (
    //pull from the hex dict to find background image
    <ImageBackground source={require('../assets/background/background.png')} style={styles.backgroundImage}>
    <SafeAreaView style={styles.container}>

    <Text style = {styles.questionTitle}> {question} </Text>
      <Image source = {require("../assets/hex/Hex01_Character.png")} style = {styles.hexChar} />

      <Text style = {styles.hexTitle}>Cast hexagram: </Text>
      <Text style = {styles.item}>{hexagram}</Text>



      <View style = {styles.container}>
        <ScrollView>
          <Text style = {styles.container}>
            {hexagramLines}
          </Text>
        </ScrollView>
      </View>

      <Button style = {styles.buttonContainer} title="Save to Journal" color = "#008080" onPress = { 
        () => (saveData(hexagram,question,hexagramLines), alert("Saved hex: " + hexagram + " to Journal"))} />

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
    marginTop: 3
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
    width: 125,
    height: 125,
    flex: 0.25,
    resizeMode: "contain",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  buttonContainer: {
    padding: 10
  }
})


export default AnalysisScreen