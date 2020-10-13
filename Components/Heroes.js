import React from "react";
import { View, Text, Button, StyleSheet, StatusBar, Image } from "react-native";

const Heroes = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ height: 20 }}></View>
      <Text>Defeat the enemy to level up to a new hero!</Text>
      <View style={{ height: 50 }}></View>
      <View style={styles.card}>
        <Image
          style={{ width: 100, height: 100 }}
          source={require("../assets/images/knight.png")}
        />
        <Text style={{ textAlign: "center" }}>KNIGHT</Text>
      </View>
      <View style={styles.card}>
        <Image
          style={{ width: 100, height: 100 }}
          source={require("../assets/images/barbarian.png")}
        />
        <Text style={{ textAlign: "center" }}>BARBARIAN</Text>
      </View>
      <View style={styles.card}>
        <Image
          style={{ width: 100, height: 100 }}
          source={require("../assets/images/archer.png")}
        />
        <Text style={{ textAlign: "center" }}>ARCHER</Text>
      </View>
      <View style={styles.card}>
        <Image
          style={{ width: 100, height: 100 }}
          source={require("../assets/images/druid.png")}
        />
        <Text style={{ textAlign: "center" }}>DRUID</Text>
      </View>
      <View style={styles.card}>
        <Image
          style={{ width: 100, height: 100 }}
          source={require("../assets/images/viking.png")}
        />
        <Text style={{ textAlign: "center" }}>VIKING</Text>
      </View>
      <View style={styles.card}>
        <Image
          style={{ width: 100, height: 100 }}
          source={require("../assets/images/elf.png")}
        />
        <Text style={{ textAlign: "center" }}>ELF</Text>
      </View>
      <View style={styles.card}>
        <Image
          style={{ width: 100, height: 100 }}
          source={require("../assets/images/darkelf.png")}
        />
        <Text style={{ textAlign: "center" }}>DARK ELF</Text>
      </View>
      <View style={styles.card}>
        <Image
          style={{ width: 100, height: 100 }}
          source={require("../assets/images/ninja.png")}
        />
        <Text style={{ textAlign: "center" }}>NINJA</Text>
      </View>
      <View style={styles.card}>
        <Image
          style={{ width: 100, height: 100 }}
          source={require("../assets/images/wizard.png")}
        />
        <Text style={{ textAlign: "center" }}>WIZARD</Text>
      </View>
      <View style={styles.card}>
        <Image
          style={{ width: 100, height: 100 }}
          source={require("../assets/images/elemental.png")}
        />
        <Text style={{ textAlign: "center" }}>ELEMENTAL</Text>
      </View>
    </View>
  );
};

export default Heroes;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    flexDirection: "column",
  },
});
