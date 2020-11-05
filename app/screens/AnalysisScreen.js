import React from "react";
import { StyleSheet, SafeAreaView,Text, Alert, ImageBackground, Button} from "react-native";

import {styles} from '../assets/styles/styles'

//hex writing code


function AnalysisScreen(props) {
  return (


    //pull from the hex dict to find background image


    <ImageBackground source={require('../assets/MockUpChienv02.jpg')} style={styles.image}>
    <SafeAreaView style={styles.container}>
      
      
      
      <Button title="Find your Hexagram" color = "#008080" onPress={() => props.navigation.navigate("CoinFlip")} />

      
    </SafeAreaView>
  </ImageBackground>
  )
}


export default AnalysisScreen