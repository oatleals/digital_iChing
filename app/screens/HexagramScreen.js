import React, { useState, useEffect } from "react";
import { SafeAreaView, ImageBackground, Text, StyleSheet, Image, View, ScrollView } from "react-native";
import { IconButton } from "react-native-paper";

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

function HexagramScreen(props) {
  //create the hexagram text
  const [hexagram, setHexagram] = useState()
  const [hexagramLines, setHexagramLines] = useState()
  const [hexagramIMG, setHexagramIMG] = useState()
  const [hexagramJudgement, setHexagramJudgement] = useState()
  const [chinaHexagram, setChinaHexagram] = useState()

  //generate Trigram texts and meaning
  const [LowerTriName, setLowerTriName] = useState()
  const [LowerTriMeaning, setLowerTriMeaning] = useState()
  const [UpperTriMeaning, setUpperTriMeaning] = useState()
  const [UpperTriName, setUpperTriName] = useState()
  //background generated from the trigrams
  const [trigramBg, setTrigramBg] = useState()

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

  var { hexObj } = props.route.params
  var { lineObj } = props.route.params

  const eventHandler = () => {
    setHexagram(hexObj.hexName)
    setHexagramLines(hexObj.HexagramText)
    setHexagramIMG(hexObj.HexagramIMG)
    setHexagramJudgement(hexObj.HexagramJudgment)
    setChinaHexagram(hexObj.ChinaName)

    //trigram
    setLowerTriName(hexObj.LowerTriName)
    setLowerTriMeaning(hexObj.LowerTriMeaning)
    setUpperTriName(hexObj.UpperTriName)
    setUpperTriMeaning(hexObj.UpperTriMeaning)

    setLine1(lineChanger(lineObj.line1))
    setLine2(lineChanger(lineObj.line2))
    setLine3(lineChanger(lineObj.line3))
    setLine4(lineChanger(lineObj.line4))
    setLine5(lineChanger(lineObj.line5))
    setLine6(lineChanger(lineObj.line6))

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
    else if (hexObj.trigramBg == "sun_Wind")
      setTrigramBg(sun_Wind)
    else if (hexObj.trigramBg == "tui_Lake")
      setTrigramBg(tui_Lake)


    for (var item in hexChar) { //search the hexagram dictionary
      if (hexObj.Hexagram == item) {
        setHexCharacter(hexChar[item])
      }
    }
  }

  //distinguish if the line is yin or yang
  const lineChanger = (line) => {
    if(line == 3){
      return Yang;
    }
    return Yin;
  }

  useEffect(() => {
    eventHandler()
  }, [])

  return (
    <ImageBackground source={trigramBg} style={styles.backgroundImage}>
      <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center", fontFamily: 'futura-regular' }}>
        <View style={{ paddingTop: 30, paddingBottom: 10, flexDirection: "row" }}>
          <Image source={hexCharacter} style={styles.hexChar} />
        </View>
        <Image source={tricolors} style={{ height: 20, width: 390, paddingBottom: 10, paddingTop: 15 }} />
        <View style={{ flex: 0.5, flexDirection: 'row', paddingHorizontal: 25, paddingTop: 30 }}>
          <View style={{ flex: 1, alignItems: "flex-start" }}>
            <Text style={{ color: "#000000", fontFamily: 'futura-book', fontSize: 15 }}>{' ' + chinaHexagram + ' - ' + hexagram + '  -  ' + UpperTriMeaning}</Text>
            <Text style={{ color: "#000000", fontFamily: 'futura-book', fontSize: 15 }}> {'Above:  ' + UpperTriName + '  -  ' + UpperTriMeaning}</Text>
            <Text style={{ color: "#000000", fontFamily: 'futura-book', fontSize: 15 }}> {'Below:  ' + LowerTriName + '  -  ' + LowerTriMeaning}</Text>
          </View>
          <View style={{ flex: 0.5, alignItems: "flex-end" }}>
            <Image source={line6State} style={styles.hexLine} />
            <Image source={line5State} style={styles.hexLine} />
            <Image source={line4State} style={styles.hexLine} />
            <Image source={line3State} style={styles.hexLine} />
            <Image source={line2State} style={styles.hexLine} />
            <Image source={line1State} style={styles.hexLine} />
          </View>
        </View>

        <View style={{
          flex: 3,
          padding: 25,
          paddingBottom: 50,
          justifyContent: "center",
          alignItems: "baseline",
          fontFamily: 'futura-book'
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
        <IconButton icon="arrow-left" color="#008b8b" size={50} onPress={() => (props.navigation.navigate("Library"))} />
      <Image source={triHexRow} style={{ height: 30, width: 400, paddingBottom: 10, paddingTop: 10 }} />
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
    fontFamily: 'futura-regular'
  },
  hexTitle: {
    fontSize: 20,
    fontFamily: 'futura-book',
    marginBottom: 1,
    marginTop: 1,
    color: "#e0ffff"
  },
  buttonContainer: {
    padding: 20,
    paddingBottom: 100,
    alignItems: "center",
    width: 150,
  },
  hexBody: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 15,
    justifyContent: "center",
    alignItems: "center",
    fontFamily: 'futura-book'
  },
  questionTitle: {
    fontFamily: 'futura-book',
    fontSize: 15,
    paddingTop: 10
  },
  hexText: {
    flex: 1,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    fontFamily: 'futura-regular'
  },
  item: {
    backgroundColor: '#00ced1',
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 10,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "contain",
    justifyContent: "center"
  },
  hexChar: {
    paddingLeft: 80,
    padding: 10,
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  Header: {
    fontSize: 20,
    fontFamily: 'futura-bold',
    marginBottom: 1,
    marginTop: 1,
    color: "#e0ffff"
  },
  buttonContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: 100,
    padding: 10
  },
  hexLine: {
    paddingTop: 12,
    width: 65,
    height: 10,
  }
})

export default HexagramScreen