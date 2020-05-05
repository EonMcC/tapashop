import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import FoodCard from "./FoodCard";
import DraggableFlatList from "react-native-draggable-flatlist";

const FoodCardList = ({
  food,
  toggleToGet,
  toggleBasket,
  showBasketBtn,
  inBasketCont,
}) => {
  const [mappedFood, setMappedFood] = useState(
    food.map((food, index) => ({
      food: food,
      key: `item-${index}`,
      label: food.name,
      margin: 10,
    }))
  );

  let renderItem = ({ item, index, drag, isActive }) => {
    console.log(mappedFood);
    return (
      <TouchableOpacity
        style={{
          // height: 100,
          // borderColor: "black",
          // borderWidth: 2,
          backgroundColor: isActive ? "green" : item.backgroundColor,
          alignItems: "center",
          justifyContent: "center",
          margin: 10,
        }}
        onLongPress={drag}
      >
        <FoodCard
          food={item.food}
          key={index}
          toggleToGet={toggleToGet}
          toggleBasket={toggleBasket}
          showBasketBtn={showBasketBtn}
          inBasketCont={inBasketCont}
        ></FoodCard>
      </TouchableOpacity>
    );
  };

  // let foodList = food.map((food, index) => (
  //   <FoodCard
  //     food={food}
  //     key={index}
  //     toggleToGet={toggleToGet}
  //     toggleBasket={toggleBasket}
  //     showBasketBtn={showBasketBtn}
  //     inBasketCont={inBasketCont}
  //   ></FoodCard>
  // ));

  return (
    <View style={styles.foodCardList}>
      <DraggableFlatList
        data={mappedFood}
        // extraData={mappedFood}
        renderItem={renderItem}
        keyExtractor={(item, index) => `draggable-item-${item.key}`}
        onDragEnd={({ data }) => setMappedFood({ data })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  foodCardList: {
    flex: 1,
    borderColor: "grey",
    borderWidth: 1,
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    padding: 20,
  },
});

export default FoodCardList;
