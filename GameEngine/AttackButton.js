import React, { Component } from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('screen');

export default class AttackButton extends Component {
  render() {
    return (
      <Image style={styles.size} source={require('../assets/images/attackbutton.png')} />
    );
  }
}

console.log(width)

const styles = StyleSheet.create({
  size: {
    width: 75,
    height: 75,
    left: width - width / 2 - 25,
    top: height - height / 4,
  },

});

