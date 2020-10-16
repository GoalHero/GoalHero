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
import { Provider } from "react-redux";
import { createStore } from "redux";
import store from "./Store";
import { connect } from "react-redux";
import { me } from "./Store/user";
import axios from "axios";

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
        backgroundColor: "#650590",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <HomeStack.Screen
      name="GOAL HERO"
      component={HomeScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#650590"
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
        backgroundColor: "#650590",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <LoginStack.Screen
      name="GOAL HERO"
      component={Login}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#650590"
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
        backgroundColor: "#650590",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <UserStack.Screen
      name="HERO PROFILE"
      component={User}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#650590"
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
        backgroundColor: "#650590",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <PlayStack.Screen
      name="PLAY"
      component={Play}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#650590"
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
        backgroundColor: "#650590",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <GoalsStack.Screen
      name="GOALS"
      component={Goals}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#650590"
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
        backgroundColor: "#650590",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <HeroesStack.Screen
      name="HEROES"
      component={Heroes}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#650590"
            // backgroundColor="#114C9F"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
  </HeroesStack.Navigator>
);

class App extends React.Component {
  constructor() {
    super();
    // this.state={user:{}}
  }

  async componentDidMount() {
    this.props.getMe();
    //  const res = await axios.get('http://localhost:8080/auth/me')
    //  this.setState({user: res.data})
  }

  render() {
    // const {isLoggedIn} = this.props
    if (this.props.isLoggedIn) {
      return (
        <NavigationContainer>
          <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeStackScreen} />
            <Drawer.Screen name="Goals" component={GoalsStackScreen} />
            <Drawer.Screen name="Play" component={PlayStackScreen} />
            <Drawer.Screen name="Hero Profile" component={UserStackScreen} />
            <Drawer.Screen name="Heroes" component={HeroesStackScreen} />
          </Drawer.Navigator>
        </NavigationContainer>
      );
    } else {
      return (
        <NavigationContainer>
          <Drawer.Navigator initialRouteName="Login/Logout">
            <Drawer.Screen name="Login/Signup" component={LoginStackScreen} />
          </Drawer.Navigator>
        </NavigationContainer>
      );
    }
  }
}

const mapLogin = (state) => {
  return {
    user: state.user,
    isLoggedIn: !!state.user.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getMe: () => dispatch(me()),
  };
};

export default connect(mapLogin, mapDispatch)(App);
