import React, { useRef, useState, useEffect } from "react";
import { Text, View, StyleSheet, Animated, Dimensions } from "react-native";
import { connect } from "react-redux";
import { gotCharHealth } from "../../Store/game";
const { width, height } = Dimensions.get("screen");

class healthBar extends React.Component {
  componentDidMount() {
    this.props.setHP();
  }
  render() {
    const health = this.props.charHealth >= 0 ? this.props.charHealth : 0;
    return (
      <View style={styles.healthContainer}>
        <Text style={{ fontFamily: "Menlo-Regular" }}>Hero Health</Text>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "white",
            borderColor: "#000",
            borderWidth: 3,
            borderRadius: 10,
            width: (this.props.charHealth / 300) * width,
          }}
        >
          <Animated.View style={[StyleSheet.absoluteFill, {}]} />
        </View>
        <Text style={{ fontFamily: "Menlo-Regular" }}>{`${health} HP`}</Text>
      </View>
    );
  }
}

const mapState = (state) => {
  return {
    charHealth: state.game.charHealth,
  };
};
const mapDispatch = (dispatch) => {
  return {
    setHP: () => dispatch(gotCharHealth()),
  };
};
export default connect(mapState, mapDispatch)(healthBar);

const styles = StyleSheet.create({
  healthContainer: {
    flexDirection: "column",
  },
});
