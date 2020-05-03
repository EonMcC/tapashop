import React from "react";
import { View, Text, StyleSheet } from "react-native";

const FoodCard = ({ food }) => {
  return (
    <View style={food.toGet ? styles.card : styles.cardCheck}>
      <Text style={styles.cardText}>{food.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderColor: "grey",
    width: 300,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    margin: 5,
  },
  cardCheck: {
    borderColor: "green",
    width: 300,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    margin: 5,
    opacity: 0.5,
  },
  cardText: {
    fontSize: 20,
  },
});

export default FoodCard;
