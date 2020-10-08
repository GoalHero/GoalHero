// import 'react-native-gesture-handler';
// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { StyleSheet, Text, View, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./Components/HomeScreen";
import Icon from "react-native-vector-icons";

// const HomeScreen = ({ navigation }) => {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>Home Screen!</Text>
//       <Button
//         title="Go to details"
//         onPress={() => navigation.navigate("Details")}
//       />
//     </View>
//   );
// };

const DetailScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Hi guys! This is the DETAILS Screen!</Text>
    </View>
  );
};

const HomeStack = createStackNavigator();
const DetailStack = createStackNavigator();
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
      // options={{
      //   title: "Home",
      //   // headerLeft: () => (
      //   //   <Icon.Button
      //   //     name="ios-menu"
      //   //     size={25}
      //   //     backgroundColor="#009387"
      //   //     options={() => {
      //   //       navigation.openDrawer();
      //   //     }}
      //   //   ></Icon.Button>
      //   // ),
      // }}
      // options={{
      //   headerLeft: () => (
      //     <Icon.Button
      //       name="ios-menu"
      //       size={25}
      //       // backgroundColor="#7FAFD0"
      //       backgroundColor="#114C9F"
      //       onPress={() => navigation.openDrawer()}
      //     ></Icon.Button>
      //   ),
      // }}
    />
  </HomeStack.Navigator>
);

const DetailStackScreen = ({ navigation }) => (
  <DetailStack.Navigator
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
    <DetailStack.Screen name="Detail" component={DetailScreen} />
  </DetailStack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Detail" component={DetailStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

// const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Details" component={DetailsScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
