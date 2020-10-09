import React from "react";
import { Button, Alert, Image, StyleSheet, View } from "react-native";

function ConsultScreen(props) {
  return (
    <View style={styles.background}>
      <View style={styles.consultButton}>
        <Button
          style={styles.consultButton}
          title="Enter a question"
          onPress={() => Alert.prompt("What is your question?")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e0ffff",
  },
});

export default ConsultScreen;
