import React from "react";
import { View, Text, StyleSheet } from "react-native";
import FoodCard from "./FoodCard";

const FoodCardList = ({ food }) => {
  let foodList = food.map((food, index) => (
    <FoodCard food={food} key={index}></FoodCard>
  ));

  return (
    <View style={styles.foodCardList}>
      <View>{foodList}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  foodCardList: {
    borderColor: "grey",
    borderWidth: 1,
    width: "90%",
    alignItems: "center",
    marginTop: 10,
    padding: 20,
  },
});

export default FoodCardList;
