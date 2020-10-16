import React, { useEffect } from 'react';
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
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import User from './User';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { connect } from 'react-redux';
import { auth } from '../Store/user';

const Sign = (props) => {
  const { handleSubmit, register, setValue } = useForm();

  useEffect(() => {
    register('name');
    register('email');
    register('password');
  }, [register]);

  const onSubmit = async (values) => {
    try {
      const formName = 'signup';
      const email = values.email;
      const password = values.password;
      await props.signup(email, password, formName);

      const res = await axios.get('http://localhost:8080/auth/me');
      //  console.log("res.data",res.data)
      //console.log("&&&&&",props.user,"^^^^^^^^^^^")
      if (!res.data) throw new Error();
      Alert.alert('You have succesfully signed up for GoalHero!');
      props.navigation.navigate('HomeScreen');
    } catch (error) {
      Alert.alert('Invalid Input');
    }
  };

  const error = props.error;
  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/images/game_background_1.png')}
    >
      <View style={styles.container}>
        <Image
          style={{ width: 360, height: 140 }}
          source={require('../assets/images/logotest.png')}
        />
        <Text style={styles.welcome}>Sign Up for GoalHero!</Text>
        <TextInput
          placeholder="Name:"
          style={styles.textInputStyle}
          onChangeText={(text) => setValue('name', text)}
        />
        <TextInput
          placeholder="Email:"
          style={styles.textInputStyle}
          onChangeText={(text) => setValue('email', text)}
        />
        <TextInput
          placeholder="Password:"
          password={true}
          style={styles.textInputStyle}
          onChangeText={(text) => setValue('password', text)}
        />
        <View>
          {error && error.response && <View> {error.response.data} </View>}
        </View>

        <View style={styles.buttonStyle}>
          <Button title="Signup" onPress={handleSubmit(onSubmit)} />
        </View>

        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 666,

    alignItems: 'center',
    // justifyContent: "space-evenly",
  },
  img: {
    width: 55,
    height: 55,
    borderRadius: 200 / 2,
  },

  welcome: {
    marginTop: 30,
    fontSize: 20,
    marginBottom: 60,
  },

  textInputStyle: {
    marginTop: 8,
    width: '75%',
    height: 38,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  buttonStyle: {
    backgroundColor: '#F09031',
    width: 200,
    height: 40,
    borderRadius: 200 / 20,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
});

const mapSignup = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatch = (dispatch) => {
  return {
    signup: (email, password, formName) =>
      dispatch(auth(email, password, formName)),
  };
};

export default connect(mapSignup, mapDispatch)(Sign);
