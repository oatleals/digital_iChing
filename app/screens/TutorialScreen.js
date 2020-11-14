import React from "react";
import { StyleSheet, Text, View, ImageBackground,SafeAreaView } from "react-native";
import {styles} from '../assets/styles/styles'





function TutorialScreen() {
  return(
    <ImageBackground source={require('../assets//background/backgroundGradient.png')} style={styles.backgroundImage}>
      <SafeAreaView style={styles.container}>

        <Text>I am going to teach you some stuff</Text>

      </SafeAreaView>
    </ImageBackground>
  )
}

export default TutorialScreen;