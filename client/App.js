import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import AllFoodCont from "./containers/AllFoodCont";
import ToGetCont from "./containers/ToGetCont";
import InBasketCont from "./containers/InBasketCont";
import Swiper from "react-native-swiper";
import Request from "./helpers/requests";

export default function App() {
  const [allFood, setAllFood] = useState([]);

  useEffect(() => {
    getAllFood();
  }, []);

  const getAllFood = () => {
    const request = new Request();
    request
      .get()
      .then((data) => {
        setAllFood(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

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
        setAllFood={setAllFood}
      ></AllFoodCont>
      <ToGetCont
        allFood={allFood}
        toggleToGet={toggleToGet}
        toggleBasket={toggleBasket}
        setAllFood={setAllFood}
      ></ToGetCont>
      <InBasketCont
        allFood={allFood}
        toggleBasket={toggleBasket}
        setAllFood={setAllFood}
      ></InBasketCont>
    </Swiper>
  );
}

const styles = StyleSheet.create({});
