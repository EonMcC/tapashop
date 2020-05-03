import React from "react";
import { View, Text, StyleSheet } from "react-native";
import FoodCardList from "../components/FoodCardList";

const AllFoodCont = ({ allFood }) => {
  return (
    <View style={styles.allFoodCont}>
      <View style={styles.header}>
        <Text style={styles.headerFont}>All Food</Text>
      </View>
      <FoodCardList food={allFood}></FoodCardList>
    </View>
  );
};

const styles = StyleSheet.create({
  allFoodCont: {
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

export default AllFoodCont;
