import React, { useRef, useState, useEffect } from 'react';
import { Text, View, StyleSheet, Animated } from 'react-native';
import { connect } from 'react-redux';
import { gotMonsterHp } from '../../Store/game';

class monsterHealth extends React.Component {
  componentDidMount() {
    this.props.setHP();
  }
  render() {
    // console.log('1111111111',this.props.monsterHealth)
    return (
      <View style={styles.healthContainer}>
        <Text>Monster Health</Text>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'white',
            borderColor: '#000',
            borderWidth: 3,
            borderRadius: 10,
            width: this.props.monsterHealth,
          }}
        >
          <Animated.View style={[StyleSheet.absoluteFill, {}]} />
        </View>
        <Text>{`${this.props.monsterHealth} HP`}</Text>
      </View>
    );
  }
}

const mapState = (state) => {
  return {
    monsterHealth: state.game.monsterHealth,
  };
};

const mapDispatch = (dispatch) => {
  return {
    setHP: () => dispatch(gotMonsterHp()),
  };
};

export default connect(mapState, mapDispatch)(monsterHealth);

const styles = StyleSheet.create({
  healthContainer: {
    flexDirection: 'column',
  },
});
