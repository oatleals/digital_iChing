import { StatusBar } from 'expo-status-bar';
import React from 'react';
import hexIMG1 from '../assets/hex/4.png';
import hexIMG3 from '../assets/hex/34.png';
import hexIMG4 from '../assets/hex/45.png';
import hexIMG5 from '../assets/hex/58.png';


import Yang_heads from '../assets/Yang_heads.png';
import Yin_tails from '../assets/Yin_Tails.png';

import {styles} from '../assets/styles/styles';

import { TouchableOpacity,
        Image, ImageBackground, 
        SafeAreaView, Button } from 'react-native';



/*




yin = 2 //or tails
yang = 3 //or heads

yin, yin, yin = 6 //complete line - old yin
yin, yin, yang = 7 //solid line - young yang 
yang, yang, yin = 8 //split line - young yin
yang, yang, yang = 9 //complete line - old yang

total = hexagram

each hexagram corresponds to a number

results = [] //this comes from the onPress () =>

*/

const hex1 = [hexIMG1,hexIMG3,hexIMG4,hexIMG5];
const coins = [Yang_heads,Yin_tails];


let hexRandom = Math.floor(Math.random() * hex1.length); //random function
let coinRandom = Math.floor(Math.random() * coins.length); //random function


const shuffleCoins = () => {
  
}


function CoinFlipScreen(props) {

  return (
    <ImageBackground source={require('../assets/MockUpChienv02.jpg')} style={styles.image}>
      <SafeAreaView style={styles.container}>
      
        <Image source={hex1[hexRandom]} style={styles.backgroundImage} />
        
        <TouchableOpacity onPress = {() => console.log("Flip!")}>
          <Image source={coins[coinRandom]} style={styles.backgroundImage} />

        </TouchableOpacity>

        <Button title="Analysis" onPress ={() => props.navigation.navigate("Analysis")} />
        

      </SafeAreaView>
    </ImageBackground>
  );
}


export default CoinFlipScreen
