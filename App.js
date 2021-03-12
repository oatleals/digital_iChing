import * as React from "react";
import {StyleSheet, View, Button,Image,ImageBackground } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import JournalScreen from './app/screens/JournalScreen';
import loadHexagram from './app//screens/HexagramLoad';

import TutorialScreen0 from './app/screens/TutorialScreen0';
import Page1 from './app/screens/tutorialScreens/Page1';
import Page2 from './app/screens/tutorialScreens/Page2';
import Page3 from './app/screens/tutorialScreens/Page3';
import Page4 from './app/screens/tutorialScreens/Page4';

import ConsultScreen from './app/screens/ConsultScreen';
import CoinFlipScreen from './app/screens/CoinFlipScreen';
import AnalysisScreen from './app/screens/AnalysisScreen';





const Stack = createStackNavigator();
const consultStack = createStackNavigator();
const tutorialStack = createStackNavigator();
const journalStack = createStackNavigator();


function HomeScreen({navigation}) {
  return (
      <ImageBackground source={require('./app/assets/MainMenu.jpg')} style={styles.image} >
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
    <consultStack.Screen name = "Tutorial" component = {TutorialScreen0} options={{ headerShown: false }}/>
    <consultStack.Screen name = "Page1" component = {Page1} options={{ headerShown: false }}/> 
    <consultStack.Screen name = "Page2" component = {Page2} options={{ headerShown: false }}/> 
    <consultStack.Screen name = "Page3" component = {Page3} options={{ headerShown: false }}/> 
    <consultStack.Screen name = "Page4" component = {Page4} options={{ headerShown: false }}/> 

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
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Consult" children={createConsultStack} options={{ headerShown: false }}/>
          <Stack.Screen name="Tutorial" children={createTutorialStack} options={{ headerShown: false }} />
          <Stack.Screen name="Journal" children={createJournalStack} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>

  );
}


const styles = StyleSheet.create({
  home: {
    flex: 5,
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
