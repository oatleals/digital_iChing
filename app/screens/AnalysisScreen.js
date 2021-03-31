import React, { useState, useEffect } from "react";
import { SafeAreaView, ImageBackground, Button, Text, StyleSheet, Image, View, ScrollView } from "react-native";

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

import { hexChar } from '../assets/hex/hex' //hexagram character images
import tricolors from '../assets/trigrams/Asset_ColoredTrigrams.png' //trigram bar
import triHexRow from '../assets/trigrams/Bottom_hex_row.jpg' //trigram bar

import Yang from '../assets/trigrams/Yang_Nine_Line.png' //9
import Yin from '../assets/trigrams/Yin_Six_Line.png' //6


function AnalysisScreen(props) {


  //create the hexagram text

  const [hexagram, setHexagram] = useState()
  const [hexagramLines, setHexagramLines] = useState()
  const [hexagramIMG, setHexagramIMG] = useState()
  const [hexagramJudgement, setHexagramJudgement] = useState()
  const [chinaHexagram, setChinaHexagram] = useState("1. Creativity")

  const [question, setQuestion] = useState()


  //generate Trigram texts and meaning
  const [LowerTriName, setLowerTriName] = useState('Chien')
  const [LowerTriMeaning, setLowerTriMeaning] = useState('heaven')
  const [UpperTriMeaning, setUpperTriMeaning] = useState('heaven')
  const [UpperTriName, setUpperTriName] = useState('Chien')
  //background generated from the trigrams
  const [trigramBg, setTrigramBg] = useState(chien_Heaven)



  //character png at the top
  const [hexCharacter, setHexCharacter] = useState()

  //hooks for lines
  const [line1State, setLine1] = useState()
  const [line2State, setLine2] = useState()
  const [line3State, setLine3] = useState()
  const [line4State, setLine4] = useState()
  const [line5State, setLine5] = useState()
  const [line6State, setLine6] = useState()

  const outcomes = [Yin, Yang]

  /*const saveData = async (hexagram, question, hexagramLines) => {
    try {

      let id = Math.floor(Math.random() * 1000000)

      let hexData = { hexagram, question, hexagramLines, id }
      let hexArray = []

      let storedData = await AsyncStorage.getItem('hexList')
      if (storedData !== null) {
        hexArray = JSON.parse(storedData)
      }

      hexArray.push(hexData)

      await AsyncStorage.setItem('hexList', JSON.stringify(hexArray))


      console.log("Saving hexagram to journal")

    } catch (error) {
      console.log(error)
    }
  }
  */

  var { hexObj } = props.route.params
  var { lineObj } = props.route.params

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

    setLine1(lineObj.line1)
    setLine2(lineObj.line2)
    setLine3(lineObj.line3)
    setLine4(lineObj.line4)
    setLine5(lineObj.line5)
    setLine6(lineObj.line6)

    if (hexObj.trigramBg == "chien_Heaven")
      setTrigramBg(chien_Heaven)
    else if (hexObj.trigramBg == "chen_Thunder")
      setTrigramBg(chen_Thunder)
    else if (hexObj.trigramBg == "kan_Water")
      setTrigramBg(kan_Water)
    else if (hexObj.trigramBg == "kun_Earth")
      setTrigramBg(kun_Earth)
    else if (hexObj.trigramBg == "ken_Mountain")
      setTrigramBg(ken_Mountain)
    else if (hexObj.trigramBg == "li_Fire")
      setTrigramBg(li_Fire)
    else if (hexObj.trigramBg == "sun_wind")
      setTrigramBg(sun_Wind)
    else if (hexObj.trigramBg == "tui_Lake")
      setTrigramBg(tui_Lake)


    for (var item in hexChar) { //search the hexagram dictionary
      if (hexObj.Hexagram == item) {
        setHexCharacter(hexChar[item])

      }
    }

    console.log(hexCharacter)
  }

  useEffect(() => {
    eventHandler()
  }, [])


  return (

    <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center", fontFamily: 'futura-regular' }}>
      <ImageBackground source={trigramBg} style={styles.backgroundImage}>

        <View style={{ flex: 0.5, paddingHorizontal: 20 }}>
          <View style={{ flex: 1, alignItems: "flex-start" }}>
            <Text style={styles.questionTitle}> {question} </Text>
            <Image source={hexCharacter} style={styles.hexChar} />

            <Image source={tricolors} style={{ height: 20, width: 390, paddingBottom: 10, paddingTop: 15 }} />

            <Text style={{ color: "#000000", fontFamily: 'futura-med', fontSize: 20, paddingLeft: 3, paddingTop: 10 }}>{chinaHexagram + ' - ' + hexagram + '  -  ' + UpperTriMeaning}</Text>
            <Text style={{ color: "#000000", fontFamily: 'futura-med', fontSize: 20 }}> {'Above:  ' + UpperTriName + '  -  ' + UpperTriMeaning}</Text>
            <Text style={{ color: "#000000", fontFamily: 'futura-med', fontSize: 20 }}> {'Below:  ' + LowerTriName + '  -  ' + LowerTriMeaning}</Text>
          </View>
          <View style={{ flex: 0.5, alignItems: "flex-end", paddingRight: 22 }}>
            <Image source={line6State} style={styles.hexLine} />
            <Image source={line5State} style={styles.hexLine} />
            <Image source={line4State} style={styles.hexLine} />
            <Image source={line3State} style={styles.hexLine} />
            <Image source={line2State} style={styles.hexLine} />
            <Image source={line1State} style={styles.hexLine} />
          </View>
        </View>

        <View style={{
          flex: 0.7,
          paddingTop: 20,
          padding: 25,
          paddingBottom: 20,
          justifyContent: "center",
          alignItems: "baseline",
          fontFamily: 'futura-regular'
        }}>
          <ScrollView>
            <Text style={styles.hexTitle}>The Judgement</Text>
            <Text style={styles.hexBody}>
              {hexagramJudgement}
            </Text>

            <Text style={styles.hexTitle}>The Image</Text>
            <Text style={styles.hexBody}>
              {hexagramIMG}
            </Text>

            <Text style={styles.hexTitle}>The Lines</Text>
            <Text style={styles.hexBody}>
              {hexagramLines}
            </Text>
          </ScrollView>
        </View>
      </ImageBackground>

      <Image source={triHexRow} style={{ height: 30, width: 400, paddingBottom: 10, paddingTop: 10 }} />

    </SafeAreaView>




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
  hexBody: {
    flex: 1,
    padding: 10,
    fontSize: 15,
    justifyContent: "center",
    alignItems: "center",
    fontFamily: 'futura-book'
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
    padding: 10
  },
  hexLine: {
    width: 100,
    height: 15,
  }
})


export default AnalysisScreen