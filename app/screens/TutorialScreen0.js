import { StatusBar } from 'expo-status-bar';
import React, { useRef, useEffect } from 'react';

import {
  StyleSheet, Text, Animated, View,
  Image, ImageBackground, Button,
  ScrollView, SafeAreaView,
  TouchableOpacity
} from 'react-native';
import { color } from 'react-native-reanimated';
import { IconButton } from "react-native-paper";

import tricolors from '../assets/trigrams/Asset_ColoredTrigrams.png' //trigram bar
import triHexRow from '../assets/trigrams/Bottom_hex_row.jpg' //trigram bar

/*
const Anime = (props) => {
  const position = new Animated.ValueXY({ x: 0, y: 700 })
  React.useEffect(() => {
    Animated.timing(
      position,
      {
        toValue: { x: -208, y: 0 },
        duration: props.time,
        useNativeDriver: true
      }
    ).start();
  }, [position])

  return (
    <Animated.View
      style={{
        ...props.style,
        transform: [
          { translateX: position.x },
          { translateY: position.y }
        ],
      }}
    >
      {props.children}
    </Animated.View>
  );
}

const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current
  const shadow = useRef(new Animated.Value(0)).current

  React.useEffect(() => {
    Animated.sequence([
      Animated.timing(
        fadeAnim,
        {
          toValue: props.op,
          duration: props.time,
          useNativeDriver: true
        }
      ),
      Animated.loop(
        Animated.timing(
          shadow,
          {
            toValue: props.sh,
            duration: 1000,
            useNativeDriver: true
          }

        )
      )
    ]).start();
  }, [fadeAnim])
  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: fadeAnim,

      }}
    >
      {props.children}
    </Animated.View>
  );
}

const FadeInOut = (props) => {
  const fadeAnim = new Animated.Value(0) // Initial value for opacity: 0
  React.useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(
          fadeAnim,
          {
            toValue: 1,
            duration: props.time,
            useNativeDriver: true
          }
        ),
        Animated.timing(
          fadeAnim,
          {
            toValue: 0,
            duration: props.time,
            useNativeDriver: true
          }
        )
      ])
    ).start();
  }, [fadeAnim])
  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: fadeAnim,
      }}
    >
      {props.children}
    </Animated.View>
  );
}
*/

/*
<SafeAreaView style={styles.backBtn} >
          <Button title="←" color = "#008080" onPress={() => props.navigation.navigate("Home")}/>
      </SafeAreaView>
        
      <SafeAreaView style={styles.container}>
          <Anime time='1000'>
            <Image source = {require('../assets/Asset_Mountains_Moon1.png')} style={styles.mount}/>
          </Anime>

          <Anime time='1500'>
            <Image source = {require('../assets/Asset_Mountains_Moon2.png')} style={styles.mount}/>
          </Anime>

          <Anime time='1200'>
            <Image source = {require('../assets/Asset_Mountains_Moon3.png')} style={styles.mount}/>
          </Anime>

          <FadeInView time = '8000' op = '0.5' style={styles.bottom}>
            
            <TouchableOpacity onPress={() => props.navigation.navigate("Page1")}>
              <Text style={styles.fwrdBtn}>→</Text>
            </TouchableOpacity>
            
          </FadeInView>
          <Button
            title="→" 
            onPress={() => props.navigation.navigate("Page1")}
            style = {{flex: 1}}
          />
      </SafeAreaView>

<FadeInOut time='1000' >
      <SafeAreaView style={styles.wordsCont}>
        <Text style={[{textShadowColor: 'white'}, {textShadowOffset: { width: 0, height: 0}},{textShadowRadius: 10}, styles.words]}>Undestanding</Text>
        <Text style={[{textShadowColor: 'white'}, {textShadowOffset: { width: 0, height: 0}},{textShadowRadius: 10}, styles.words]}>the</Text>
        <Text style={[{textShadowColor: 'white'}, {textShadowOffset: { width: 0, height: 0}},{textShadowRadius: 10}, styles.words]}>I-Ching</Text>
      </SafeAreaView>
</FadeInOut>

<FadeInView time='1000' >

      <SafeAreaView style={styles.wordsCont}>
        <Text style={styles.words}>Undestanding</Text>
        <Text style={styles.words}>the</Text>
        <Text style={styles.words}>I-Ching</Text>
        
      </SafeAreaView>
</FadeInView>
*/

function TutorialScreen(props) {
  return (


    <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center", fontFamily: 'futura-regular' }} >
      <ImageBackground source={require('../assets/trigrams/chien_Heaven.jpg')} style={{
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",

      }}>
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
            icon="home"
            color="#008b8b"
            size={50}
            onPress={() => props.navigation.navigate("Home")}
          />
        </View>




        <View style={{ justifyContent: 'flex-end', paddingTop: 5 }}>
          <Image source={tricolors} style={{ height: 20, width: 390, paddingBottom: 10, paddingTop: 15 }} />
        </View>
      </ImageBackground>
    </SafeAreaView>



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
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },

  wordsCont: {
    top: 100,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center'
  },

  words: {
    textAlign: 'center',
    borderColor: '#008080',
    color: "#a5943c",
    fontSize: 40,
    marginBottom: 40,
    left: '25%',
    fontWeight: '900'
  },

  bottom: {
    zIndex: 4,
    top: '100%',
    opacity: 0.5,
    position: 'absolute'
  },

  backBtn: {
    zIndex: 4,
    flexDirection: 'row',
    marginLeft: 10

  },

  mount: {
    zIndex: 3,
    height: 440,
    width: "100%",
    position: 'absolute'
  },

  fwrdBtn: {
    justifyContent: 'center',
    textAlign: 'center',
    width: 44,
    height: 44,
    borderRadius: 44 / 2,
    borderWidth: 4,
    alignSelf: 'center',
    borderColor: '#c8eae4',
    color: "#c8eae4",
    fontSize: 30,
    bottom: 30
  },

  image: {
    flex: 1
  },
  buttonContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: 150,
    padding: 5
  },

});



export default TutorialScreen;
