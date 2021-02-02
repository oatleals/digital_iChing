import * as React from "react";
import {StyleSheet, View, Button,Image,ImageBackground } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import JournalScreen from './app/screens/JournalScreen';
import loadHexagram from './app//screens/HexagramLoad';

import TutorialScreen0 from './app/screens/TutorialScreen0';

import ConsultScreen from './app/screens/ConsultScreen';
import CoinFlipScreen from './app/screens/CoinFlipScreen';
import AnalysisScreen from './app/screens/AnalysisScreen';

const Stack = createStackNavigator();
const consultStack = createStackNavigator();
const tutorialStack = createStackNavigator();
const journalStack = createStackNavigator();


function HomeScreen({navigation}) {
  return (
      <ImageBackground source={require('./app/assets/MainMenu.jpg')} style={styles.image}>
        <View style = {styles.home}>
          <Image source = {require('./app/assets/logo/IchingKoiLogo.png')} style={styles.logo} />
            <View>
              <Button 
              color = "#008080"
              title="Consult" 
              onPress={() => navigation.navigate("Consult")} />
              <Button color = "#008080"
              title="Tutorial"
              onPress={() => navigation.navigate("Tutorial")}/>
              <Button 
              color = "#008080"
              title="Journal" 
              onPress={() => navigation.navigate("Journal")} />
            </View>
        </View>
      </ImageBackground>   
  );
}

const createConsultStack = () =>   //Navigation for the consulting screens
  <consultStack.Navigator>
    <consultStack.Screen name = "Consult" component = {ConsultScreen}/> 
    <consultStack.Screen name = "CoinFlip" component = {CoinFlipScreen}/> 
    <consultStack.Screen name = "Analysis" component = {AnalysisScreen}/> 
  </consultStack.Navigator>


const createTutorialStack = () =>  //Navigation for tutorial screens
  <tutorialStack.Navigator>
    <consultStack.Screen name = "Tutorial" component = {TutorialScreen0}/>   
  </tutorialStack.Navigator>


const createJournalStack = () =>  //Navigation for tutorial screens
  <journalStack.Navigator>
    <journalStack.Screen name = "Journal" component = {JournalScreen}/>
    <journalStack.Screen name = "LoadHexagram" component = {loadHexagram}/>  
  </journalStack.Navigator>



function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Consult" children={createConsultStack} />
          <Stack.Screen name="Tutorial" children={createTutorialStack} />
          <Stack.Screen name="Journal" children={createJournalStack} />
        </Stack.Navigator>
      </NavigationContainer>

  );
}


const styles = StyleSheet.create({
  home: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  
  logo: {
    width: 200,
    height: 200,
    flex: 0.5,
    resizeMode: "contain",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  }


});



export default App;
