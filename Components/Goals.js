import React from "react";
import { View, Text, Button, StyleSheet, StatusBar, TextInput } from "react-native";


const Goals = ({ navigation }) => {
  let goals = [
    {name: "goal1"},
    {name: "goal2"},
    {name: "goal3"}
  ]
  return (
    <View style={styles.container}>
      <Text style={styles.goalHeading}>Goals!</Text>
      <View style={styles.goalList}>
        {goals.map(goal => {
          return (
            <View style={styles.goalRow}>
              <Text style={styles.orangeBox}>{goal.name}</Text>
              <Button title="Complete"></Button>
              <Button title="Remove"></Button>
            </View>
          )
        })}
      </View>

      <View style={styles.addGoal}>
        <Text style={styles.increaseVerticalMargin}>Add New Goal:</Text>
        <TextInput placeholder="Input Box" style={styles.inputBox} />
        <View style={styles.topMargin}>
          <Button
            title="Add Goal"
            onPress={() => null}
          />
        </View>
      </View>
    </View>
  );
};

export default Goals;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  goalList: {
    flexDirection: "column",
    justifyContent: "space-evenly"
  },
  goalRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  addGoal: {
    alignItems: "center",
    marginTop: 100
  },
  increaseVerticalMargin: {
    marginBottom: 50
  },
  orangeBox: {
    backgroundColor: "orange",
    width: 120,
    height: 20,
    textAlign: "center"
  },
  inputBox: {
    backgroundColor: "orange",
    width: 160,
    height: 60,
    textAlign: "center"
  },
  goalHeading: {
    marginBottom: 50,
    fontSize: 30
  },
  topMargin: {
    marginTop: 20
  }
});
