import React from "react";
import { StyleSheet, Text, View, ImageBackground,SafeAreaView, Button } from "react-native";
import {styles} from '../assets/styles/styles'





function TutorialScreen(props) {
  return(
    <ImageBackground source={require('../assets//background/backgroundGradient.png')} style={styles.backgroundImage}>
      <SafeAreaView style={styles.container}>

        <Text>now you know</Text>
        <Button title="Go Home" color = "#008080" onPress =
      {() => props.navigation.navigate("Home")} />

      </SafeAreaView>
    </ImageBackground>
  )
}

export default TutorialScreen;