import * as React from "react";
import { View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import JournalScreen from './app/screens/JournalScreen'
import TutorialScreen from './app/screens/TutorialScreen'

import ConsultScreen from './app/screens/ConsultScreen'
import CoinFlipScreen from './app/screens/CoinFlipScreen'
import AnalysisScreen from './app/screens/AnalysisScreen'


const homeStack = createStackNavigator();
const consultStack = createStackNavigator();
const tutorialStack = createStackNavigator();
const journalStack = createStackNavigator();


function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1,alignItems: "center", justifyContent: "center" }}>
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
      <homeStack.Navigator>
        <homeStack.Screen name="Home" component={HomeScreen} />
        <homeStack.Screen name="Consult" children={createConsultStack} />
        <homeStack.Screen name="Tutorial" children={createTutorialStack} />
        <homeStack.Screen name="Journal" children={createJournalStack} />
      </homeStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
