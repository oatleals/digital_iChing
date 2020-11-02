import * as React from "react";
import { View, Button, Alert } from "react-native";

function ConsultScreen(props) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <View>
      <Button title="Ask a question" onPress={() => Alert.alert("Ask a question")} />
      <Button title="Find your Hexagram" onPress={() => props.navigation.navigate("CoinFlip")} />
    </View>
  </View>
  );
}

export default ConsultScreen;
