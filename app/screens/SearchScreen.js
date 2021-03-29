import React, { useState, useContext, Flatlist } from 'react';
import { SearchBar } from 'react-native-elements';

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

import { Image, ImageBackground, 
        SafeAreaView, Button,StyleSheet, View,Text} from 'react-native'


import {styles} from '../assets/styles/styles'
import {hexData} from '../assets/dictionary/HexagramDatabase'
import {hexChar} from '../assets/hex/hex'

//animations
import h2h from '../assets/animations/CoinSpin/H2H.png'
import h2t from '../assets/animations/CoinSpin/H2T.png'
import t2h from '../assets/animations/CoinSpin/T2H.png'
import t2t from '../assets/animations/CoinSpin/T2T.png'

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

function SearchScreen(props) {

  const [hex, setHex] = useState([
    { name: 'chienchien', id: '1' },
    { name: 'kunkun', id: '2' },
    { name: 'kanchen', id: '3' },
    { name: 'kenkan', id: '4' },
    { name: 'kanchien', id: '5' },
    { name: 'chienkan', id: '6' },
    { name: 'kunkan', id: '7' },
    { name: 'kankun', id: '8' },
    { name: 'sunchien', id: '9' },
    { name: 'chiensun', id: '10' },
    { name: 'kunchien', id: '11' },
    { name: 'chienkun', id: '12' },
    { name: 'chienli', id: '13' },
    { name: 'lichien', id: '14' },
    { name: 'kunken', id: '15' },
    { name: 'chenkun', id: '16' },
    { name: 'tuichen', id: '17' },
    { name: 'kensun ', id: '18' },
    { name: 'kuntui', id: '19' },
    { name: 'sunkun', id: '20' },
    { name: 'lichen', id: '21' },
    { name: 'kenli', id: '22' },
    { name: 'kenkun', id: '23' },
    { name: 'kunchen', id: '24' },
    { name: 'chienchen', id: '25' },
    { name: 'kenchien', id: '26' },
    { name: 'kenchen', id: '27' },
  ])

//=====================Hexagram Generator=====================

  const hexagramGenerator = (hex) => {
    
    let result = hexChar.one //placeholder
    let resultText = ""
    let resultTextIMG = ""
    let resultTextJudgement = ""

    for(var item in hexData) { //search the hexagram dictionary
      //console.log("...searching for hexagram " + hex)
      if(hex == hexData[item].id){
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

    let result = {png: Chien, name: 'chien', meaning: 'heaven'} //chien is a placeholder
    let resultBg = ""

    //code can be simplified into a For Loop
    if(Trigram == trigramDict.Chien) //chien
    { 

      result.png = Chien
      resultBg = "chien_Heaven"
      result.name = "Chien"
      result.meaning = "Heaven"
      
    }
    else if(Trigram == trigramDict.Chen){ //chen
      result.png = Chen
      resultBg = "chen_Thunder"
      result.name = "Chen"
      result.meaning = "Thunder"
      

    }
    else if(Trigram == trigramDict.Kan) //Kan
    {
      result.png = Kan
      resultBg = "kan_Water"
      result.name = "Kan"
      result.meaning = "Water"
      
    }  
    else if(Trigram == trigramDict.Ken) //Ken
    {
      result.png = Ken
      resultBg = "ken_Mountain"
      result.name = "Ken"
      result.meaning = "Mountain"
      

    }
    else if(Trigram == trigramDict.Kun) //Kun
    {
      result.png = Kun
      resultBg = "kun_Earth"
      result.name = "Kun"
      result.meaning = "Earth"
      
    }  
    else if(Trigram == trigramDict.Li) //Li
    {
      result.png = Li
      resultBg = "li_Fire"
      result.name = "Li"
      result.meaning = "Fire"
      
    }
    else if(Trigram == trigramDict.Sun) //Sun
    {  
      result.png = Sun
      resultBg = "sun_Wind"
      result.name = "Sun"
      result.meaning = "Wind"
      
    }
    else if(Trigram == trigramDict.Tui) //Tui
    {   
      result.png = Tui 
      resultBg = "tui_Lake"
      result.name = "Tui"
      result.meaning = "Lake"
      
    }

    trigramBg = resultBg
    return result

  }

  var hexObj = {ChinaName,hexName,Hexagram, HexagramText,HexagramIMG,HexagramJudgment, question, trigramBg, UpperTriMeaning, UpperTriName, LowerTriMeaning, LowerTriName}
  var lineObj = {line1,line2,line3,line4,line5,line6}
  const showComponent = (props) => { //send data to Analysis
    if(numFlip > 6) {

      genLowerTri = "" //reinit values
      genUpperTri = ""  
      genHex = ""

      //HexagramJudgment = ""
      //HexagramText = ""
      //HexagramIMG = ""


      return <Button title="Read your hexagram" color = "#008080" onPress =
      {() => props.navigation.navigate("Analysis", {hexObj, lineObj})} /> //pass in the results
    }

  }
      
        return (
          <ImageBackground source={require('../assets/background/backgroundGradient.png')} style={styles.image}>
            <View style={styles.container}>
              <Flatlist>
              </Flatlist>  
              <IconButton icon="home-circle" color = "#008b8b" onPress={() => (props.navigation.navigate("Home"))} />    
            </View>
          </ImageBackground>
        );
      }
      
      const styles = StyleSheet.create({
      
        container: {
          flex: 1, 
          alignItems: "center", 
          justifyContent: "center"
        },
        buttonContainer: {
          flex: 1,
          marginTop: 20,
        },
        image: {
          flex: 1,
          resizeMode: "cover",
          justifyContent: "center"
        },
        input: {
          borderWidth: 1,
          borderColor: '#777',
          padding: 8,
          margin: 10
        }
      });
      
export default SearchScreen     