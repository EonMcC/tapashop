import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import FoodCardList from "../components/FoodCardList";

const ToGetCont = ({ allFood, toggleToGet, toggleBasket, updateList }) => {
  useEffect(() => {
    setFoodList(allFood);
  });
  const [foodList, setFoodList] = useState(
    allFood.filter((food, index) => food.toGet)
  );

  return (
    <View style={styles.toGetCont}>
      <View style={styles.header}>
        <Text style={styles.headerFont}>To Get</Text>
      </View>
      <FoodCardList
        food={foodList}
        toggleToGet={toggleToGet}
        showBasketBtn={true}
        toggleBasket={toggleBasket}
        updateList={updateList}
      ></FoodCardList>
    </View>
  );
};

const styles = StyleSheet.create({
  toGetCont: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: "yellow",
    width: "100%",
  },
  headerFont: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
  },
});

export default ToGetCont;
