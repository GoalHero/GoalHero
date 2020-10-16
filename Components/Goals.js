import React, { Component, useEffect } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  StatusBar,
  TextInput,
  ImageBackground,
} from 'react-native';
import { useForm, useState } from 'react-hook-form';
import { connect } from 'react-redux';
import { fetchGoals, removeGoal, completeGoal, postGoal } from '../Store/goals';

const Goals = (props) => {
  const { handleSubmit, register, setValue } = useForm();

  useEffect(() => {
    register('goalName');

    props.fetchGoals();
  }, [register]);

  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/images/game_background_1.png')}
    >
      <View style={styles.container}>
        <Text style={styles.goalHeading}>YOUR GOALS</Text>
        <View style={styles.goalList}>
          {props.goals.map((goal) => {
            if (!goal.completed) {
              return (
                <View key={goal.id} style={styles.goalRow}>
                  <Text style={styles.orangeBox}>{goal.name}</Text>
                  <View style={styles.complete}>
                    <Button
                      title="Complete"
                      onPress={() => props.completeGoal(goal.id)}
                    ></Button>
                  </View>
                  <View style={styles.remove}>
                    <Button
                      title="Remove"
                      onPress={() => props.removeGoal(goal.id)}
                    ></Button>
                  </View>

                  {/* <Button
                    title="Complete"
                    onPress={() => props.completeGoal(goal.id)}
                  ></Button> */}
                  {/* <Button
                    title="Remove"
                    onPress={() => props.removeGoal(goal.id)}
                  ></Button> */}
                </View>
              );
            }
          })}
        </View>

        <View style={styles.addGoal}>
          {/* <Text style={styles.increaseVerticalMargin}>Add A New Goal:</Text> */}
          <TextInput
            placeholder={props.input}
            style={styles.inputBox}

            onChangeText={(text) => setValue("goalName", text)}
            defaultValue={props.default}

          />
          <View style={styles.topMargin}>
            <Button title="Add" onPress={handleSubmit(props.postGoal)} />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const mapState = (state) => {
  return {
    goals: state.goals,
    input: "Add New Goal Here ",
    default: "",
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchGoals: (userId) => dispatch(fetchGoals(userId)),
    removeGoal: (id) => dispatch(removeGoal(id)),
    completeGoal: (id) => dispatch(completeGoal(id)),
    postGoal: (values) => dispatch(postGoal(values)),
  };
};

export default connect(mapState, mapDispatch)(Goals);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  goalList: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  goalRow: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "space-between",
  },
  addGoal: {
    alignItems: 'center',
    marginTop: 100,
  },
  increaseVerticalMargin: {
    marginBottom: 50,
  },
  orangeBox: {

    backgroundColor: "#B7BBBE",
    width: 150,
    height: 50,
    textAlign: "center",
    opacity: 0.8,
    // borderRadius: 10,
  },
  inputBox: {
    backgroundColor: "#057BF7",
    opacity: 0.8,
    width: 160,
    height: 60,
    textAlign: "center",
    borderRadius: 10,
  },
  goalHeading: {
    marginBottom: 50,
    fontSize: 30,
  },
  topMargin: {
    marginTop: 20,
    backgroundColor: "#F09031",
    width: 100,
    height: 40,
    borderRadius: 200 / 20,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  complete: {
    marginTop: 20,
    backgroundColor: "#4DC175",
    width: 100,
    height: 40,
    borderRadius: 10,
  },
  remove: {
    marginTop: 20,
    backgroundColor: "#633193",
    width: 80,
    height: 40,
    borderRadius: 10,
    // margin: 5,
  },
});
