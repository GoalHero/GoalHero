import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image,Button } from 'react-native';
import App from './App'


export default function Root() {
  return (

   

      <View style = {styles.container}>
      
      {/* <Text>Open up App your app!</Text> */}
      <App/>

      <StatusBar style="auto" />
    </View>
  )}




  const styles = StyleSheet.create({
    container: {
       flex: 1,
      // flexDirection:"row",
      // flexWrap: "wrap",
      // backgroundColor: '#fff',
      // alignItems: 'center',
      // justifyContent: 'center',
    },
    img:{
  width:55,
  height:55,
  borderRadius:200/2,
    }
    
    
    ,
  });