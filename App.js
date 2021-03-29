import * as React from "react";
import {StyleSheet, View, Button,Image,ImageBackground } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import TutorialScreen0 from './app/screens/TutorialScreen0';

import ConsultScreen from './app/screens/ConsultScreen';
import CoinFlipScreen from './app/screens/CoinFlipScreen';
import AnalysisScreen from './app/screens/AnalysisScreen';
import SearchScreen from './app/screens/SearchScreen';
import HexagramScreen from './app/screens/HexagramScreen';

const Stack = createStackNavigator();
const consultStack = createStackNavigator();
const tutorialStack = createStackNavigator();
const searchStack = createStackNavigator();


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
              title="Search" 
              onPress={() => navigation.navigate("Search")} />
            </View>
        </View>
      </ImageBackground>   
  );
}

const createConsultStack = () =>   //Navigation for the consulting screens
  <consultStack.Navigator>
    <consultStack.Screen name = "Consult" component = {ConsultScreen} options={{ headerShown: false }} /> 
    <consultStack.Screen name = "CoinFlip" component = {CoinFlipScreen} options={{ headerShown: false }} /> 
    <consultStack.Screen name = "Analysis" component = {AnalysisScreen} options={{ headerShown: false }} /> 
  </consultStack.Navigator>


const createTutorialStack = () =>  //Navigation for tutorial screens
  <tutorialStack.Navigator>
    <consultStack.Screen name = "Tutorial" component = {TutorialScreen0} options={{ headerShown: false }}/>
    <consultStack.Screen name = "Page1" component = {Page1} options={{ headerShown: false }}/> 
    <consultStack.Screen name = "Page2" component = {Page2} options={{ headerShown: false }}/> 
    <consultStack.Screen name = "Page3" component = {Page3} options={{ headerShown: false }}/> 
    <consultStack.Screen name = "Page4" component = {Page4} options={{ headerShown: false }}/> 
  </tutorialStack.Navigator>


  const createSearchStack = () => // Navigation for Search screen
  <searchStack.Navigator>
    <searchStack.Screen name = "Search" component = {SearchScreen} options={{ headerShown: false }}/>
    <searchStack.Screen name = "Hexagram" component = {HexagramScreen} options={{ headerShown: false }}/>
  </searchStack.Navigator>



function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}  />
          <Stack.Screen name="Consult" children={createConsultStack} options={{ headerShown: false }}  />
          <Stack.Screen name="Tutorial" children={createTutorialStack} options={{ headerShown: false }}  />
          <Stack.Screen name="Search" children={createSearchStack} options={{ headerShown: false }}  />
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
