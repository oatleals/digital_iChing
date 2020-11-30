import React, {useState, useEffect} from "react";
import { SafeAreaView, ImageBackground, Button, Text, StyleSheet, Image} from "react-native";

function HexagramLoad(props) {

    const [strHex, setStrHex] = useState()
    const [strUserInput, setStrUserInput] = useState()
    const [strHexLines, setStrHexLines] = useState()

    var {hexData} = props.route.params

    const load = () => {

        hexData = JSON.parse(hexData)

        setStrHex(hexData.hexagram)
        setStrUserInput(hexData.question)
        setStrHexLines(hexData.hexagramLines) 
        
    }
    
    useEffect(() => {
        load()
    }, [])
    
  return (
    <ImageBackground source={require('../assets/background/background.png')} style={styles.backgroundImage}>
    <SafeAreaView style={styles.container}>
        
      <Text style = {styles.questionTitle}> {strUserInput} </Text>
      <Image source = {require("../assets/hex/Hex01_Character.png")} style = {styles.hexChar} />

      <Text style = {styles.hexTitle}>Cast hexagram: </Text>
      <Text style = {styles.item}>{strHex}</Text>

      <Text>
        {strHexLines}
      </Text>

      <Button style = {styles.buttonContainer} title="Go Home" color = "#008080" onPress = {() => props.navigation.navigate("Home")} />        
    
    </SafeAreaView>
  </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  hexTitle: {
    fontSize: 25,
    marginBottom: 5,
    marginTop: 5
  },
  questionTitle: {
    fontSize: 20,
    marginBottom: 15
  },
  hexText: {
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    shadowOffset: { width: 0, height: 2 }, //experimental hehe
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  item: {
    backgroundColor: '#008080',
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 10,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  hexChar: {
    width: 150,
    height: 150,
    flex: 0.5,
    resizeMode: "contain",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  buttonContainer: {
    padding: 10
  }
})


export default HexagramLoad