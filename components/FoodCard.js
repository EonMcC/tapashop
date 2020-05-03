import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Button,
} from "react-native";
import { getCurrentFrame } from "expo/build/AR";

const FoodCard = ({
  food,
  toggleToGet,
  toggleBasket,
  showBasketBtn,
  inBasketCont,
}) => {
  const handleToggleToGet = () => {
    toggleToGet(food);
  };

  const handleToggleBasket = () => {
    toggleBasket(food);
  };

  const cardDisplay = () => {
    if (showBasketBtn && inBasketCont) {
      return (
        <View style={food.toGet ? styles.cardToGet : styles.card}>
          <View>
            <Text style={styles.cardText}>{food.name}</Text>
          </View>
          <Button title="+/-" onPress={handleToggleBasket} />
        </View>
      );
    } else if (showBasketBtn) {
      return (
        <View style={food.toGet ? styles.cardToGet : styles.card}>
          <TouchableHighlight onPress={handleToggleToGet}>
            <Text style={styles.cardText}>{food.name}</Text>
          </TouchableHighlight>
          <View
            style={food.inBasket ? styles.btnInBasket : styles.btnNotBasket}
          >
            <Button title="+/-" onPress={handleToggleBasket} />
          </View>
        </View>
      );
    } else {
      return (
        <View style={food.toGet ? styles.cardToGet : styles.card}>
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
  cardToGet: {
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
  btnInBasket: {
    borderColor: "green",
    borderWidth: 2,
  },
  btnNotBasket: {},
});

export default FoodCard;
