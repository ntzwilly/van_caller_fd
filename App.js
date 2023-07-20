import React from "react";
import { StyleSheet, View } from "react-native";

const YourApp = () => {
  return (
    <View>
      <View style={styles.blueBox}></View>
      <View style={styles.redBox}></View>
      <View style={styles.purpleBox}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  blueBox: {
    width: 50,
    height: 50,
    backgroundColor: "blue",
  },
  redBox: {
    width: 150,
    height: 50,
    backgroundColor: "red",
  },
  purpleBox: {
    width: 250,
    height: 250,
    backgroundColor: "purple",
  },
});

export default YourApp;
