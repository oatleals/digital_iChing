import React, {useState, useEffect} from "react";
import { SafeAreaView, ImageBackground, Button, Text, StyleSheet, Image, View, ScrollView} from "react-native";

import AsyncStorage from '@react-native-community/async-storage';
//import uuid from 'uuid/v4'

//trigrams
import chien_Heaven from '../assets/trigrams/chien_Heaven.jpg'
import chen_Thunder from '../assets/trigrams/chen_Thunder.jpg'
import kan_Water from '../assets/trigrams/Kan_Water.jpg'
import ken_Mountain from '../assets/trigrams/Ken_Mountain.jpg'
import kun_Earth from '../assets/trigrams/Kun_Earth.jpg'
import li_Fire from '../assets/trigrams/Li_Fire.jpg'
import sun_Wind from '../assets/trigrams/Sun_Wind.jpg'
import tui_Lake from '../assets/trigrams/Tui_Lake.jpg'

import {hexChar} from '../assets/hex/hex' //hexagram character images
import tricolors from '../assets/trigrams/Asset_ColoredTrigrams.png'

function AnalysisScreen(props) {

  
  const [hexagram, setHexagram] = useState()
  const [hexagramLines, setHexagramLines] = useState()
  const [hexagramIMG, setHexagramIMG] = useState()
  const [hexagramJudgement, setHexagramJudgement] = useState()


  const [question, setQuestion] = useState()
  const [trigramBg, setTrigramBg] = useState(chien_Heaven)
  
  const [LowerTriName, setLowerTriName] = useState('Chien')
  const [LowerTriMeaning, setLowerTriMeaning] = useState('heaven')
  const [UpperTriMeaning, setUpperTriMeaning] = useState('heaven')
  const [UpperTriName, setUpperTriName] = useState('Chien')

  const [hexCharacter, setHexCharacter] =  useState()


    const saveData = async(hexagram,question, hexagramLines) => {
    try {  
      
      let id = Math.floor(Math.random() * 1000000)
      
      let hexData = {hexagram, question, hexagramLines, id}
      let hexArray = []

      let storedData = await AsyncStorage.getItem('hexList')
      if(storedData !== null)
      {
        hexArray = JSON.parse(storedData)
      } 

      hexArray.push(hexData)

      await AsyncStorage.setItem('hexList', JSON.stringify(hexArray))

      
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
    setHexagramIMG(hexObj.HexagramIMG)
    setHexagramJudgement(hexObj.HexagramJudgment)

    //trigram
    setLowerTriName(hexObj.LowerTriName)
    setLowerTriMeaning(hexObj.LowerTriMeaning)
    setUpperTriName(hexObj.UpperTriName)
    setUpperTriMeaning(hexObj.UpperTriMeaning)

    if(hexObj.trigramBg == "chien_Heaven")
      setTrigramBg(chien_Heaven)
    else if(hexObj.trigramBg == "chen_Thunder")
      setTrigramBg(chen_Thunder)
    else if(hexObj.trigramBg == "kan_Water")
      setTrigramBg(kan_Water)
    else if(hexObj.trigramBg == "kun_Earth")
      setTrigramBg(kun_Earth)
    else if(hexObj.trigramBg == "ken_Mountain")
      setTrigramBg(ken_Mountain)
    else if(hexObj.trigramBg == "li_Fire")
      setTrigramBg(li_Fire)
    else if(hexObj.trigramBg == "sun_wind")
      setTrigramBg(sun_Wind)
    else if(hexObj.trigramBg == "tui_Lake")
      setTrigramBg(tui_Lake)
    
  
    for(var item in hexChar) { //search the hexagram dictionary
      if(hexObj.Hexagram == item){
        setHexCharacter(hexChar[item])
        
      }
    }

    console.log(hexCharacter)
  }

  useEffect(() => {
    eventHandler()
  }, [])
  
  
  return (
    //pull from the hex dict to find background image


    <ImageBackground source = {trigramBg}  style = {styles.backgroundImage}>
    <SafeAreaView style={styles.container}>

      
      <View style = {{flex: 0.4}}>
        <Text style = {styles.questionTitle}> {question} </Text>
        <Image source = {hexCharacter} style = {styles.hexChar} /> 
        <Text style = {{color: "#e0ffff"}}>{hexagram}</Text>
        <Text style = {{color: "#e0ffff"}}> {UpperTriName + UpperTriMeaning}</Text>
        <Text style = {{color: "#e0ffff"}}> {LowerTriName + LowerTriMeaning}</Text>  
      </View>


      <View style = {{
        flex: 1,
        padding: 15,
        justifyContent: "center",
        alignItems: "center",
        fontFamily: 'futura-regular'
        }}>
        <ScrollView>
        <Text style = {styles.hexTitle}>The Judgement</Text>
          <Text style = {styles.container}>
            {hexagramJudgement}
          </Text>
          
        <Text style = {styles.hexTitle}>The Image</Text>
          <Text style = {styles.container}>
            {hexagramIMG}
          </Text>

        <Text style = {styles.hexTitle}>The Lines</Text>
          <Text style = {styles.container}>
            {hexagramLines}
          </Text>
        </ScrollView>
      </View>

     
    </SafeAreaView>
  </ImageBackground>
  )
}

// <Button style = {styles.buttonContainer} title="Save to Journal" color = "#008080" onPress = { 
//  () => (saveData(hexagram,question,hexagramLines), alert("Saved hex: " + hexagram + " to Journal"))} />
   

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    fontFamily: 'futura-regular'
  },
  hexTitle: {
    fontSize: 20,
    fontFamily: 'futura-bold',
    marginBottom: 1,
    marginTop: 1,
    color: "#e0ffff"
  },
  questionTitle: {
    fontFamily: 'futura-bold',
    fontSize: 20,
    marginBottom: 15
  },
  hexText: {
    flex: 1,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    fontFamily: 'futura-regular'
  },
  item: {
    backgroundColor: '#008080',
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 10,
  },
  backgroundImage: {
    paddingBottom: 100,
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  hexChar: {
    width: 30,
    height: 30,
    resizeMode: "contain",
    justifyContent: "flex-start"
  },

  Header: {
    fontSize: 20,
    fontFamily: 'futura-bold',
    marginBottom: 1,
    marginTop: 1,
    color: "#e0ffff"
  },

  buttonContainer: {
    padding: 10
  }
})


export default AnalysisScreen