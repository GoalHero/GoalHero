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



export let chooseHeroPicture = [0];

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
  async componentDidMount() {
    const { data } = await axios.get(`https://goal-hero-capstone.herokuapp.com/api/hero/userHero`);
    heroNum = data.heroNum;

    chooseHeroPicture[0] = heroNum - 1;
  }
  render() {
    const width = this.props.size[0];
    const height = this.props.size[1];
    const x = this.props.body.position.x - width / 2;
    const y = this.props.body.position.y - height / 2;

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
        source={
          allHeros[chooseHeroPicture[0]][
            `${this.props.state}${this.props.pose}`
          ]
        }
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
