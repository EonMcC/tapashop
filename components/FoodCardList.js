import React from "react";
import { View, Text, StyleSheet } from "react-native";
import FoodCard from "./FoodCard";

const FoodCardList = ({
  food,
  toggleToGet,
  toggleBasket,
  showBasketBtn,
  inBasketCont,
}) => {
  let foodList = food.map((food, index) => (
    <FoodCard
      food={food}
      key={index}
      toggleToGet={toggleToGet}
      toggleBasket={toggleBasket}
      showBasketBtn={showBasketBtn}
      inBasketCont={inBasketCont}
    ></FoodCard>
  ));

  return (
    <View style={styles.foodCardList}>
      <View>{foodList}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  foodCardList: {
    borderColor: "grey",
    borderWidth: 1,
    width: "90%",
    alignItems: "center",
    marginTop: 10,
    padding: 20,
  },
});

export default FoodCardList;
