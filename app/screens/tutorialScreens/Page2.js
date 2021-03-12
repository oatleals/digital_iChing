import { StatusBar } from 'expo-status-bar';
import React, { useRef, useEffect }  from 'react';

import { StyleSheet, Text, View, Animated,
        Image, ImageBackground, Button,
        ScrollView, SafeAreaView,
        TouchableOpacity} from 'react-native';


const FadeInView = (props) => {
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

function Page2(props) {
  return (
    <ImageBackground source={require('../../assets/background/background.png')} style={styles.image}>
      <SafeAreaView style={styles.backBtn} >
          <Button title="←" color = "#008080" onPress={() => props.navigation.navigate("Page1")}/>
          <Text>Page 2</Text>
      </SafeAreaView>
        
      <SafeAreaView style={styles.container}>
 
      <FadeInOut time='1000'>
          <Image source = {require('../../assets/fade1Spark.jpg')}/>
      </FadeInOut>

      <SafeAreaView style={styles.bottom}> 
          
            <TouchableOpacity onPress={() => props.navigation.navigate("Page2")}>
              < Text style={styles.fwrdBtn}>→</Text>
            </TouchableOpacity>
          
        </SafeAreaView>
       
        <SafeAreaView style={styles.container}>
          <FadeInView>
            <Text style={[{color: "#3b4d61"}, styles.words]}>flip</Text>
          </FadeInView>
          <FadeInView>
            <Text style={[{color: "#3b4d61"}, styles.words]}>your</Text>
          </FadeInView>
          <FadeInView>
            <Text style={[{color: "#3b4d61"}, styles.words]}>coin</Text>
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
    top: 100
  },

  words: {
    justifyContent: 'center',
    textAlign: 'center',
    alignSelf: 'center',
    borderColor: '#008080',
    color: "#a5943c",
    fontSize: 40,
    marginBottom: 40,
    fontWeight: '900'
  },

  words1: {
    justifyContent: 'center',
    textAlign: 'center',
    alignSelf: 'center',
    borderColor: '#008080',
    color: "#a5943c",
    fontSize: 30,
    marginBottom: 40,
    marginLeft: 40,
    marginRight: 40,
    fontWeight: '500'
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
    height: "100%",
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



export default Page2;