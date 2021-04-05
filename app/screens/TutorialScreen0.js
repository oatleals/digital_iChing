import { StatusBar } from 'expo-status-bar';
import React, { useRef, useEffect } from 'react';

import {
  StyleSheet, Text, Animated, View,
  Image, ImageBackground, Button,
  ScrollView, SafeAreaView,
  TouchableOpacity
} from 'react-native';





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

function TutorialScreen(props) {
  return (
    <ImageBackground source={require('../assets/background/background.png')} style={styles.image}>

      <SafeAreaView style={styles.backBtn} >
        <Button title="←" color="#008080" onPress={() => props.navigation.navigate("Home")} />
      </SafeAreaView>

      <SafeAreaView style={styles.container}>
        <Anime time='1000'>
          <Image source={require('../assets/Asset_Mountains_Moon1.png')} style={styles.mount} />
        </Anime>

        <Anime time='1500'>
          <Image source={require('../assets/Asset_Mountains_Moon2.png')} style={styles.mount} />
        </Anime>

        <Anime time='1200'>
          <Image source={require('../assets/Asset_Mountains_Moon3.png')} style={styles.mount} />
        </Anime>

        <FadeInView time='8000' op='0.5' style={styles.bottom}>

          <TouchableOpacity onPress={() => props.navigation.navigate("Page1")}>
            <Text style={styles.fwrdBtn}>→</Text>
          </TouchableOpacity>

        </FadeInView>
        <Button
          title="→"
          onPress={() => props.navigation.navigate("Page1")}
          style={{ flex: 1 }}
        />
      </SafeAreaView>

      <FadeInOut time='1000' >
        <SafeAreaView style={styles.wordsCont}>
          <Text style={[{ textShadowColor: 'white' }, { textShadowOffset: { width: 0, height: 0 } }, { textShadowRadius: 10 }, styles.words]}>Undestanding</Text>
          <Text style={[{ textShadowColor: 'white' }, { textShadowOffset: { width: 0, height: 0 } }, { textShadowRadius: 10 }, styles.words]}>the</Text>
          <Text style={[{ textShadowColor: 'white' }, { textShadowOffset: { width: 0, height: 0 } }, { textShadowRadius: 10 }, styles.words]}>I-Ching</Text>
        </SafeAreaView>
      </FadeInOut>

      <FadeInView time='1000' >

        <SafeAreaView style={styles.wordsCont}>
          <Text style={styles.words}>Undestanding</Text>
          <Text style={styles.words}>the</Text>
          <Text style={styles.words}>I-Ching</Text>

        </SafeAreaView>
      </FadeInView>


    </ImageBackground>

  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center'
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
  }

});



export default TutorialScreen;