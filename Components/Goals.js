import React, { Component, useEffect } from "react";
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
import { setGameRunning } from '../GameEngine/Global';


const Goals = (props) => {
  const { handleSubmit, register, setValue } = useForm();

  useEffect(() => {
    register("goalName");

    props.fetchGoals();
  }, [register]);

  // const functionOne = () => {
  //   props.removeGoal(goal.id)
  // }

  // const functionTwo = () => {

  // }

  // const [clear, setClear] = useState("")

  // const functionOne = (text) => setValue("goalName", text);

  // const functionTwo = () => {

  // }

  // const [value, onChangeText] = React.useState("Placeholder!");
  setGameRunning(false);

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/images/game_background_1.png")}
    >
      <View style={styles.container}>
        <View style={styles.mini1}>
          <Text style={styles.goalHeading}>YOUR CURRENT GOALS</Text>
          <Text style={styles.info}>
            Press the white button once you've completed a goal {"\n"} Press the
            black button to remove a goal{" "}
          </Text>
        </View>
        <View style={styles.mini2}>
          <View style={styles.goalList}>
            {props.goals.map((goal) => {
              if (!goal.completed) {
                return (
                  <View key={goal.id} style={styles.goalRow}>
                    <Text style={styles.orangeBox}>{goal.name}</Text>
                    <View style={styles.complete}>
                      <Button
                        title="      Complete"
                        textStyle={{ fontSize: 10 }}
                        onPress={() => props.completeGoal(goal.id)}
                      ></Button>
                    </View>
                    <View style={styles.remove}>
                      <Button
                        title="       Remove"
                        onPress={() => props.removeGoal(goal.id)}

                        // onSubmitEditing=
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
        </View>
        <View style={styles.mini3}>
          <View style={styles.addGoal}>
            {/* <Text style={styles.increaseVerticalMargin}>Add A New Goal:</Text> */}
            <TextInput
              placeholder={props.input}
              style={styles.inputBox}
              onChangeText={(text) => setValue("goalName", text)}
              // defaultValue={props.default}
              // onSubmitEditing={props.default}
              // value={""}
              // value={props.default}
              // ref={props.default}
              // value={value}
              ref={(input) => {
                props.default;
              }}
            />
            <View style={styles.topMargin}>
              <Button
                title="ADD"
                onPress={handleSubmit(props.postGoal)}
                // setValue={""}
                // setValue={props.default}
              />
            </View>
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
    alignItems: "center",
    justifyContent: "space-between",
  },
  goalList: {
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  goalRow: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "space-between",
  },
  addGoal: {
    alignItems: "center",
    marginTop: 10,
  },
  increaseVerticalMargin: {
    marginBottom: 50,
  },
  orangeBox: {
    // goals
    backgroundColor: "#37BC93",
    width: 150,
    height: 50,
    textAlign: "center",
    opacity: 0.8,
    borderRadius: 10,
    margin: 10,
  },
  inputBox: {
    backgroundColor: "#7E5ABC",
    opacity: 0.8,
    width: 160,
    height: 60,
    textAlign: "center",
    borderRadius: 10,
  },
  goalHeading: {
    marginTop: 15,
    marginBottom: 20,
    fontSize: 30,
    fontFamily: "Menlo-Regular",
    textAlign: "center",
  },
  mini1: {
    justifyContent: "center",
  },
  info: {
    marginBottom: 10,
    fontSize: 12,
    fontFamily: "Menlo-Regular",
    color: "gray",
    textAlign: "center",
  },
  topMargin: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#F09031",
    // backgroundColor: "#B62FAA",
    width: 80,
    height: 40,
    borderRadius: 200 / 20,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  complete: {
    marginTop: 20,
    backgroundColor: "white",
    opacity: 0.8,
    width: 100,
    height: 40,
    borderRadius: 10,
    marginRight: 10,
    marginBottom: 15,
    width: 40,
    height: 40,
  },
  remove: {
    marginTop: 20,
    backgroundColor: "black",
    opacity: 0.8,
    width: 80,
    height: 40,
    borderRadius: 10,
    marginBottom: 15,
    // margin: 5,
    width: 40,
    height: 40,
  },
});
