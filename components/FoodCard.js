import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";

const FoodCard = ({ food, toggleToGet }) => {
  const [rerender, setRerender] = useState(1);

  const handleToggleToGet = () => {
    toggleToGet(food);
    setRerender(rerender + 1);
  };

  return (
    <TouchableHighlight
      style={food.toGet ? styles.cardCheck : styles.card}
      onPress={handleToggleToGet}
    >
      <Text style={styles.cardText}>{food.name}</Text>
    </TouchableHighlight>
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
    borderWidth: 1,
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
