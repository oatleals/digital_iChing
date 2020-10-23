import * as React from "react";
import {StyleSheet, View, Button,Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {styles} from './app/assets/styles/styles';

import JournalScreen from './app/screens/JournalScreen';
import TutorialScreen from './app/screens/TutorialScreen';

import ConsultScreen from './app/screens/ConsultScreen';
import CoinFlipScreen from './app/screens/CoinFlipScreen';
import AnalysisScreen from './app/screens/AnalysisScreen';
import { color } from "react-native-reanimated";

const Stack = createStackNavigator();
const consultStack = createStackNavigator();
const tutorialStack = createStackNavigator();
const journalStack = createStackNavigator();


function HomeScreen({navigation}) {
  return (
    <View style={homeStyle.home}>
    <Image source = {require('./app/assets/IChingLogo.png')} style={styles.logo} />
    <Button title="Consult" 
      onPress={() => navigation.navigate("Consult")} />
    <Button
      title="Tutorial"
      onPress={() => navigation.navigate("Tutorial")}/>
    <Button title="Journal" 
      onPress={() => navigation.navigate("Journal")} />
  </View>
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
    <consultStack.Screen name = "Tutorial" component = {TutorialScreen}/> 
  </tutorialStack.Navigator>


const createJournalStack = () =>  //Navigation for tutorial screens
  <journalStack.Navigator>
    <journalStack.Screen name = "Journal" component = {JournalScreen}/> 
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


const homeStyle = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: "#f0f8ff",
    justifyContent: "center",
    alignItems: "center"
  }
});



export default App;
