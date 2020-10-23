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
import Log from "./Log";
import Sign from "./Sign";
import HomeScreen from "./HomeScreen";

const Stack = createStackNavigator();

export default class Login extends React.Component {
  render() {
    return (
      <NavigationContainer independent={true}>
        <Stack.Navigator>
          <Stack.Screen
            name="LogPage"
            component={Log}
            options={{ title: "Welcome" }}
          />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="SignPage" component={Sign} />
          <Stack.Screen name="UserPage" component={User} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
