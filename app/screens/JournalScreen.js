import React, {useState, useEffect} from "react";
import { StyleSheet, Text, View, ImageBackground,SafeAreaView, Button, StatusBar, FlatList, Alert } from "react-native";
//import {styles} from '../assets/styles/styles'

import AsyncStorage from '@react-native-community/async-storage';


var hexData = null
var hexButton = null

var hexArray = []

function JournalScreen(props) {

  const [hex, setHexArray] = useState([])
  
  const addHex = () => {
    setHexArray(hex => [...hex, hexArray])
  }

  const load = async () => {
    try {
      hexData = await AsyncStorage.getItem("hexList")
      hexButton = JSON.parse(hexData)


      

      for(var item in hexButton) {

        let hexObj = {title: hexButton[item].hexagram, id: hexButton[item].id}
        hexArray.push(hexObj)


        //return <Button title = "hexagram" color = "#008080" onPress = 
        //{() =>props.navigation.navigate("LoadHexagram", {hexData})} />
      }

      console.log(hexArray)

      //addHex(hexArray)

    }
    catch(error) {
      alert(error)
    }
  }

  const remove = async () => {
    try {  
      AsyncStorage.clear();
      /*let hexArray = []

      let storedData = await AsyncStorage.getItem('hexList')
      if(storedData !== null)
      {
        hexArray = JSON.parse(storedData)
      } 

      hexArray.pop()
      await AsyncStorage.setItem('hexList', JSON.stringify(hexArray))

      Alert.alert("Removed all items")
    */
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    load()
   
  }, [])

  
  return(
    <ImageBackground source={require('../assets//background/backgroundGradient.png')} style={styles.backgroundImage}>
      <SafeAreaView style= {styles.container}>

      
        {hex.map( hexagram => {
            return (<Text key = {hexagram.id}>{hexagram.title}</Text>)
          }
        )}
        <View style = {styles.container}>
          <Button title = "View Hexagram" color = "#008080" onPress = 
          {() =>props.navigation.navigate("LoadHexagram", {hexData})} />
        </View>
        
        <Button title = "Remove all" color = "#008080" onPress = {remove}/>

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
    padding: 10,
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