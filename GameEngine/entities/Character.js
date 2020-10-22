import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { array, object, string } from 'prop-types';
import { connect } from 'react-redux';
import knightImages from '../assets/characterSprites/defaultKnights/defaultKnights.js';
import defaultArcher from '../assets/characterSprites/defaultArcher/defaultArcher.js';
import defaultBarbarian from '../assets/characterSprites/defaultBarbarian/defaultBarbarian.js';
import defaultDarkElf from '../assets/characterSprites/defaultDarkElf/defaultDarkElf.js';
import defaultDruid from '../assets/characterSprites/defaultDruid/defaultDruid.js';
import defaultElemental from '../assets/characterSprites/defaultElemental/defaultElemental.js';
import defaultElf from '../assets/characterSprites/defaultElf/defaultElf.js';
import defaultNinjas from '../assets/characterSprites/defaultNinjas/defaultNinjas.js';
import defaultViking from '../assets/characterSprites/defaultViking/defaultViking.js';
import defaultWizard from '../assets/characterSprites/defaultWizard/defaultWizard.js';
import axios from 'axios';

// let heroNum ;
// (async()=>{
//   const { data } = await axios.get(`http://localhost:8080/api/hero/userHero`);
//  heroNum =data.heroNum
//  console.log(heroNum,'************')
// })()

export let arr = [0];
const allHeros = [
  knightImages,
  defaultBarbarian,
  defaultArcher,
  defaultDruid,
  defaultViking,
  defaultElf,
  defaultDarkElf,
  defaultNinjas,
  defaultWizard,
  defaultElemental,
];

export default class Character extends Component {
  render() {
    // console.log("###******************")
    const width = this.props.size[0];
    const height = this.props.size[1];
    const x = this.props.body.position.x - width / 2;
    const y = this.props.body.position.y - height / 2;
    //  let index = this.props.selectedHero.heroNum-1
    // let whichHero ;
    //   this.props.selectedHero ? whichHero =allHeros[index]:whichHero =knightImages

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
        source={allHeros[arr[0]][`${this.props.state}${this.props.pose}`]}
      />
    );
  }
}

Character.propTypes = {
  size: array,
  body: object,
  color: string,
};

// const mapState = (state) => {
//   return {
//     selectedHero: state.hero,
//   };
// };

//export default connect(mapState, null)(Character);
