import React, {useState, useEffect} from "react";
import { SafeAreaView, ImageBackground, Button, Text, StyleSheet, Image, View, ScrollView} from "react-native";
import { IconButton } from 'react-native-paper';
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
import tricolors from '../assets/trigrams/Asset_ColoredTrigrams.png' //trigram bar

function AnalysisScreen(props) {

  
  //create the hexagram text

  const [hexagram, setHexagram] = useState()
  const [hexagramLines, setHexagramLines] = useState()
  const [hexagramIMG, setHexagramIMG] = useState()
  const [hexagramJudgement, setHexagramJudgement] = useState()
  const [chinaHexagram, setChinaHexagram] = useState("1. Creativity")
  
  const [question, setQuestion] = useState()

  //background generated from the trigrams
  const [trigramBg, setTrigramBg] = useState(chien_Heaven)
  
  //generate Trigram texts and meaning
  const [LowerTriName, setLowerTriName] = useState('Chien')
  const [LowerTriMeaning, setLowerTriMeaning] = useState('heaven')
  const [UpperTriMeaning, setUpperTriMeaning] = useState('heaven')
  const [UpperTriName, setUpperTriName] = useState('Chien')

  //character png at the top
  const [hexCharacter, setHexCharacter] =  useState()

  //hooks for lines
  const [line1State, setLine1] = useState()  
  const [line2State, setLine2] = useState()
  const [line3State, setLine3] = useState()
  const [line4State, setLine4] = useState()
  const [line5State, setLine5] = useState()
  const [line6State, setLine6] = useState()

  var {hexObj} = props.route.params
  var {lineObj} = props.route.params

  const eventHandler = () => {

    console.log(hexObj)
    

    setHexagram(hexObj.hexName)
    setQuestion(hexObj.question)
    setHexagramLines(hexObj.HexagramText)
    setHexagramIMG(hexObj.HexagramIMG)
    setHexagramJudgement(hexObj.HexagramJudgment)
    setChinaHexagram(hexObj.ChinaName)

    //trigram
    setLowerTriName(hexObj.LowerTriName)
    setLowerTriMeaning(hexObj.LowerTriMeaning)
    setUpperTriName(hexObj.UpperTriName)
    setUpperTriMeaning(hexObj.UpperTriMeaning)

    //set the lines from the previous screen
    setLine1(lineObj.line1)
    setLine2(lineObj.line2)
    setLine3(lineObj.line3)
    setLine4(lineObj.line4)
    setLine5(lineObj.line5)
    setLine6(lineObj.line6)
    
    //Determine which background to use
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
    eventHandler() //Place everything on the screen before it loads
  }, [])
  

  return (

    <SafeAreaView style = {{flex: 1, justifyContent: "center", alignItems: "center", fontFamily: 'futura-regular'}}>
    <ImageBackground source = {trigramBg}  style = {styles.backgroundImage}>

      <View style = {{flex: 0.5, paddingHorizontal: 10}}>
          <View style = {{flex:1, alignItems: "flex-start"}}>
            <Text style = {styles.questionTitle}> {question} </Text>
            <Image source = {hexCharacter} style = {styles.hexChar} /> 

            <Image source = {tricolors} style = {{height: 20, width: 175, paddingBottom: 10, paddingTop: 10, paddingLeft: 10}}/>

            <Text style = {{color: "#000000",  fontFamily: 'futura-bold', fontSize: 20, paddingLeft: 5, paddingTop:10}}>{chinaHexagram + ' - ' + hexagram + '  -  ' + UpperTriMeaning}</Text>
            <Text style = {{color: "#000000", fontFamily: 'futura-bold', fontSize: 20}}> {'Above:  '+ UpperTriName + '  -  ' + UpperTriMeaning}</Text>
            <Text style = {{color: "#000000", fontFamily: 'futura-bold', fontSize: 20}}> {'Below:  '+LowerTriName +  '  -  ' + LowerTriMeaning}</Text>  
          </View>
          <View style = {{flex:1, alignItems: "flex-end", paddingRight: 10}}>    
            <Image source = {line6State} style={styles.hexLine} /> 
            <Image source = {line5State} style={styles.hexLine} />
            <Image source = {line4State} style={styles.hexLine} />
            <Image source = {line3State} style={styles.hexLine} />
            <Image source = {line2State} style={styles.hexLine} />
            <Image source = {line1State} style={styles.hexLine} />
          </View> 
      </View>

  
    <SafeAreaView style = {styles.container}>

      <View style = {{
        flex: 0.9,
        padding: 10,
        paddingBottom: 30,
        justifyContent: "center",
        alignItems: "baseline",
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
      <View style={styles.buttonContainer}>
          <IconButton icon="home" color="#008b8b" onPress={() => (props.navigation.navigate("Home"))} />
      </View>
    </SafeAreaView>
  </ImageBackground>
  </SafeAreaView>
    
  )
}
   
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
    resizeMode: "contain",
    justifyContent: "center"
  },
  hexChar: {
    paddingLeft: 5,
    paddingTop: 10,
    paddingBottom: 40,
    width: 50,
    height: 50,
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
    padding: 20,
    alignItems: "center",
    width: 100
  },

  hexLine: {
    width: 100,
    height: 18,
  }
})


export default AnalysisScreen