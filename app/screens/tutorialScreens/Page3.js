import { StatusBar } from 'expo-status-bar';
import React, { useRef, useEffect }  from 'react';

import { StyleSheet, Text, Animated, View, 
        Image, ImageBackground, Button,
        ScrollView, SafeAreaView,
        TouchableOpacity} from 'react-native';





const Anime = (props) => {
  const position = new Animated.ValueXY({x:0, y:700})
  React.useEffect(() => {
    Animated.timing(
      position,
      {
        toValue:{x:-208,y:0},
        duration: props.time,
        useNativeDriver: true
      }
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
        toValue: 1,
        duration: props.time,
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

function Page3(props) {
  return (
    <ImageBackground source={require('../../assets/background/background.png')} style={styles.image}>

      <SafeAreaView style={styles.backBtn} >
          <Button title="←" color = "#008080" onPress={() => props.navigation.navigate("Page2")}/>
          <Text>Page 3</Text>
      </SafeAreaView>
        
      <SafeAreaView style={styles.container}>

          <Anime time='1000'>
            <Image source = {require('../../assets/Asset_Mountains_Moon1.png')} style={styles.mount}/>
          </Anime>

          <Anime time='1500'>
            <Image source = {require('../../assets/Asset_Mountains_Moon2.png')} style={styles.mount}/>
          </Anime>

          <Anime time='2000'>
            <Image source = {require('../../assets/Asset_Mountains_Moon3.png')} style={styles.mount}/>
          </Anime>

          <FadeInView time = '3000' style={styles.bottom}>
            
            <TouchableOpacity onPress={() => props.navigation.navigate("Page4")}>
              < Text style={styles.fwrdBtn}>→</Text>
            </TouchableOpacity>
            
          </FadeInView>


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

  bottom: {
    zIndex: 4,
    top: '100%',
    opacity: 0.5,
    position: 'absolute'
  },

  backBtn:{
    zIndex:  4,
    flexDirection: 'row',
    marginLeft: 10
    
  },

  mount: {
    zIndex: 3,
    height: 440,
    width: "100%",
    position: 'absolute'
  },

  fwrdBtn:{
    justifyContent: 'center',
    textAlign: 'center',
    width: 44,
    height: 44,
    borderRadius: 44/2,
    borderWidth: 4,
    alignSelf: 'center',
    borderColor: '#008080',
    color: "#005959",
    fontSize: 30,
  },

  image: {
    flex: 1,
  }
  
});



export default Page3;