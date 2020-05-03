import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Button,
} from "react-native";

const FoodCard = ({ food, toggleToGet, showBasketBtn }) => {
  const [rerender, setRerender] = useState(1);

  const handleToggleToGet = () => {
    toggleToGet(food);
    setRerender(rerender + 1);
  };

  const cardDisplay = () => {
    if (showBasketBtn) {
      return (
        <View style={food.toGet ? styles.cardCheck : styles.card}>
          <TouchableHighlight onPress={handleToggleToGet}>
            <Text style={styles.cardText}>{food.name}</Text>
          </TouchableHighlight>
          <Button title="+" />
        </View>
      );
    } else {
      return (
        <View style={food.toGet ? styles.cardCheck : styles.card}>
          <TouchableHighlight onPress={handleToggleToGet}>
            <Text style={styles.cardText}>{food.name}</Text>
          </TouchableHighlight>
        </View>
      );
    }
  };

  return cardDisplay();
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
    flexDirection: "row",
    justifyContent: "space-between",
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
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardText: {
    fontSize: 20,
  },
});

export default FoodCard;
