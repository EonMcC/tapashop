import React from "react";
import { View, Text, StyleSheet } from "react-native";
import FoodCardList from "../components/FoodCardList";

const ToGetCont = ({
  allFood,
  toggleToGet,
  toggleBasket,
  toGetCont,
  setAllFood,
}) => {
  let foodList = allFood.filter((food, index) => food.toGet);

  return (
    <View style={styles.toGetCont}>
      <View style={styles.header}>
        <Text style={styles.headerFont}>To Get</Text>
      </View>
      <View>
        <FoodCardList
          food={foodList}
          toggleToGet={toggleToGet}
          showBasketBtn={true}
          toggleBasket={toggleBasket}
          toGetCont={true}
          setAllFood={setAllFood}
        ></FoodCardList>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  toGetCont: {
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

export default ToGetCont;
