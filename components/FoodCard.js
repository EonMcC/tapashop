import React, { useState } from "react";
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
        <View style={styles.card}>
          <View>
            <Text style={styles.cardText}>{food.name}</Text>
          </View>
          <Button title="REMOVE" onPress={handleToggleBasket} />
        </View>
      );
    } else if (showBasketBtn) {
      return (
        <View style={styles.card}>
          <TouchableHighlight onPress={handleToggleToGet}>
            <Text style={styles.cardText}>{food.name}</Text>
          </TouchableHighlight>
          {food.inBasket && (
            <TouchableHighlight style={styles.got} onPress={handleToggleBasket}>
              <Text style={styles.gotText}>GOT</Text>
            </TouchableHighlight>
          )}
          {!food.inBasket && (
            <TouchableHighlight style={styles.get} onPress={handleToggleBasket}>
              <Text style={styles.gotText}>GET</Text>
            </TouchableHighlight>
          )}
        </View>
      );
    } else if (allFoodCont && food.toGet) {
      return (
        <View style={styles.card}>
          <TouchableHighlight onPress={handleToggleToGet}>
            <Text style={styles.cardTextStrike}>{food.name}</Text>
          </TouchableHighlight>
        </View>
      );
    } else {
      return (
        <View style={styles.card}>
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
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    margin: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardToGet: {
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
  cardTextStrike: {
    fontSize: 20,
    textDecorationLine: "line-through",
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
  },
});

export default FoodCard;
