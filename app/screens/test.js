//import { StatusBar } from 'expo-status-bar';
import React, { useRef, useEffect }  from 'react';

import { StyleSheet, Text, Animated, View, 
        Image, ImageBackground, 
        ScrollView, SafeAreaView } from 'react-native';

const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0
        
  React.useEffect(() => {
    Animated.timing(
    fadeAnim,
      {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true
      }
      ).start();
  }, [fadeAnim])
        
  return (
  <Animated.View                 // Special animatable View
    style={{
    ...props.style,
    opacity: fadeAnim,         // Bind opacity to animated value
    }}
    >
    {props.children}
  </Animated.View>
  );
}
// Viewing UI
export default function TutorialScreen(props) {

  const handlePress = () => console.log("text pressed");
  console.log(require("./assets/icon.png"));
  return (
    <ImageBackground source={require('./assets/Chen_Thunder.jpg')} style={styles.image}>
      <SafeAreaView style={styles.container}>
      
      <Text style={styles.title}>HOW TO USE THE I-CHING</Text>

      <Text style={styles.sub}> Ponder your future </Text>
      <FadeInView>
        <Text style={styles.ex}>When looking for advice from the I-Ching, try expressing it in a way that allows you to be open to answers rather than a really specific answer
	          examples: “Please give me insight into…” 
        </Text>
      </FadeInView>

    
      <Text style={styles.sub}> Ask your question </Text>
      <FadeInView>
        <Text style={styles.ex}>Your question will be saved in your journal</Text>
      </FadeInView>

      <Text style={styles.sub}> Flip your coin </Text>
      <FadeInView>
        <Text style={styles.ex}>You can choose to flip all 3 the coins at once or one coin at a time</Text>
      </FadeInView>

      <Text style={styles.sub}> See what’s next for you </Text>
      <FadeInView>
        <Text style={styles.ex}>Read your hexagram</Text>   
      </FadeInView>
      
      </SafeAreaView>
   
    </ImageBackground>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: "center",
    alignItems: "center"
 
  },
  backgroundImage: {
    justifyContent: "center",
    alignItems: "center",
    resizeMode: 'cover', // or 'stretch'
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },

  title: {
    color: '#807a58',
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: 50,
    paddingBottom: 40
  },

  sub: {
   textAlign: 'center',
   fontSize: 25,
   letterSpacing: 5,
   paddingBottom: 10
  },

  ex: {
    textAlign: 'center',
    paddingBottom: 20,
    paddingLeft: 50,
    paddingRight: 50,
    fontSize: 20
  }
  
});
