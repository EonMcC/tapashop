import React from "react";
import { View, Text, StyleSheet } from "react-native";
import FoodCardList from "../components/FoodCardList";

const InBasketCont = () => {
  return (
    <>
      <Text>In Basket</Text>
      <FoodCardList></FoodCardList>
    </>
  );
};

export default InBasketCont;
