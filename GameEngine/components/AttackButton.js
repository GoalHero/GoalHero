import React, { Component } from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('screen');

export default class AttackButton extends Component {
  render() {
    return (
      <Image
        pointerEvents="none"
        style={styles.size}
        source={require('../assets/Melee.png')}
      />
    );
  }
}

const styles = StyleSheet.create({
  size: {
    position: 'absolute',
    width: 70,
    height: 70,
    left: width - width / 7 - 25,
    top: height - height / 5 + 10,
    zIndex: 2,
  },
});
