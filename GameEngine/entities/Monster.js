import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { array, object, string } from 'prop-types';
import monsterImages from '../assets/characterSprites/defaultMonsters/defaultMonsters.js';
import monster2Images from '../assets/characterSprites/defaultMonster2/defaultMonster2.js';
import monster3Images from '../assets/characterSprites/defaultMonster3/defaultMonster3.js';
// import store from '../../Store'
import { connect } from 'react-redux';
// const index = store.getState().game.killTimes

export const allMonsters = [monsterImages, monster2Images, monster3Images];
/////////////////////////////
// const whichMonster= allMonsters[index%3]

export default class Monster extends Component {
  
  render() {
    const width = this.props.size[0];
    const height = this.props.size[1];
    const x = this.props.body.position.x - width / 2;
    const y = this.props.body.position.y - height / 2;
    // const whichMonster = allMonsters[this.props.killTimes % 3];
    return (
      <Image
        style={{
          position: 'absolute',
          left: x,
          top: y,
          width: width,
          height: height,
          transform: [{ scaleX: this.props.face }],
        }}
        source={allMonsters[0][`${this.props.state}${this.props.pose}`]}
      />
    );
  }
}

Monster.propTypes = {
  size: array,
  body: object,
  color: string,
};

// const mapState = (state) => {
//   return {
//     killTimes: state.game.killTimes,
//   };
// };

// export default connect(mapState, null)(Monster);
