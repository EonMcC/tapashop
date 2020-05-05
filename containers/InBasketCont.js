import React from "react";
import { View, Text, StyleSheet } from "react-native";
import FoodCardList from "../components/FoodCardList";

const InBasketCont = ({ allFood, toggleBasket }) => {
  let foodList = allFood.filter((food, index) => food.inBasket);

  return (
    <View style={styles.inBasketCont}>
      <View style={styles.header}>
        <Text style={styles.headerFont}>In Basket</Text>
      </View>
      <FoodCardList
        food={foodList}
        toggleBasket={toggleBasket}
        showBasketBtn={true}
        inBasketCont={true}
      ></FoodCardList>
    </View>
  );
};

const styles = StyleSheet.create({
  inBasketCont: {
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

export default InBasketCont;
