import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import AllFoodCont from "./containers/AllFoodCont";
import ToGetCont from "./containers/ToGetCont";
import InBasketCont from "./containers/InBasketCont";

export default function App() {
  const [allFood, setAllFood] = useState([
    { id: 1, name: "Apples", toGet: false, inBasket: false },
    { id: 2, name: "Tofu", toGet: true, inBasket: true },
    { id: 3, name: "Milk, Oat", toGet: true, inBasket: false },
  ]);

  const toggleToGet = (food) => {
    const allFoodCopy = [...allFood];
    for (let i in allFoodCopy) {
      if (allFoodCopy[i].name === food.name) {
        allFoodCopy[i].toGet = !allFood[i].toGet;
        setAllFood(allFoodCopy);
      }
    }
    console.log(food);
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
