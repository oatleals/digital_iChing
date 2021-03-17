import React, {useState, useEffect} from "react";
import { StyleSheet, Text, View, ImageBackground, SafeAreaView, Button, StatusBar, FlatList, Alert, ScrollView, TouchableOpacity } from "react-native";
//import {styles} from '../assets/styles/styles'

import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContext } from "react-navigation";
//import { render } from "react-dom";

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

  return (
    <ImageBackground source={require('../assets//background/backgroundGradient.png')} style={styles.backgroundImage}>
      <SafeAreaView style= {styles.container}>
        {hex.map( hexagram => {
            return (<Text key = {hexagram.id}>{hexagram.title}</Text>)
          }
        )}

        {hex.map ?
          (<View style = {styles.container}>
            <Text style = {{fontFamily: 'futura-bold', fontSize: 30,textAlign: "center", alignContent: 'center'}}>You don't have any journal entries</Text>
          </View>) : null
        }

        <View style = {styles.container}>
          <Button title = "Hai" color = "#008080" onPress = 
          {() =>props.navigation.navigate("LoadHexagram", {hexData})} />
        </View>

      </SafeAreaView>
    </ImageBackground>
  )

  /*const {state, addentry, deleteentry} = useContext()
    
  const load = async () => {
    try{
      let MyEntry = await AsyncStorage.getItem("MyEntry")

      if (MyEntry !== Null){
        AddEntry(entry)
      }
    } catch(err){
      alert(err)
    }
  }

  return(
    <>
        <View style = {styles.container}>
            {state.length == 0 ?(
                <View style = {styles.titleContainer}>
                    <Text styles = {styles.title}>You do not have any Journal Entries</Text>
                </View>
            ):(
                <FlatList
                    data = {state}
                    renderItem = {({item}) => (
                        <List.Item
                            title = {item.entryTitle}
                            description = {item.entryDescription}
                            descriptionNumberOfLine = {1}
                            titleStyle = {styles.listTitle}
                            onPress = {() => deletenote(item.id)}
                        />
                    )}
                    keyExtractor = {item => item.id.toString()}
                />
            )}
    </View>
    </>
  )*/
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
    paddingBottom: 100,
    flex: 1,
    resizeMode: "contain",
    justifyContent: "center"
  },

  buttonContainer: {
    justifyContent: "center",
    height: 100
  },

  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex:1
  },

  title: {
      fontSize: 20
  },

  listTitle: {
      fontSize: 20
  }
})


export default JournalScreen;