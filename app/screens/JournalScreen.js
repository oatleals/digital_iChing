import React, {useState, useEffect} from "react";
import { StyleSheet, Text, View, ImageBackground,SafeAreaView, Button, StatusBar, Alert } from "react-native";
//import {styles} from '../assets/styles/styles'

import AsyncStorage from '@react-native-community/async-storage';
import { FlatList } from "react-native-gesture-handler";


var hexData = null

function JournalScreen(props) {

  const load = async () => {
    try {
      hexData = await AsyncStorage.getItem("key") 
      console.log(hexData)

    }
    catch(error) {
      alert(error)
    }
  }

  useEffect(() => {
    load()
  }, [])


  
  return(
    <ImageBackground source={require('../assets//background/backgroundGradient.png')} style={styles.backgroundImage}>
      <SafeAreaView style= {styles.container}>

        <View style = {styles.buttonContainer} >
          <Button title="Hexagram 1" color = "#008080" onPress = {() =>props.navigation.navigate("LoadHexagram", {hexData})} />
 
        </View>

      </SafeAreaView>
    </ImageBackground>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#008080',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  Image: {
    width: 200,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    resizeMode: 'cover', // or 'stretch'
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  buttonContainer: {
    justifyContent: "center",
    height: 100
  }
});


export default JournalScreen;