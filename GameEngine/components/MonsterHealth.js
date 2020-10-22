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
            width: this.props.monsterHealth,
            alignContent: 'center',
          }}
        >
          <Animated.View style={[StyleSheet.absoluteFill, {}]} />
        </View>
        <Text
          style={{ fontFamily: 'Menlo-Regular' }}
        >{`${this.props.monsterHealth} HP`}</Text>
        <Text
          style={{
            fontFamily: 'Menlo-Regular',
            textAlign: 'center',
            fontSize: 12,
          }}
        >
          {'\n'} HOW TO PLAY:{'\n'}
          Tap on the monster to attack it! {'\n'}
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
