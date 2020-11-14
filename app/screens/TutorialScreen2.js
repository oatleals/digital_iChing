import React from "react";
import { StyleSheet, Text, View, ImageBackground,SafeAreaView,Button } from "react-native";
import {styles} from '../assets/styles/styles'





function TutorialScreen(props) {
  return(
    <ImageBackground source={require('../assets//background/backgroundGradient.png')} style={styles.backgroundImage}>
      <SafeAreaView style={styles.container}>

        <Text>nice!</Text>
        <Button title="continue" color = "#008080" onPress =
      {() => props.navigation.navigate("Tutorial3")} />

      </SafeAreaView>
    </ImageBackground>
  )
}

export default TutorialScreen;