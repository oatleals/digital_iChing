import * as React from "react"
import * as Font from 'expo-font'
import { AppLoading } from 'expo'


import { StyleSheet, View, Button, Image, ImageBackground, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import JournalScreen from './app/screens/JournalScreen';
import loadHexagram from './app//screens/HexagramLoad';

import TutorialScreen0 from './app/screens/TutorialScreen0';


import ConsultScreen from './app/screens/ConsultScreen';
import CoinFlipScreen from './app/screens/CoinFlipScreen';
import AnalysisScreen from './app/screens/AnalysisScreen';
import { useState } from "react/cjs/react.development";

const getFonts = () => {
  return Font.loadAsync({
    'futura-regular': require('./app/assets/fonts/futura.ttf'),
    'futura-bold': require('./app/assets/fonts/Futura-Bold.ttf'),
    'futura-light': require('./app/assets/fonts/Futura_Light_font.ttf'),
    'futura-med': require('./app/assets/fonts/futura_medium_condensed.ttf'),
    'futura-book': require('./app/assets/fonts/Futura_book_font.ttf')
  })
}


const Stack = createStackNavigator();
const consultStack = createStackNavigator();
const tutorialStack = createStackNavigator();
const journalStack = createStackNavigator();


function HomeScreen({ navigation }) {

  return (
    <ImageBackground source={require('./app/assets/background/Alternate_screen.jpg')} style={styles.image}>
      <Text style={{ fontSize: 40, fontFamily: 'futura-bold', color: "#e0ffff", alignSelf: "center", padding: 40 }}>I Ching</Text>
      <View style={styles.home}>
        <Image source={require('./app/assets/logo/IchingKoiLogo.png')} style={styles.logo} />
        <View>
          <Button
            color="#008b8b"
            title="Consult"
            onPress={() => navigation.navigate("Consult")} />
          <Button color="#008b8b"
            title="Tutorial"
            onPress={() => navigation.navigate("Tutorial")} />
          <Button
            color="#008b8b"
            title="Library"
            onPress={() => navigation.navigate("Journal")} />
        </View>
      </View>
    </ImageBackground>
  );
}

const createConsultStack = () =>   //Navigation for the consulting screens
  <consultStack.Navigator>
    <consultStack.Screen name="Consult" component={ConsultScreen} />
    <consultStack.Screen name="CoinFlip" component={CoinFlipScreen} />
    <consultStack.Screen name="Analysis" component={AnalysisScreen} />
  </consultStack.Navigator>


const createTutorialStack = () =>  //Navigation for tutorial screens
  <tutorialStack.Navigator>
    <consultStack.Screen name="Tutorial" component={TutorialScreen0} options={{ headerShown: false }} />
  </tutorialStack.Navigator>


const createJournalStack = () =>  //Navigation for tutorial screens
  <journalStack.Navigator>
    <journalStack.Screen name="Journal" component={JournalScreen} />
    <journalStack.Screen name="LoadHexagram" component={loadHexagram} />
  </journalStack.Navigator>


function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false)

  if (fontsLoaded) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Consult" children={createConsultStack} />
          <Stack.Screen name="Tutorial" children={createTutorialStack} />
          <Stack.Screen name="Journal" children={createJournalStack} />
        </Stack.Navigator>
      </NavigationContainer>

    )
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    )
  }

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
