import { StatusBar } from 'expo-status-bar';
import React from 'react';
import hexIMG1 from './app/assets/hex/4.png';
import hexIMG3 from './app/assets/hex/34.png';
import hexIMG4 from './app/assets/hex/45.png';
import hexIMG5 from './app/assets/hex/58.png';

import { StyleSheet, Text, View, 
        Image, ImageBackground, 
        ScrollView, SafeAreaView } from 'react-native';

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
export default function ConsultScreen() {

  const handlePress = () => console.log("text pressed");
  console.log(require("./app/assets/icon.png"));
  return (
    <ImageBackground source={require('./app/assets/MockUpChienv02.jpg')} style={styles.image}>
      <SafeAreaView style={styles.container}>
      
  
        <Image source={hex1[random]} style={styles.backgroundImage} />

      {/* <Text numberOfLines={1} onPress={handlePress}>Hello World </Text> */}
      {/* <Image source={require('./assets/icon.png')}/> */}
      

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
