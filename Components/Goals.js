import React, { Component, useEffect } from "react";
import { View, Text, Button, StyleSheet, StatusBar, TextInput } from "react-native";
import { useForm } from "react-hook-form";
import axios from 'axios';

let goals = [{
  name: 'goal'
}]

const Goals = () => {
  let userId = 1;
  // async componentDidMount() {
  //   let {data: user} = await axios.get(`http://    localhost:8080/api/users/${userId}`)
  //   let goals = user.Goals
  //   this.setState({
  //     goals
  //   })
  // }
  const handleRemove = async(id) => {
    await axios.delete(`http://localhost:8080/api/goals/${id}`)
    let {data: user} = await axios.get(`http://localhost:8080/api/users/${userId}`)
  }
  const handleAdd = async (values) => {
    console.log('userId', userId)
    await axios.post(`http://localhost:8080/api/goals/users/${userId}`, {name: values.goalName})
    let {data: user} = await axios.get(`http://localhost:8080/api/users/${userId}`)
  }
  const handleCompletion = async(id) => {
    await axios.put(`http://localhost:8080/api/goals/${id}`)
    let {data: user} = await axios.get(`http://localhost:8080/api/users/${userId}`)
  }
  const { handleSubmit, register, setValue } = useForm();

  useEffect(()=>{
    register("goalName");
  },[register])

  return (
    <View style={styles.container}>
      <Text style={styles.goalHeading}>Goals!</Text>
      <View style={styles.goalList}>
        {goals.map((goal) => {
          return (
            <View key={goal.id} style={styles.goalRow}>
              <Text style={styles.orangeBox}>{goal.name}</Text>
              <Button title="Complete" onPress={handleSubmit(handleCompletion)}></Button>
              <Button title="Remove" onPress={handleSubmit(handleRemove)}></Button>
            </View>
          )
        })}
      </View>

      <View style={styles.addGoal}>
        <Text style={styles.increaseVerticalMargin}>Add New Goal:</Text>
        <TextInput placeholder="Input Box" style={styles.inputBox} onChangeText={text => setValue("goalName", text)}/>
        <View style={styles.topMargin}>
          <Button
            title="Add Goal"
            onPress={handleSubmit(handleAdd)}
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
