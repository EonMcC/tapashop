import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AllFoodCont from "./containers/AllFoodCont";

export default function App() {
  return <AllFoodCont></AllFoodCont>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
