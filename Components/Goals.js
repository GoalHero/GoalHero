import React, { Component, useEffect } from "react";
import { View, Text, Button, StyleSheet, StatusBar, TextInput } from "react-native";
import { useForm, useState } from "react-hook-form";
import { connect } from "react-redux"
import { fetchGoals, removeGoal, completeGoal, postGoal } from "../Store/goals"
import { fetchUser } from "../Store/user"

let userId = 1;

const Goals = (props) => {
  const { handleSubmit, register, setValue } = useForm();

  useEffect(()=>{
    register("goalName");
    props.fetchUser(userId);
    props.fetchGoals(userId);
  },[register])


  return (
    <View style={styles.container}>
      <Text style={styles.goalHeading}>Goals!</Text>
      <View style={styles.goalList}>
        {props.goals.map((goal) => {
          if (!goal.completed) {
            return (
              <View key={goal.id} style={styles.goalRow}>
                <Text style={styles.orangeBox}>{goal.name}</Text>
                <Button title="Complete" onPress={() => props.completeGoal(goal.id)}></Button>
                <Button title="Remove" onPress={() => props.removeGoal(goal.id)}></Button>
              </View>
            )
          }
        })}
      </View>

      <View style={styles.addGoal}>
        <Text style={styles.increaseVerticalMargin}>Add New Goal:</Text>
        <TextInput placeholder="Input Box" style={styles.inputBox} onChangeText={text => setValue("goalName", text)}/>
        <View style={styles.topMargin}>
          <Button
            title="Add Goal"
            onPress={handleSubmit(props.postGoal)}
          />
        </View>
      </View>
    </View>
  );
};

const mapState = (state) => {
  return {
    goals: state.goals
  }
}

const mapDispatch = (dispatch) => {
  return {
    fetchGoals: (userId) => dispatch(fetchGoals(userId)),
    removeGoal: (id) => dispatch(removeGoal(id)),
    completeGoal: (id) => dispatch(completeGoal(id)),
    postGoal: (values) => dispatch(postGoal(values)),
    fetchUser: (userId) => dispatch(fetchUser(userId))
  }
}

export default connect(mapState, mapDispatch)(Goals);

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
