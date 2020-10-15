import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TextInput,
  TouchableHighlight,
  Alert,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import User from "./User";
import { useForm } from "react-hook-form";
import axios from "axios";
import {connect} from 'react-redux'
import {auth} from '../Store/user'

const Log = (props) => {
    
const validate =async()=>{
    const user = await axios.get('http://localhost:8080/auth/me')
    if(user.data)
    props.navigation.navigate("HomeScreen")
}
validate()
   // props.navigation.navigate("SignPage")
  //  console.log(props.route)
  const { handleSubmit, register, setValue } = useForm();
  const onSubmit=async(values)=>{

    try {
        
    
         
          const formName = 'login'
          const email = values.email
          const password = values.password
        await  props.login(email,password,formName)
         
         const res = await axios.get('http://localhost:8080/auth/me')
       //  console.log("res.data",res.data)
         //console.log("&&&&&",props.user,"^^^^^^^^^^^")
         if(!res.data) throw new Error;
          Alert.alert("Congratulations")
          props.navigation.navigate("HomeScreen")
      } catch (error) {
          Alert.alert("Invalid Input")
      }
  }
  

  useEffect(() => {
    register("email");
    register("password");
  }, [register]);
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Start Your GoalHero Journey!</Text>
      <TextInput
        placeholder="Email:"
        style={styles.textInputStyle}
        onChangeText={(text) => setValue("email", text)}
      />
      <TextInput
        placeholder="Password:"
        password={true}
        style={styles.textInputStyle}
        onChangeText={(text) => setValue("password", text)}
      />

      <View style={styles.buttonStyle}>
        <Button title="Login" onPress={handleSubmit(onSubmit)} />
      </View>
      <View style={styles.buttonStyle}>
        <Button
          title="Signup"
          onPress={() => props.navigation.navigate("SignPage")}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 666,
    // flex: 0,
    //   flexDirection:"row",
    //   flexWrap: "wrap",
    backgroundColor: "#dddddd",
    alignItems: "center",
    // justifyContent: 'center',
  },
  img: {
    width: 55,
    height: 55,
    borderRadius: 200 / 2,
  },

  welcome: {
    marginTop: 111,
    fontSize: 28,
    marginBottom: 99,
  },

  textInputStyle: {
    marginTop: 8,
    width: "100%",
    height: 38,
    backgroundColor: "white",
    borderRadius: 100 / 50,
  },
  buttonStyle: {
    backgroundColor: "pink",
    width: 200,
    height: 40,
    borderRadius: 200 / 20,
    marginTop: 55,
    alignItems: "center",
    justifyContent: "center",
  },
});



const mapLogin = state => {
    return {
     
      user: state.user
    }
  }
  
  const mapDispatch = dispatch => {
   
    return {
    
     login:(email, password, formName)=>
        dispatch(auth(email, password, formName))
      
    }
  }
  




  export default connect(mapLogin, mapDispatch)(Log)