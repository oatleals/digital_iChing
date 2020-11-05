import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
//Lines
import Yang from '../assets/trigrams/Yang_Nine_Line.png' //9
import Yin from '../assets/trigrams/Yin_Six_Line.png' //6

//coins
import Yang_heads from '../assets/Yang_heads.png';
import Yin_tails from '../assets/Yin_Tails.png';

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
import one from '../assets/hex/1.png'

import {
        Image, ImageBackground, 
        SafeAreaView, Button,StyleSheet, View,Text} from 'react-native';
import { set } from 'react-native-reanimated';

//global variables
const coins = [Yang_heads,Yin_tails];

var hex = ""
var lowerTri = ""
var upperTri = ""

function CoinFlipScreen(props) {

  //hooks (setters and getters) will update our CoinFlipScreen dynamically
  const[lowerTrigram, setLowerTrigram] = useState()
  const[upperTrigram, setUpperTrigram] = useState()
  const[hexagram, setHexagram] = useState("Success")

  const [line1, setLine1] = useState()  
  const [line2, setLine2] = useState()
  const [line3, setLine3] = useState()
  const [line4, setLine4] = useState()
  const [line5, setLine5] = useState()
  const [line6, setLine6] = useState()

  //Event handler variables
  const [numFlip, setNumFlip] = useState(1)


  const hexagramGenerator = (Hexagram) => {
    //console.log(Hexagram)

    var hexagramDict = { //extract to a .js file
      one: '333333', //chien row
      thirtyFour: '333344',
      five: '333434',
      twentySix: '333443',
      eleven: '333444',
      nine: '333433',
      fourteen: '333343',
      fortyThree: '333334',

      twentyFive: '344333',//chen row
      fiftyOne: '344344',
      three: '344434',
      twentySeven: '344443',
      twentyFour: '344444',
      fortyTwo: '344433',
      twentyOne: '344343',
      seventeen: '344334',

      six: '434333', //kan row
      forty: '434344',
      twentyNine: '434434',
      four: '434344',
      seven: '434344',
      fiftyNine: '434433',
      sixtyFour: '434343',
      fortySeven: '434334',

      thirtyThree: '443333', //ken row
      sixtyTwo: '443344',
      thirtyNine: '443434',
      fiftyTwo: '443443',
      fifteen: '443444',
      fiftyThree: '443433',
      fiftySix: '443343',
      thirtyOne: '443334',
      
      twelve: '444333', //Kun row
      sixteen: '444344',
      eight: '444434',
      twentyThree: '444443',
      two: '444444',
      twenty: '444433',
      thirtyFive: '444343',
      fortyFive: '444334',
      
      fortyFour: '433333', //sun row
      thirtyTwo: '433344',
      fortyEight: '433434',
      eighteen: '433443',
      fortySix: '433444',
      fiftySeven: '433433',
      fifty: '433343',
      twentyEight: '433334',
      
      thirteen: '343333', //Li row
      fiftyFive: '343344',
      sixtyThree: '343434',
      twentyTwo: '343443',
      thirtySix: '343444',
      thirtySeven: '343433',
      thirty: '343343',
      fortyNine: '343334',

      ten: '334333', //Tui row
      fiftyFour: '334344',
      sixty: '334434',
      fortyOne: '334443',
      nineteen: '334444',
      sixtyOne: '334433',
      thirtyEight: '334343',
      fiftyEight: '334334',

    }
  
  
    let result = one

    for(var item in hexagramDict) {
      console.log("...searching for hexagram " + item)
      if(Hexagram == hexagramDict[item]){
        result = item
        console.log("Match! Your hexagram is" + item)
        break
      }
    }
    
    lowerTri = "" //reset lower trigram
    upperTri = "" //reset upper trigram
    hex = "" //reset hexagram
    return result
  }

  const trigramGenerator = (Trigram) => { 
    
    var trigramDict = { //is it worth it to use a dictionairy?
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
      lowerTri += outcomes[result].toString()
    }
    else if(numFlip == 2) {
      setLine2(outcomes[result])
      lowerTri += outcomes[result].toString()
    }
    else if(numFlip == 3) {
      setLine3(outcomes[result])
      lowerTri += outcomes[result].toString()
    
      setLowerTrigram(trigramGenerator(lowerTri))
      console.log("Finished Building Lower Trigram")

      //lowerTri = ""
    }
    else if(numFlip == 4) { //building the upper trigram
      setLine4(outcomes[result])
      upperTri += outcomes[result].toString()
    }
    else if(numFlip == 5){
      setLine5(outcomes[result])
      upperTri += outcomes[result].toString()
    }
    else if(numFlip == 6) { 
      setLine6(outcomes[result])
      upperTri += outcomes[result].toString()
      
      setUpperTrigram(trigramGenerator(upperTri))
      console.log("Finished Building Upper Trigram")
      
      setHexagram(hexagramGenerator(hex.concat(lowerTri + upperTri)))
      
    }

    setNumFlip(numFlip + 1) // make sure we only flip the coin 6 times
  }


  const showComponent = (props) => {
    if(numFlip > 6) {

      console.log(hexagram)

      return <Button title="Read your hexagram" color = "#008080" onPress =
      {() => props.navigation.navigate("Analysis", hexagram)} />
    }
  }
  
  //JSX 
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
            <Image source = {upperTrigram} style={styles.hexLine} />
            <Image source = {lowerTrigram} style={styles.hexLine} />
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
    },
    analysisButton: {
      flex: 0.2,
      justifyContent: "center",
      alignItems: "center",
    }
  })


  export default CoinFlipScreen
