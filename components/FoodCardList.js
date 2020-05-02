import React from "react";
import { View, Text, StyleSheet } from "react-native";
import FoodCard from "./FoodCard";

const FoodCardList = ({ allFood }) => {
  let allFoodMapped = () => {
    let mappedFood = allFood.map((food) => {
      return food;
    });
  };
  return (
    <>
      <Text>Food Card List</Text>
      <FoodCard>{allFoodMapped}</FoodCard>
    </>
  );
};

const styles = StyleSheet.create({});

export default FoodCardList;
