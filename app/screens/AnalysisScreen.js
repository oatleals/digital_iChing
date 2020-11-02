import React from "react";
import { StyleSheet, SafeAreaView,Text, Alert, ImageBackground} from "react-native";

import {styles} from '../assets/styles/styles'

//hex writing code


const hexRead () => {
  const outcomes = [Yin, Yang]

  let rand = Math.floor(Math.random() * outcomes.length) //pick from the list of outcomes
}

function AnalysisScreen() {
  return (


    //pull from the hex dict to find background image


    <ImageBackground source={require('../assets/MockUpChienv02.jpg')} style={styles.image}>
    <SafeAreaView style={styles.container}>
      <Text>
          "Deep Waters in the Heavens:
          Thunderclouds approaching from the West, but no rain yet.
          The Superior Person nourishes himself and remains of good cheer to condition himself for the moment of truth.

          Great Success if you sincerely keep to your course.
          You may cross to the far shore."
      </Text>
    </SafeAreaView>
  </ImageBackground>
  )
}


export default AnalysisScreen