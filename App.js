import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { StyleSheet, Text, View, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./Components/HomeScreen";
import Icon from "react-native-vector-icons/Ionicons";
import Login from "./Components/Login";
import User from "./Components/User";
// import Play from "./GameEngine/Play";
import Goals from "./Components/Goals";
import Play from "./GameEngine/Play";
import Heroes from "./Components/Heroes";

const HomeStack = createStackNavigator();
const LoginStack = createStackNavigator();
const UserStack = createStackNavigator();
const PlayStack = createStackNavigator();
const GoalsStack = createStackNavigator();
const HeroesStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#009387",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#009387"
            // backgroundColor="#114C9F"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
  </HomeStack.Navigator>
);

const LoginStackScreen = ({ navigation }) => (
  <LoginStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#009387",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <LoginStack.Screen
      name="Detail"
      component={Login}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#009387"
            // backgroundColor="#114C9F"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
  </LoginStack.Navigator>
);

const UserStackScreen = ({ navigation }) => (
  <UserStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#009387",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <UserStack.Screen
      name="User"
      component={User}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#009387"
            // backgroundColor="#114C9F"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
  </UserStack.Navigator>
);

const PlayStackScreen = ({ navigation }) => (
  <PlayStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#009387",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <PlayStack.Screen
      name="Play"
      component={Play}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#009387"
            // backgroundColor="#114C9F"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
  </PlayStack.Navigator>
);

const GoalsStackScreen = ({ navigation }) => (
  <GoalsStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#009387",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <GoalsStack.Screen
      name="Goals"
      component={Goals}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#009387"
            // backgroundColor="#114C9F"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
  </GoalsStack.Navigator>
);

const HeroesStackScreen = ({ navigation }) => (
  <HeroesStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#009387",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <HeroesStack.Screen
      name="Heroes"
      component={Heroes}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#009387"
            // backgroundColor="#114C9F"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
  </HeroesStack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Your Goals" component={GoalsStackScreen} />
        <Drawer.Screen name="Play" component={PlayStackScreen} />
        <Drawer.Screen name="Hero Profile" component={UserStackScreen} />
        <Drawer.Screen name="Heroes" component={HeroesStackScreen} />
        <Drawer.Screen name="Login/Logout" component={LoginStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
