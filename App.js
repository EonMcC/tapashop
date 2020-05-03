import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AllFoodCont from "./containers/AllFoodCont";
import ToGetCont from "./containers/ToGetCont";
import InBasketCont from "./containers/InBasketCont";

export default function App() {
  let allFood = [
    { name: "Apples", toGet: false, inBasket: false },
    { name: "Tofu", toGet: true, inBasket: true },
    { name: "Milk, Oat", toGet: true, inBasket: false },
  ];

  const toggleToGet = (food) => {
    console.log(food);
    allFood[0].toGet = !allFood[0].toGet;
  };

  return (
    <View style={styles.app}>
      <AllFoodCont allFood={allFood} toggleToGet={toggleToGet}></AllFoodCont>
      <ToGetCont allFood={allFood}></ToGetCont>
      <InBasketCont allFood={allFood}></InBasketCont>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});
