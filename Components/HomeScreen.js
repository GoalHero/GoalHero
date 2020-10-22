import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  StatusBar,
  Image,
  ImageBackground,
} from 'react-native';
import axios from 'axios';
import { connect } from 'react-redux';
import { me } from '../Store/user';
import { fetchHero } from '../Store/hero';
import { Audio } from "expo-av"; 

class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      isPlay: true 
    }
    this.backgroundSound = null;
  }


  async componentDidMount() {
    this.props.getMe();
    try {
      this.backgroundSound = new Audio.Sound(); 
      await this.backgroundSound.loadAsync(
        require("../Sound/battleMusic/battle.mp3")
      )
      await this.backgroundSound.setIsLoopingAsync(true); 
      await this.backgroundSound.playAsync()
    } catch (error) {
      console.log("there was an issue play the backgroundMusic sounds: ", error)
    }

    //this.props.getMe();
    this.props.fetchHero();
    this.props.fetchUser();
  }

  pauseMusic() {
    if (this.state.isPlay) {
      this.setState({
        isPlay: false
      })
      this.backgroundSound.stopAsync()
    }
    else {
      this.backgroundSound.playAsync()
      this.setState({
        isPlay: true
      })
    }
  }
  render() {
    const im = 'logotest.png';
    return (
      <ImageBackground
        style={styles.background}
        source={require('../assets/images/game_background_1.png')}
      >
        <View style={styles.container}>
          <Image
            style={{ width: 360, height: 140 }}
            source={require('../assets/images/' + im)}
          />
          <Text style={styles.body}>
            <Text>
              The village needs a hero to fight the monsters! {'\n'}
              Will you be the hero they need? {'\n\n\n'}
              Go to the GOALS page and set personal goals. {'\n'}
            </Text>
            <Text style={{ color: 'black', fontStyle: 'italic' }}>
              Finally start and finish that book. Work towards mastering a new
              yoga pose. Wake up early for a run every day for a week. Finish
              that last project you left behind. {'\n\n\n'}
            </Text>
            <Text>
              Every time you complete a goal, your hero {'\n'} will become
              stronger. Go to the PLAY page to fight the monster. Once you
              defeat the {'\n'}monster, a new hero awaits your help! {'\n\n\n'}
            </Text>
            <Text>It's time to train yourself to be your own hero.</Text>
          </Text>
          <View>
            <Text>{'\n\n\n'}</Text>
          </View>
        </View>
        <Button title="pause" style={styles.button} onPress={() => this.pauseMusic()}> pause </Button>
      </ImageBackground>
    );
  }
}

const mapLogin = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getMe: () => dispatch(me()),
    fetchUser: () => dispatch(me()),
    fetchHero: () => dispatch(fetchHero()),
  };
};

export default connect(mapLogin, mapDispatch)(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    color: 'purple',
  },
  header: {
    justifyContent: 'center',
    fontSize: 20,
    padding: 30,
    color: 'black',
  },
  body: {
    fontSize: 12,
    textAlign: 'center',
    backgroundColor: '#6A7B89',
    padding: 10,
    borderRadius: 20,
    opacity: 0.7,
    fontWeight: 'bold',
    fontFamily: 'Menlo-Regular',
    color: 'white',
  },
  button: {
   width: 100, 
   height: 50, 
   textAlign: 'center'
  }, 
  logo: {
    width: 280,
    height: 280,
    marginLeft: '20%',
    marginTop: '10%',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
});
