import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';


//Lines
import Yin from '../assets/trigrams/Yang_Nine_Line.png' //9
import Yang from '../assets/trigrams/Yin_Six_Line.png' //6

//coins
import Yang_heads from '../assets/Yang_heads.png';
import Yin_tails from '../assets/Yin_Tails.png';

//trigrams
//import { trigrams } from '../assets/trigrams/trigrams'

import chien from '../assets/trigrams/chien.png'
import chen from '../assets/trigrams/chen.png'
import Kan from '../assets/trigrams/Kan.png'
import Ken from '../assets/trigrams/Ken.png'
import Kun from '../assets/trigrams/Kun.png'
import Li from '../assets/trigrams/Li.png'
import Sun from '../assets/trigrams/Sun.png'
import Tui from '../assets/trigrams/Tui.png'


//hexagrams
import one from '../assets/hex/1.png'


import {
        Image, ImageBackground, 
        SafeAreaView, Button,StyleSheet, View} from 'react-native';

const coins = [Yang_heads,Yin_tails];

//use a stack for the trigrams??
const tri = [chien, chen,Kan,Ken,Kun,Li,Sun,Tui]

const hexagrams = [one]


let numFlip = 0

let upperTri = []
let lowerTri = []


//Maybe add sounds for each trigram formation
function CoinFlipScreen(props) {

  const [line1, setLine1] = useState()
  const [line2, setLine2] = useState()
  const [line3, setLine3] = useState()
  const [line4, setLine4] = useState()
  const [line5, setLine5] = useState()
  const [line6, setLine6] = useState()


  const trigramGenerator = () => {

    const outcomes = [Yin, Yang]

    let rand = Math.floor(Math.random() * outcomes.length) //pick from the list of outcomes
        
    

    let result = outcomes[rand]

    if(numFlip == 1) {//building the lower trigram
      setLine1(result)
    }
    else if(numFlip == 2)
      setLine2(result)
    else if(numFlip == 3) {
      console.log("Finished Building Lower Trigram") 
      setLine3(result)
    }
    else if(numFlip == 4) { //building the upper trigram
      setLine4(result)
    }
    else if(numFlip == 5){
      setLine5(result)
    }
    else if(numFlip == 6) { 
      setLine6(result)
      console.log("Finished Building Upper Trigram")
      numFlip = 0
    }
    console.log(outcomes[rand])
    numFlip += 1 // make sure we only flip the coin 6 times
  }



  return (
    <ImageBackground source={require('../assets/backgroundGradient.png')} style={styles.image}>
      <SafeAreaView style={styles.container}>
      
        <View>
          <Image source = {line6} style={styles.hexLine} />
          <Image source = {line5} style={styles.hexLine} />
          <Image source = {line4} style={styles.hexLine} />
          <Image source = {line3} style={styles.hexLine} />
          <Image source = {line2} style={styles.hexLine} />
          <Image source = {line1} style={styles.hexLine} />
        </View>
       
        
        <Image source = {coins[0]} style={styles.coinButton} />
        <Button title = "Flip coin" onPress = {trigramGenerator}/>
        
        <Button title="Analysis" onPress ={() => props.navigation.navigate("Analysis")} />
        

      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  hexLine: {
    width: 150,
    height: 25,
    resizeMode: "contain",
    justifyContent: "flex-start"
  },
  coinButton: {
    width: 150,
    height: 150,
    marginTop: 20,
    marginBottom: 20,
    resizeMode: "contain",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  }
})


export default CoinFlipScreen
