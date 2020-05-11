import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import AllFoodCont from "./containers/AllFoodCont";
import ToGetCont from "./containers/ToGetCont";
import InBasketCont from "./containers/InBasketCont";
import Swiper from "react-native-swiper";
import FoodCardList from "./components/FoodCardList";

export default function App() {
  const [allFood, setAllFood] = useState([
    { id: 1, name: "Apples", toGet: false, inBasket: false },
    { id: 2, name: "Tofu", toGet: true, inBasket: true },
    { id: 3, name: "Milk, Oat", toGet: true, inBasket: false },
  ]);
  const [nextID, setNextID] = useState(4);

  const addFood = (name) => {
    const id = nextID;
    const newFood = { id: id, name: name, toGet: false, inBasket: false };
    setAllFood([...allFood, newFood]);
    setNextID(nextID + 1);
  };

  const toggleToGet = (food) => {
    const allFoodCopy = [...allFood];
    for (let i in allFoodCopy) {
      if (allFoodCopy[i].name === food.name) {
        allFoodCopy[i].toGet = !allFood[i].toGet;
        if (allFoodCopy[i].inBasket) {
          allFoodCopy[i].inBasket = false;
        }
        setAllFood(allFoodCopy);
        console.log(allFood[0]);
      }
    }
  };

  const toggleBasket = (food) => {
    const allFoodCopy = [...allFood];
    for (let i in allFoodCopy) {
      if (allFoodCopy[i].name === food.name) {
        allFoodCopy[i].inBasket = !allFood[i].inBasket;
        setAllFood(allFoodCopy);
      }
    }
  };

  return (
    <Swiper
      loop={false}
      showsPagination={false}
      loadMinimal={true}
      loadMinimalSize={0}
    >
      <AllFoodCont
        allFood={allFood}
        toggleToGet={toggleToGet}
        addFood={addFood}
      ></AllFoodCont>
      <ToGetCont
        allFood={allFood}
        toggleToGet={toggleToGet}
        toggleBasket={toggleBasket}
      ></ToGetCont>
      <InBasketCont
        allFood={allFood}
        toggleBasket={toggleBasket}
      ></InBasketCont>
    </Swiper>
  );
}

const styles = StyleSheet.create({});
