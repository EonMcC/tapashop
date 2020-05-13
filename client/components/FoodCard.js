import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Button,
  TouchableOpacity,
} from "react-native";

const FoodCard = ({
  food,
  toggleToGet,
  toggleBasket,
  showBasketBtn,
  inBasketCont,
  allFoodCont,
  mapFood,
}) => {
  const handleToggleToGet = () => {
    toggleToGet(food);
    mapFood();
  };

  const handleToggleBasket = () => {
    toggleBasket(food);
    mapFood();
  };

  const cardDisplay = () => {
    if (showBasketBtn && inBasketCont) {
      return (
        <View style={styles.card}>
          <View>
            <Text style={styles.cardText}>{food.name}</Text>
          </View>
          <TouchableHighlight style={styles.got} onPress={handleToggleBasket}>
            <Text style={styles.gotText}>REMOVE</Text>
          </TouchableHighlight>
        </View>
      );
    } else if (showBasketBtn) {
      return (
        <TouchableOpacity onPress={handleToggleBasket}>
          <View style={styles.card}>
            <Text
              style={food.inBasket ? styles.cardTextStrike : styles.cardText}
            >
              {food.name}
            </Text>
            <TouchableHighlight style={styles.got} onPress={handleToggleToGet}>
              <Text style={styles.gotText}>REMOVE</Text>
            </TouchableHighlight>
          </View>
        </TouchableOpacity>
      );
    } else if (allFoodCont && food.toGet) {
      return (
        <TouchableOpacity onPress={handleToggleToGet}>
          <View style={styles.cardToGet}>
            <Text style={styles.cardTextStrike}>{food.name}</Text>
          </View>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity onPress={handleToggleToGet}>
          <View style={styles.card}>
            <Text style={styles.cardText}>{food.name}</Text>
          </View>
        </TouchableOpacity>
      );
    }
  };

  return cardDisplay();
};

const styles = StyleSheet.create({
  card: {
    borderColor: "grey",
    backgroundColor: "white",
    width: 300,
    borderWidth: 1,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    margin: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    shadowColor: "green",
    elevation: 10,
  },
  cardToGet: {
    borderColor: "grey",
    backgroundColor: "white",
    width: 300,
    borderWidth: 1,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    margin: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    opacity: 0.5,
    elevation: 10,
  },
  cardText: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "sans-serif-thin",
  },
  cardTextStrike: {
    fontSize: 20,
    textDecorationLine: "line-through",
    fontFamily: "sans-serif-thin",
  },
  got: {
    borderRadius: 10,
    backgroundColor: "#31aa31",
    padding: 7,
  },
  get: {
    borderRadius: 10,
    backgroundColor: "#a11c1c",
    padding: 7,
  },
  gotText: {
    color: "white",
    fontFamily: "sans-serif-thin",
  },
});

export default FoodCard;
