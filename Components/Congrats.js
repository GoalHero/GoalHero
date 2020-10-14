import React from "react";
import { View, Text, Button, StyleSheet, StatusBar } from "react-native";

const Congrats = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>
        You have defeated the monster! {"\n\n"}
        You hero is now a 'insert hero here'{" "}
      </Text>
    </View>
  );
};

export default Congrats;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
