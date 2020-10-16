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

const Heroes = ({ navigation }) => {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/images/game_background_1.png')}
    >
      <View style={styles.container}>
        <View style={{ height: 20 }}></View>
        <Text style={{ fontFamily: 'EuphemiaUCAS-Bold' }}>
          {'\n\n'}Defeat the enemy to level up to a new hero! {'\n\n'}
        </Text>
        <View style={{ height: 50 }}></View>
        <View style={styles.card}>
          <Image
            style={{
              width: 100,
              height: 100,
            }}
            source={require('../assets/images/knight.png')}
          />
          <Text
            style={{ textAlign: 'center', fontFamily: 'EuphemiaUCAS-Bold' }}
          >
            KNIGHT
          </Text>
        </View>
        <View style={styles.card}>
          <Image
            style={{ width: 100, height: 100 }}
            source={require('../assets/images/barbarian.png')}
          />
          <Text
            style={{ textAlign: 'center', fontFamily: 'EuphemiaUCAS-Bold' }}
          >
            BARBARIAN
          </Text>
        </View>
        <View style={styles.card}>
          <Image
            style={{ width: 100, height: 100 }}
            source={require('../assets/images/archer.png')}
          />
          <Text
            style={{ textAlign: 'center', fontFamily: 'EuphemiaUCAS-Bold' }}
          >
            ARCHER
          </Text>
        </View>
        <View style={styles.card}>
          <Image
            style={{ width: 100, height: 100 }}
            source={require('../assets/images/druid.png')}
          />
          <Text
            style={{ textAlign: 'center', fontFamily: 'EuphemiaUCAS-Bold' }}
          >
            DRUID
          </Text>
        </View>
        <View style={styles.card}>
          <Image
            style={{ width: 100, height: 100 }}
            source={require('../assets/images/viking.png')}
          />
          <Text
            style={{ textAlign: 'center', fontFamily: 'EuphemiaUCAS-Bold' }}
          >
            VIKING
          </Text>
        </View>
        <View style={styles.card}>
          <Image
            style={{ width: 100, height: 100 }}
            source={require('../assets/images/elf.png')}
          />
          <Text
            style={{ textAlign: 'center', fontFamily: 'EuphemiaUCAS-Bold' }}
          >
            ELF
          </Text>
        </View>
        <View style={styles.card}>
          <Image
            style={{ width: 100, height: 100 }}
            source={require('../assets/images/darkelf.png')}
          />
          <Text
            style={{ textAlign: 'center', fontFamily: 'EuphemiaUCAS-Bold' }}
          >
            DARK ELF
          </Text>
        </View>
        <View style={styles.card}>
          <Image
            style={{ width: 100, height: 100 }}
            source={require('../assets/images/ninja.png')}
          />
          <Text
            style={{ textAlign: 'center', fontFamily: 'EuphemiaUCAS-Bold' }}
          >
            NINJA
          </Text>
        </View>
        <View style={styles.card}>
          <Image
            style={{ width: 100, height: 100 }}
            source={require('../assets/images/wizard.png')}
          />
          <Text
            style={{ textAlign: 'center', fontFamily: 'EuphemiaUCAS-Bold' }}
          >
            WIZARD
          </Text>
        </View>
        <View style={styles.card}>
          <Image
            style={{ width: 100, height: 100 }}
            source={require('../assets/images/elemental.png')}
          />
          <Text
            style={{ textAlign: 'center', fontFamily: 'EuphemiaUCAS-Bold' }}
          >
            ELEMENTAL
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Heroes;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    flexDirection: 'column',
    // backgroundColor: "#6A7B89",

    // borderRadius: 100,
    // opacity: 0.7,
    // padding: 5,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
});
