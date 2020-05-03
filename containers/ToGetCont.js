import React from "react";
import { View, Text, StyleSheet } from "react-native";
import FoodCardList from "../components/FoodCardList";

const ToGetCont = ({ allFood, toggleToGet, toggleBasket }) => {
  let foodList = allFood.filter((food, index) => food.toGet);

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
      ></FoodCardList>
    </View>
  );
};

const styles = StyleSheet.create({
  toGetCont: {
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
