import React, { useRef, useState, useEffect } from 'react';
import { Text, View, StyleSheet, Animated } from 'react-native';
import { connect } from 'react-redux'

class healthBar extends React.Component {
  render() {
    return (
        <View style={styles.healthContainer}>
          <Text>Char Health</Text>
          <View style={styles.healthBar}>
            <Animated.View style={[StyleSheet.absoluteFill, {}]} />
          </View>
          <Text>{`${this.props.charHealth}%`}</Text>
        </View>
      );
    }
};

const mapState = (state) => {
  return {
    charHealth: state.game.charHealth
  };
};

export default connect(mapState, null)(healthBar);

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
