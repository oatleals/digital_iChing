import React from "react";
import {
  StyleSheet,
  Text,
  Dimensions,
  TextInput,
  Alert,
  SafeAreaView,
  Button,
  Platform,
  StatusBar,
  View,
} from "react-native";

export default function App() {
  console.log("App executed");
  console.log(Dimensions.get("screen"));

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "White",
          width: "100%",
          height: 75,
        }}
      ></View>
      <Text> "I-Ching" </Text>
      <Button
        title="Consult"
        style={{
          backgroundColor: "cornflowerblue",
          width: "100%",
          height: 75,
        }}
        onPress={() =>
          Alert.prompt("Book of change", "Ask a question", (text) =>
            console.log(text)
          )
        }
      />
      <Button
        title="Tutorial"
        color="cornflowerblue"
        onPress={() => alert("This will teach you the ways")}
      />
      <Button
        title="Journal"
        color="cornflowerblue"
        onPress={() => alert("Saving consultation rolls")}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
  },
});
