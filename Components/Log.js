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
  ImageBackground,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import User from "./User";
import { useForm } from "react-hook-form";
import axios from "axios";
import {connect} from 'react-redux'
import {auth,me} from '../Store/user'

const Log = (props) => {
    

  const { handleSubmit, register, setValue } = useForm();
  const onSubmit = async (values) => {
    try {
      const formName = "login";
      const email = values.email;
      const password = values.password;
      await props.login(email, password, formName);

      const res = await axios.get("http://localhost:8080/auth/me");
      //  console.log("res.data",res.data)
      //console.log("&&&&&",props.user,"^^^^^^^^^^^")
      if (!res.data) throw new Error();
      Alert.alert("Congratulations");
      props.navigation.navigate("HomeScreen");
    } catch (error) {
      Alert.alert("Invalid Input");
    }
  };

  useEffect(() => {
props.getMe()
    register("email");
    register("password");
  }, [register]);
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/images/game_background_1.png")}
    >
      <View style={styles.container}>
        {/* <Text style={styles.welcome}>Start Your GoalHero Journey ??!</Text> */}
        <Image
          style={{ width: 360, height: 140 }}
          source={require("../assets/images/logotest.png")}
        />
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
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 666,
    alignItems: "center",
    // justifyContent: 'center',
  },
  img: {
    width: 55,
    height: 55,
    borderRadius: 200 / 2,
  },

  textInputStyle: {
    marginVertical: 20,
    width: "75%",
    height: 38,
    backgroundColor: "white",
    borderRadius: 10,
  },
  buttonStyle: {
    backgroundColor: "#F09031",
    color: "white",
    width: 200,
    height: 40,
    borderRadius: 200 / 20,
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    flex: 1,
    resizeMode: "cover",
  },
});

const mapLogin = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatch = (dispatch) => {
  return {
    login: (email, password, formName) =>
      dispatch(auth(email, password, formName)),
  };
};


const mapLogin = state => {
    return {
     
      user: state.user
    }
  }
  
  const mapDispatch = dispatch => {
   
    return {
    
     login:(email, password, formName)=>
        dispatch(auth(email, password, formName)),
        getMe:()=>dispatch (me())
      
    }
  }
  




  export default connect(mapLogin, mapDispatch)(Log)

