import { StatusBar } from 'expo-status-bar';
import React, { useRef, useEffect }  from 'react';

import { StyleSheet, Text, View, Animated,
        Image, ImageBackground, Button,
        ScrollView, SafeAreaView,
        TouchableOpacity} from 'react-native';


const Anime = (props) => {
  const position = new Animated.ValueXY({x:0, y:0})
  React.useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(
          position,
          {
            toValue:{x: props.Xpos, y: props.Ypos},
            duration: props.time,
            useNativeDriver: true
          }),
        Animated.timing(
          position,
          {
            toValue:{x: -props.Ypos, y: -props.Xpos},
            duration: props.time,
            useNativeDriver: true
          }),
        /*Animated.timing(
          position,
          {
            toValue:{x: 0, y: 0},
            duration: props.time,
            useNativeDriver: true
          })*/
        ])
    ).start();
  }, [position])

  return (
    <Animated.View                 // Special animatable View
      style={{
      ...props.style,
      transform: [
        {translateX:position.x},
        {translateY:position.y}
      ],         // Bind opacity to animated value
      }}
      >
      {props.children}
    </Animated.View>
    );
}

const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0
        
  React.useEffect(() => {
      Animated.timing(
      fadeAnim,
      {
        toValue: props.op,
        duration: props.time,
        useNativeDriver: true
      }
      ).start();
  }, [fadeAnim])
  return (
  <Animated.View                 // Special animatable View
    style={{
    ...props.style,
    opacity: fadeAnim, 
    letterSpacing: 5        // Bind opacity to animated value
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
          toValue: 0.6,
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

function Page1(props) {
  return (
    <ImageBackground source={require('../../assets/background/background.png')} style={styles.image}>

      <SafeAreaView style={styles.backBtn} >
          <Button title="←" color = "#008080" onPress={() => props.navigation.navigate("Tutorial")}/>
          <Text>Page 1</Text>
      </SafeAreaView>
        
      
        <SafeAreaView style={styles.wordsCont}>
        <Anime time = '5000' Xpos ='200' Ypos = '200'>
        <Text style={[{color:'#deccda'}, styles.wordsQ]}>?</Text>
        </Anime>
        <Anime time = '5000' Xpos ='300' Ypos = '500'>
        <Text style={[{color: "#b8ac6e"}, styles.wordsQ]}>?</Text>
        </Anime>
        <Anime time = '5000' Xpos ='-100' Ypos = '500'>
        <Text style={[{color: "#86c9ba"}, styles.wordsQ]}>?</Text>
        </Anime>
        <Anime time = '5000' Xpos ='-100' Ypos = '-100'>
        <Text style={[{color: "#e39e70"}, styles.wordsQ]}>?</Text>
        </Anime>
        <Anime time = '5000' Xpos ='-350' Ypos = '-400'>
        <Text style={[{color: "#c8eae4"}, styles.wordsQ]}>?</Text>
        </Anime>
        <Anime time = '5000' Xpos ='20' Ypos = '400'>
        <Text style={[{color: "#a5943c"}, styles.wordsQ]}>?</Text>
        </Anime>
        <Anime time = '5000' Xpos ='100' Ypos = '-200'>
        <Text style={[{color: "#3b4d61"}, styles.wordsQ]}>?</Text>
        </Anime>
        </SafeAreaView>
    
      <SafeAreaView style={styles.container}>
    
      <SafeAreaView style={styles.container}>
        <FadeInView time='2000'>
        <Text style={[{color: "#3b4d61"}, styles.words]}>ask your question</Text>
        </FadeInView>
        </SafeAreaView>
        <SafeAreaView style={styles.bottom}> 
          <FadeInView time = '8000'>
            <TouchableOpacity onPress={() => props.navigation.navigate("Page2")}>
              < Text style={styles.fwrdBtn}>→</Text>
            </TouchableOpacity>
          </FadeInView>

        </SafeAreaView>
      </SafeAreaView>

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

  wordsCont:{
    top: 250
    },

  words: {
    zIndex: 2,
    justifyContent: 'center',
    textAlign: 'center',
    alignSelf: 'center',
    color: '#c8eae4',
    fontSize: 50,
    fontWeight: '900',
    position: 'absolute',
    opacity:1,
    paddingLeft: 8,
    paddingRight: 8,
    textShadowColor: 'gray',
    //textShadowOffset: { width: 20, height: 0},
    textShadowRadius: 10,
    bottom: -60,
    letterSpacing: 5
  },

  wordsQ: {
    zIndex: 2,
    justifyContent: 'center',
    textAlign: 'center',
    alignSelf: 'center',
    borderColor: '#008080',
    fontSize: 200,
    fontWeight: '900',
    position: 'absolute',
    opacity:0.8,
  },

  bottom: {
    zIndex: 5,
    top: '100%',
    opacity: 0.5,
    position: 'absolute'
  },

  backBtn:{
    zIndex: 4,
    flexDirection: 'row',
    marginLeft: 10
    
  },

  fwrdBtn:{
    justifyContent: 'center',
    textAlign: 'center',
    width: 44,
    height: 44,
    borderRadius: 44/2,
    borderWidth: 4,
    alignSelf: 'center',
    borderColor: '#c8eae4',
    color: "#c8eae4",
    fontSize: 30,
  },

  image: {
    flex: 1,
  }
  
});



export default Page1;