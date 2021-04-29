import React, { useEffect } from 'react';

import {
  StyleSheet, Text, Animated, View,
  Image, ImageBackground, Button,
  ScrollView, SafeAreaView,
  TouchableOpacity
} from 'react-native';
import { IconButton } from "react-native-paper";

import tricolors from '../assets/trigrams/Asset_ColoredTrigrams.png' //trigram bar
import triHexRow from '../assets/trigrams/Bottom_hex_row.jpg' //trigram bar

function TutorialScreen(props) {
  return (


      
    <ImageBackground source={require('../assets/trigrams/chien_Heaven.jpg')} style={{
      flex: 1,
    }}>
        <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center", fontFamily: 'futura-regular' }} >
        <View style={{ paddingBottom: 10 }}>
          <Image source={tricolors} style={{ height: 20, width: 390, paddingBottom: 10, paddingTop: 15 }} />
        </View>


        <View>
          <Text style={{
            paddingHorizontal: 30,
            padding: 15,
            fontFamily: 'futura-book',
            fontSize: 20,
            color: "#e0ffff"
          }}>
            Using the I Ching
          </Text>

          <Text style={styles.tutorialBody}>
            The I Ching is a divination text and one of the oldest classics of Chinese literature, written between 1000 and 750 BCE.The I Ching was the subject of scholarly commentary and basis for divination practice that informed Confucianism, Taoism and Buddhism, eventually expanding its influence throughout human culture.
          </Text>

          <Text style={styles.tutorialBody}>
            The I Ching is composed of sixty-four hexagrams, each evoking a concept and interpretation. Tossing three coins --with a value of two for tails and three for heads-- randomly generates odd sums (nine, yang, unbroken line) or even (six, yin, broken line), to identify one hexagram.

          </Text>

          <Text style={styles.tutorialBody}>
            With an open, almost dreaming consciousness, ask the I Ching a question. Use your own three coins or use the three digital coins in this app to draw a hexagram: Each coin toss generates either an unbroken or broken line, that form, from the bottom up, a hexagram.
          </Text>

          <Text style={styles.tutorialBody}>
            Even if the answer to your question is not immediately evident, take a moment to reflect on the hexagram you find and how its story and image may guide you on the way.
          </Text>

        </View>

        <View style={styles.buttonContainer}>
          <Button
            fontColor="#000000"
            color="#008b8b"
            title="Library"
            onPress={() => props.navigation.navigate("Library")} />
        </View>

        <View style={styles.buttonContainer}>
          <Button fontColor="#000000"
            color="#008b8b"
            title="Flip Coins"
            onPress={() => props.navigation.navigate("Consult")}>
          </Button>

        </View>

        <View style={{
          justifyContent: 'center',
          alignSelf: 'center',
          width: 100,
          padding: 5
        }}>
          <IconButton
            icon="arrow-left"
            color="#008b8b"
            size={50}
            onPress={() => props.navigation.navigate("Home")}
          />
        </View>

        <View style={{ justifyContent: 'flex-end', paddingTop: 5 }}>
          <Image source={tricolors} style={{ height: 20, width: 390, paddingBottom: 10, paddingTop: 15 }} />
        </View>
      </SafeAreaView>
    </ImageBackground>

  );
}

const styles = StyleSheet.create({

  tutorialBody: {
    paddingHorizontal: 35,
    paddingBottom: 5,
    padding: 12,
    fontSize: 13,
    justifyContent: "center",
    alignItems: "center",
    fontFamily: 'futura-book'

  },

  buttonContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: 150,
    padding: 5
  },

});


export default TutorialScreen;
