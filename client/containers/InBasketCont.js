import React from "react";
import { View, Text, StyleSheet } from "react-native";
import FoodCardList from "../components/FoodCardList";

const InBasketCont = ({ allFood, toggleBasket, mapFood, setAllFood }) => {
  let foodList = allFood.filter((food, index) => food.inBasket);

  return (
    <View style={styles.inBasketCont}>
      <View style={styles.header}>
        <Text style={styles.headerFont}>In Basket</Text>
      </View>
      <View>
        <FoodCardList
          food={foodList}
          toggleBasket={toggleBasket}
          showBasketBtn={true}
          inBasketCont={true}
          setAllFood={setAllFood}
        ></FoodCardList>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inBasketCont: {
    flex: 1,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  header: {
    paddingTop: 25,
    paddingBottom: 15,
    backgroundColor: "#31aa31",
    width: "100%",
  },
  headerFont: {
    textAlign: "center",
    fontSize: 35,
    fontWeight: "bold",
    color: "white",
    fontFamily: "sans-serif-thin",
  },
});

export default InBasketCont;
