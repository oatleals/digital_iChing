import React, { useState, useContext } from 'react';
//Lines
import Yang from '../assets/trigrams/Yang_Nine_Line.png' //9
import Yin from '../assets/trigrams/Yin_Six_Line.png' //6

//coins
import Yang_heads from '../assets/coins/Yang_heads.png';
import Yin_tails from '../assets/coins/Yin_Tails.png';

//trigrams
//import { trigrams } from '../assets/trigrams/trigrams'

import Chien from '../assets/trigrams/chien.png'
import Chen from '../assets/trigrams/chen.png'
import Kan from '../assets/trigrams/Kan.png'
import Ken from '../assets/trigrams/Ken.png'
import Kun from '../assets/trigrams/Kun.png'
import Li from '../assets/trigrams/Li.png'
import Sun from '../assets/trigrams/Sun.png'
import Tui from '../assets/trigrams/Tui.png'

//hexagrams
import one from '../assets/hex/01.png'

import { Image, ImageBackground, 
        SafeAreaView, Button,StyleSheet, View} from 'react-native'


import {styles} from '../assets/styles/styles'
import {hexData} from '../assets/dictionary/HexagramDatabase';


//global variables
const coins = [Yang_heads,Yin_tails];

  
var Hexagram = null
var HexagramText = ""

var UpperTrigram = null
var LowerTrigram = null

var genHex = ""
var genLowerTri = ""
var genUpperTri = ""


function CoinFlipScreen(props) {

  //hooks (setters and getters) will update our CoinFlipScreen dynamically
  const[lowerTrigramState, setLowerTrigram] = useState()
  const[upperTrigramState, setUpperTrigram] = useState()
  const[hexagramState, setHexagram] = useState()


  const [line1, setLine1] = useState()  
  const [line2, setLine2] = useState()
  const [line3, setLine3] = useState()
  const [line4, setLine4] = useState()
  const [line5, setLine5] = useState()
  const [line6, setLine6] = useState()


  //Event handler variables
  const [numFlip, setNumFlip] = useState(1)

  const hexagramGenerator = (hex) => {
    //console.log(hexagramDict)
  
    let result = one
    let resultText = ""

    for(var item in hexData) { //search the hexagram dictionary
      //console.log("...searching for hexagram " + hex)
      if(hex == hexData[item].id){
        console.log("Match!")
        result = item
        resultText = hexData[item].lines
        break
      }
    }
    console.log("Your result was " + result)

    Hexagram = result //assign hexagram
    HexagramText = resultText //assign global text

    return result
  }

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

    let result = Chien //chien is a placeholder

    if(Trigram == trigramDict.Chien) //chien
      result = Chien
    else if(Trigram == trigramDict.Chen) //chen
      result = Chen
    else if(Trigram == trigramDict.Kan) //Kan
      result = Kan
    else if(Trigram == trigramDict.Ken) //Ken
      result = Ken
    else if(Trigram == trigramDict.Kun) //Kun
      result = Kun
    else if(Trigram == trigramDict.Li) //Li
      result = Li
    else if(Trigram == trigramDict.Sun) //Sun
      result = Sun
    else if(Trigram == trigramDict.Tui) //Tui
      result = Tui 
    return result

  }

  const eventHandler = () => {
    
    const outcomes = [Yin, Yang] //yin = 4 & yang = 3 this is due to the math.floor function

    let result = Math.floor(Math.random() * outcomes.length) //pick from the list of outcomes

    if(numFlip == 1) {//building the lower trigram
      setLine1(outcomes[result])
      genLowerTri += outcomes[result].toString()
    }
    else if(numFlip == 2) {
      setLine2(outcomes[result])
      genLowerTri += outcomes[result].toString()
    }
    else if(numFlip == 3) {
      setLine3(outcomes[result])
      genLowerTri += outcomes[result].toString()
      LowerTrigram = trigramGenerator(genLowerTri)
      setLowerTrigram(LowerTrigram) 
      console.log("Finished Building Lower Trigram" + LowerTrigram)
    }
    else if(numFlip == 4) { //building the upper trigram
      setLine4(outcomes[result])
      genUpperTri += outcomes[result].toString()
    }
    else if(numFlip == 5){
      setLine5(outcomes[result])
      genUpperTri += outcomes[result].toString()
    }
    else if(numFlip == 6) { 
      setLine6(outcomes[result])
      genUpperTri += outcomes[result].toString()  
      UpperTrigram = trigramGenerator(genUpperTri)
      setUpperTrigram(UpperTrigram)
      console.log("Finished Building Upper Trigram" + UpperTrigram) 
      setHexagram(hexagramGenerator(genHex.concat(genLowerTri + genUpperTri)))
      
    }

    setNumFlip(numFlip + 1) // make sure we only flip the coin 6 times
  }


  var question = props.route.params; //question from ConsultScreen
  var hexObj = {Hexagram, HexagramText, question}

  const showComponent = (props) => { //send data to Analysis
    if(numFlip > 6) {

      genLowerTri = "" //reinit values
      genUpperTri = ""
      genHex = ""

      return <Button title="Read your hexagram" color = "#008080" onPress =
      {() => props.navigation.navigate("Analysis", {hexObj})} /> //pass in the results
    }

  }

  
  //JSX 
    return (

      <ImageBackground source={require('../assets//background/backgroundGradient.png')} style={styles.backgroundImage}>
        <SafeAreaView style={styles.container}>
        
          <View>    
            <Image source = {line6} style={styles.hexLine} /> 
            <Image source = {line5} style={styles.hexLine} />
            <Image source = {line4} style={styles.hexLine} />
            <Image source = {line3} style={styles.hexLine} />
            <Image source = {line2} style={styles.hexLine} />
            <Image source = {line1} style={styles.hexLine} />
            <Image source = {upperTrigramState} style={styles.hexLine} />
            <Image source = {lowerTrigramState} style={styles.hexLine} />
          </View>
        
          <Image source = {coins[0]} style={styles.coinButton} />
          <Button title = "Flip coin" color = "#008080" onPress = {eventHandler}/>
          
          <View style = {styles.analysisButton}>
            {showComponent(props)}
            
          </View>

        </SafeAreaView>
      </ImageBackground>
    );
  }


  export default CoinFlipScreen
