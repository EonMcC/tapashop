import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AllFoodCont from "./containers/AllFoodCont";
import ToGetCont from "./containers/ToGetCont";
import InBasketCont from "./containers/InBasketCont";

export default function App() {
  return (
    <>
      <AllFoodCont></AllFoodCont>
      <ToGetCont></ToGetCont>
      <InBasketCont></InBasketCont>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
