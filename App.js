import * as React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ConsultScreen from "./app/assets/screens/ConsultScreen";
import TutorialScreen from "./app/assets/screens/TutorialScreen";
import JournalScreen from "./app/assets/screens/JournalScreen";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="Consult" onPress={() => navigation.navigate("Consult")} />
      <Button
        title="Tutorial"
        onPress={() => navigation.navigate("Tutorial")}
      />
      <Button title="Journal" onPress={() => navigation.navigate("Journal")} />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Consult" component={ConsultScreen} />
        <Stack.Screen name="Tutorial" component={TutorialScreen} />
        <Stack.Screen name="Journal" component={JournalScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
