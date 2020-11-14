import React, {useState} from "react";
import { StyleSheet, Text, View, ImageBackground,SafeAreaView, Button, StatusBar } from "react-native";
//import {styles} from '../assets/styles/styles'

import AsyncStorage from '@react-native-community/async-storage';
import { FlatList } from "react-native-gesture-handler";


var hexData = ""
var questionData = ""

const Data = [
  {
    id: "hexKey",
    hexData: hexData,
  },
];

const Item = ({ hexData }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{hexData}</Text>
  </View>
);

function JournalScreen(props) {

  const [hexagram, setHexagram] = useState()


  
  const fetchData = async () => {
    try {
      let hexData = await AsyncStorage.getItem("hexKey")
      let questionData = await AsyncStorage.getItem("questionKey")
      
      setHexagram(hexData)
      alert(hexData + questionData)

      return hexData, questionData
    }
    catch(error) {
      alert(error)
    }
  }

  const renderItem = ({ item }) => (
    <Item hexData={item.hexData} />

  );

  return(
    <ImageBackground source={require('../assets//background/backgroundGradient.png')} style={styles.backgroundImage}>
      <SafeAreaView style={styles.container}>

        <FlatList
          data={Data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
        
        <Text>{hexagram}</Text>

        <Button title="display data" color = "#008080" onPress = {fetchData} />

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
  }
});


export default JournalScreen;