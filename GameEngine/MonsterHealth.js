import React, { useRef, useState, useEffect } from 'react';
import { Text, View, StyleSheet, Animated } from 'react-native';
import { connect } from 'react-redux'



class monsterHealth extends React.Component {
  render() {
    return (
        <View style={styles.healthContainer}>
          <Text>Monster Health</Text>
          <View style={styles.healthBar}>
            <Animated.View style={[StyleSheet.absoluteFill, {}]} />
          </View>
          <Text>{`${this.props.monsterHealth}%`}</Text>
        </View>
      );
    }
};

const mapState = (state) => {
  return {
    monsterHealth: state.game.monsterHealth
  };
};

export default connect(mapState, null)(monsterHealth);

const styles = StyleSheet.create({
  healthContainer: {
    flexDirection: 'column'
  },
  healthBar: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: '#000',
    borderWidth: 3,
    borderRadius: 10,
  },
});
