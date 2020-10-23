import React, { useRef, useState, useEffect } from 'react';
import { Text, View, StyleSheet, Animated, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { gotMonsterHp } from '../../Store/game';
const { width, height } = Dimensions.get('screen');

class monsterHealth extends React.Component {
  componentDidMount() {
    this.props.setHP();
  }
  render() {
    const health = this.props.monsterHealth >= 0 ? this.props.monsterHealth : 0
    return (
      <View style={styles.healthContainer}>
        <Text style={{ fontFamily: 'Menlo-Regular' }}>
          {'\n'}Monster Health
        </Text>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'white',
            borderColor: '#000',
            borderWidth: 3,
            borderRadius: 10,
            width: (this.props.monsterHealth / 300) * width,
            alignContent: 'center',
          }}
        >
          <Animated.View style={[StyleSheet.absoluteFill, {}]} />
        </View>
        <Text
          style={{ fontFamily: 'Menlo-Regular' }}
        >{`${health} HP`}</Text>
        <Text
          style={{
            fontFamily: 'Menlo-Regular',
            textAlign: 'center',
            fontSize: 12,
          }}
        >
          {'\n'} HOW TO PLAY:{'\n'}
          Tap on the attack button to attack the monster! {'\n'}
          Tap on the left/right sides of the screen to move {'\n'}
          Tap on the top of the screen to jump{' '}
        </Text>
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
    textAlign: 'center',
  },
});
