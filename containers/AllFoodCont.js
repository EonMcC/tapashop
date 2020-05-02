import React from "react";
import { View, Text, StyleSheet } from "react-native";
import FoodCardList from "../components/FoodCardList";

const AllFoodCont = () => {
  let allFood = ["Apples", "Tofu", "Milk, Oat", "Pasta", "Coffee"];
  return (
    <>
      <Text>All Food</Text>
      <FoodCardList allFood={allFood}></FoodCardList>
    </>
  );
};

const styles = StyleSheet.create({});

export default AllFoodCont;
