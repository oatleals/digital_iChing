import React, { useState, useContext } from 'react';
//Lines
import Yang from '../assets/trigrams/Yang_Nine_Line.png' //9
import Yin from '../assets/trigrams/Yin_Six_Line.png' //6

//coins
import Yang_heads from '../assets/coins/Yang_heads.png';
import Yin_tails from '../assets/coins/Yin_Tails.png';

//trigrams pictures
import Chien from '../assets/trigrams/chien.png'
import Chen from '../assets/trigrams/chen.png'
import Kan from '../assets/trigrams/Kan.png'
import Ken from '../assets/trigrams/Ken.png'
import Kun from '../assets/trigrams/Kun.png'
import Li from '../assets/trigrams/Li.png'
import Sun from '../assets/trigrams/Sun.png'
import Tui from '../assets/trigrams/Tui.png'

//bg for trigrams
import chien_Heaven from '../assets/trigrams/chien_Heaven.jpg'
import chen_Thunder from '../assets/trigrams/chen_Thunder.jpg'
import kan_Water from '../assets/trigrams/Kan_Water.jpg'
import ken_Mountain from '../assets/trigrams/Ken_Mountain.jpg'
import kun_Earth from '../assets/trigrams/Kun_Earth.jpg'
import li_Fire from '../assets/trigrams/Li_Fire.jpg'
import sun_Wind from '../assets/trigrams/Sun_Wind.jpg'
import tui_Lake from '../assets/trigrams/Tui_Lake.jpg'

import {
  Image, ImageBackground,
  SafeAreaView, Button, StyleSheet, View, Text
} from 'react-native'


import { styles } from '../assets/styles/styles'
import { hexData } from '../assets/dictionary/HexagramDatabase'
import { hexChar } from '../assets/hex/hex'

//animations
import h2h from '../assets/animations/CoinSpin/H2H.png'
import h2t from '../assets/animations/CoinSpin/H2T.png'
import t2h from '../assets/animations/CoinSpin/T2H.png'
import t2t from '../assets/animations/CoinSpin/T2T.png'

//global variables
const coins = [Yang_heads, Yin_tails];

var coinHandler = 0 //changes state of coin

var Hexagram = null

//pulled from data base
var HexagramText = ""
var HexagramIMG = ""
var HexagramJudgment = ""

var UpperTrigram = null
var LowerTrigram = null

var genHex = ""
var genLowerTri = ""
var genUpperTri = ""

//Pull the labels out of Trigram database
var UpperTriName = null
var LowerTriName = null
var UpperTriMeaning = null
var LowerTriMeaning = null
var hexName = ""
var ChinaName = ""

//labels that will be passed to the next screen
var trigramBg = chien_Heaven
var trigramName = ""
var hexagramName = ""

//Line Variables
var line6 = Yin
var line5 = Yin
var line4 = Yin
var line3 = Yin
var line2 = Yin
var line1 = Yin



function CoinFlipScreen(props) {

  //hooks (setters and getters) will update our CoinFlipScreen dynamically
  const [lowerTrigramState, setLowerTrigram] = useState()
  const [upperTrigramState, setUpperTrigram] = useState()
  const [hexagramState, setHexagram] = useState()

  //useState hooks for lines
  const [line1State, setLine1] = useState()
  const [line2State, setLine2] = useState()
  const [line3State, setLine3] = useState()
  const [line4State, setLine4] = useState()
  const [line5State, setLine5] = useState()
  const [line6State, setLine6] = useState()


  //Event handler variables
  const [numFlip, setNumFlip] = useState(1)

  //=====================Hexagram Generator=====================

  const hexagramGenerator = (hex) => {

    let result = hexChar.one //placeholder
    let resultText = ""
    let resultTextIMG = ""
    let resultTextJudgement = ""

    for (var item in hexData) { //search the hexagram dictionary
      console.log("...searching for hexagram " + hex)
      if (hex == hexData[item].id) {
        console.log("Match!")
        result = item
        resultText = hexData[item].lines
        resultTextIMG = hexData[item].image
        resultTextJudgement = hexData[item].judgement
        hexName = hexData[item].name
        ChinaName = hexData[item].ChinaName

        break
      }
    }
    console.log("Your result was " + result)

    Hexagram = result //assign hexagram
    HexagramText = resultText //assign global text
    HexagramIMG = resultTextIMG
    HexagramJudgment = resultTextJudgement

    return result
  }


  //=====================Trigram Generator=====================

  const trigramGenerator = (Trigram) => {

    var trigramDict = { //is it worth it to use a dictionary?
      Chien: '333',
      Chen: '344',
      Kan: '434',
      Ken: '443',
      Kun: '444',
      Li: '343',
      Sun: '433',
      Tui: '334',
    }

    let result = { png: Chien, name: 'chien', meaning: 'heaven' } //chien is a placeholder
    let resultBg = ""

    //code can be simplified into a For Loop
    if (Trigram == trigramDict.Chien) //chien
    {

      result.png = Chien
      resultBg = "chien_Heaven"
      result.name = "Chien"
      result.meaning = "Heaven"

    }
    else if (Trigram == trigramDict.Chen) { //chen
      result.png = Chen
      resultBg = "chen_Thunder"
      result.name = "Chen"
      result.meaning = "Thunder"


    }
    else if (Trigram == trigramDict.Kan) //Kan
    {
      result.png = Kan
      resultBg = "kan_Water"
      result.name = "Kan"
      result.meaning = "Water"

    }
    else if (Trigram == trigramDict.Ken) //Ken
    {
      result.png = Ken
      resultBg = "ken_Mountain"
      result.name = "Ken"
      result.meaning = "Mountain"


    }
    else if (Trigram == trigramDict.Kun) //Kun
    {
      result.png = Kun
      resultBg = "kun_Earth"
      result.name = "Kun"
      result.meaning = "Earth"

    }
    else if (Trigram == trigramDict.Li) //Li
    {
      result.png = Li
      resultBg = "li_Fire"
      result.name = "Li"
      result.meaning = "Fire"

    }
    else if (Trigram == trigramDict.Sun) //Sun
    {
      result.png = Sun
      resultBg = "sun_Wind"
      result.name = "Sun"
      result.meaning = "Wind"

    }
    else if (Trigram == trigramDict.Tui) //Tui
    {
      result.png = Tui
      resultBg = "tui_Lake"
      result.name = "Tui"
      result.meaning = "Lake"

    }
    console.log("Trigram Result: " + result.name + " " + Trigram)
    trigramBg = resultBg
    return result
  }

  const eventHandler = () => {
    coinAnimator()
    const outcomes = [4, 3] //yin = 4 & yang = 3 this is due to the math.floor function
    const lineOutcome = [Yin, Yang]

    let result = Math.floor(Math.random() * outcomes.length) //pick from the list of outcomes

    console.log("Coin Flip Result: " + outcomes[result])

    if (numFlip == 1) {//building the lower trigram
      setLine1(lineOutcome[result])
      line1 = (lineOutcome[result])
      genLowerTri += outcomes[result].toString()
      coinHandler = result
    }
    else if (numFlip == 2) {
      setLine2(lineOutcome[result])
      line2 = (lineOutcome[result])
      genLowerTri += outcomes[result].toString()
      coinHandler = result
    }
    else if (numFlip == 3) {
      setLine3(lineOutcome[result]) //set line
      line3 = (lineOutcome[result])
      genLowerTri += outcomes[result].toString() //give id #

      LowerTrigram = trigramGenerator(genLowerTri).png //generate png 
      LowerTriName = trigramGenerator(genLowerTri).name //set name
      LowerTriMeaning = trigramGenerator(genLowerTri).meaning //set meaning


      setLowerTrigram(LowerTrigram)
      console.log("Finished Building Lower Trigram " + LowerTrigram)
      coinHandler = result

    }
    else if (numFlip == 4) { //building the upper trigram
      setLine4(lineOutcome[result])
      line4 = (lineOutcome[result])
      genUpperTri += outcomes[result].toString()
      coinHandler = result

    }
    else if (numFlip == 5) {
      setLine5(lineOutcome[result])
      line5 = (lineOutcome[result])
      genUpperTri += outcomes[result].toString()
      coinHandler = result

    }
    else if (numFlip == 6) { //finish and now set the hexagram
      setLine6(lineOutcome[result])
      line6 = (lineOutcome[result])
      genUpperTri += outcomes[result].toString()

      setUpperTrigram(UpperTrigram) //update png image state

      setHexagram(hexagramGenerator(genHex.concat(genLowerTri + genUpperTri)))

      console.log(UpperTrigram)
      UpperTrigram = trigramGenerator(genUpperTri).png //generate png 
      UpperTriName = trigramGenerator(genUpperTri).name //set name
      UpperTriMeaning = trigramGenerator(genUpperTri).meaning //set meaning
      coinHandler = result

    }
  }


  var question = props.route.params; //question from ConsultScreen
  var hexObj = { ChinaName, hexName, Hexagram, HexagramText, HexagramIMG, HexagramJudgment, question, trigramBg, UpperTriMeaning, UpperTriName, LowerTriMeaning, LowerTriName }
  var lineObj = { line1, line2, line3, line4, line5, line6 }
  const showComponent = (props) => { //send data to Analysis
    if (numFlip > 6) {

      genLowerTri = "" //reinit values
      genUpperTri = ""
      genHex = ""

      //HexagramJudgment = ""
      //HexagramText = ""
      //HexagramIMG = ""


      return <Button title="Read your hexagram" color="#008080" onPress=
        {() => props.navigation.navigate("Analysis", { hexObj, lineObj })} /> //pass in the results
    }

  }

  const showFlipCoin = (props) => { //after 6 flips turn off the button
    if (numFlip <= 6) {

      return <Button title="Flip coin" color="#008080" onPress={eventHandler} />
    }
  }

  //Sprite sheet animation
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0)
  const [isAnimating, setAnimating] = useState(false)


  const coinAnimator = () => {
    setNumFlip(numFlip + 1) // make sure we only flip the coin 6 times
    if (isAnimating == false) {

      setAnimating(true) //bool for showing animation
      let x = 0
      const frame = setInterval(() => {
        setCurrentFrameIndex(x)
        if (x++ == 19) {
          window.clearInterval(frame);
          setCurrentFrameIndex(0)
          setAnimating(false)
        } else {
          setCurrentFrameIndex(x)
        }
      }, 0.1)


    }
  }



  //JSX 
  return (

    <ImageBackground source={require('../assets//background/backgroundGradient.png')} style={styles.backgroundImage}>
      <SafeAreaView style={styles.container}>

        <View>
          <Image source={line6State} style={styles.hexLine} />
          <Image source={line5State} style={styles.hexLine} />
          <Image source={line4State} style={styles.hexLine} />
          <Image source={line3State} style={styles.hexLine} />
          <Image source={line2State} style={styles.hexLine} />
          <Image source={line1State} style={styles.hexLine} />
        </View>

        <View style={{ flex: 0.3, flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ paddingBottom: 40, width: 100, height: 100, overflow: "hidden", flexDirection: 'row' }}>
            <Image source={h2h} style={{
              width: 2000,
              height: 100,
              transform: [{ translateX: -100 * currentFrameIndex }]
            }} />
          </View>
          <View style={{ paddingBottom: 40, width: 100, height: 100, overflow: "hidden", flexDirection: 'row' }}>
            <Image source={h2t} style={{
              width: 2000,
              height: 100,
              transform: [{ translateX: -100 * currentFrameIndex }]
            }} />
          </View>
          <View style={{ paddingBottom: 40, width: 100, height: 100, overflow: "hidden", flexDirection: 'row' }}>
            <Image source={t2h} style={{
              width: 2000,
              height: 100,
              transform: [{ translateX: -100 * currentFrameIndex }]
            }} />
          </View>

        </View>

        <View>
          {showFlipCoin(props)}
        </View>




        <View style={styles.analysisButton}>

          {showComponent(props)}

        </View>

      </SafeAreaView>
    </ImageBackground>
  );
}


export default CoinFlipScreen
