import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image, Button, TextInput,TouchableHighlight,Alert } from "react-native";
import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import User from './User'
import { useForm } from "react-hook-form";
import axios from 'axios'


const  gg = async()=>{

//await axios.delete('http://localhost:3333/2')

const data = await axios.get('https://grace-cheese-prime.herokuapp.com/api/cheeses')
console.log(data.data.length)
}






const Stack = createStackNavigator();
console.log('2222')
gg()
const Log = ({ navigation }) => {







  
  const { handleSubmit, register, setValue } = useForm();
  const onSubmit = values => alert(values.email);

  useEffect(()=>{
    register("email");
    register("password");
  },[register])
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Start Your GoalHero Journey!</Text>
      <TextInput placeholder="Email:" style={styles.textInputStyle} onChangeText={text=>setValue("email",text)}/>
      <TextInput
        placeholder="Password:"
        password={true}
        style={styles.textInputStyle}
        onChangeText={text=>setValue("password",text)}
      />

      <View style={styles.buttonStyle}>
      {/* navigation.navigate("UserPage") */}
        <Button
          title="Login"
          onPress={handleSubmit(onSubmit)}
        />
      </View>
      <View style={styles.buttonStyle}>
        <Button
          title="Signup"
          onPress={() => navigation.navigate("SignPage")}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
};
const Sign = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Sign Up!</Text>
      <TextInput placeholder="Name:" style={styles.textInputStyle} />
      <TextInput placeholder="Email:" style={styles.textInputStyle} />
      <TextInput
        placeholder="Password:"
        password={true}
        style={styles.textInputStyle}
      />
      <View>{/* {heros.map(hero,index)=>{
return(
    <Image />
)
}} */}</View>

      <View style={styles.buttonStyle}>
      <Button
          title="Signup"
          onPress={() => navigation.navigate("LogPage")}
        />
       
      </View>

      <StatusBar style="auto" />
    </View>
  );
};

export default class Login extends React.Component {
  render() {
    return (
      <NavigationContainer independent={true}>
        {/* Rest of your app code */}

        <Stack.Navigator>
          <Stack.Screen
            name="LogPage"
            component={Log}
            options={{ title: "Welcome" }}
          />

          <Stack.Screen name="SignPage" component={Sign} />
          <Stack.Screen name="UserPage" component={User} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

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
