import React, { useRef, useState, useEffect } from 'react';
import { Text, View, StyleSheet, Animated } from 'react-native';

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const monsterHealth = () => {
  let animation = useRef(new Animated.Value(0));
  const [health, setHealth] = useState(100);
  useInterval(() => {
    if (health <= 100 && health !== 0) {
      setHealth(health - 5);
    }
  }, 3000);
  useEffect(() => {
    Animated.timing(animation.current, {
      toValue: health,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [health]);
  // const width = animation.current.interpolate({
  //   inputRange: [0, 100],
  //   outputRange: ["0%", "100%"],
  //   extrapolate: "clamp"
  // })
  return (
    <View style={styles.healthContainer}>
      <Text>Monster Health</Text>
      <View style={styles.healthBar}>
        <Animated.View style={[StyleSheet.absoluteFill, {}]} />
      </View>
      <Text>{`${health}%`}</Text>
    </View>
  );
};

export default monsterHealth;

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
