import { StatusBar } from 'expo-status-bar';
import React from 'react';
import hexIMG1 from '../assets/hex/4.png';
import hexIMG3 from '../assets/hex/34.png';
import hexIMG4 from '../assets/hex/45.png';
import hexIMG5 from '../assets/hex/58.png';

import { StyleSheet, Text, View, 
        Image, ImageBackground, 
        ScrollView, SafeAreaView, Button, Alert } from 'react-native';

const hex1 = [hexIMG1,hexIMG3,hexIMG4,hexIMG5];

// const hex = ['./assets/hex/1.png','./assets/hex/4.png', './assets/hex/9.png',
//  './assets/hex/34.png', './assets/hex/45.png', './assets/hex/58.png'];


// Randomization Function... tbh idk why we need it but its here
function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

let random = Math.floor(Math.random() * hex1.length);
// console.log(hex[random], typeof(hex[random]))
// let image = hex[random];
// Viewing UI
function CoinFlipScreen(props) {

  return (
    <ImageBackground source={require('../assets/MockUpChienv02.jpg')} style={styles.image}>
      <SafeAreaView style={styles.container}>
      
        <Image source={hex1[random]} style={styles.backgroundImage} />


        <Button title="Flip Coin" onPress = {() => Alert.alert("Nice!") } /> 
        <Button title="Analysis" onPress ={() => props.navigation.navigate("Analysis")} />
        

      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
 
  },

  backgroundImage: {
    width: 200,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    resizeMode: 'cover', // or 'stretch'
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  }
  
});

export default CoinFlipScreen
