import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import FoodCardList from "../components/FoodCardList";

const AllFoodCont = ({ allFood, toggleToGet, addFood }) => {
  const [enteredText, setEnteredText] = useState("");

  const textInputHandler = (inputText) => {
    setEnteredText(inputText);
  };

  const handleAddFood = () => {
    addFood(enteredText);
    setEnteredText("");
  };

  return (
    <View style={styles.allFoodCont}>
      <View style={styles.headerAndList}>
        <View style={styles.header}>
          <Text style={styles.headerFont}>All Food</Text>
        </View>
        <FoodCardList
          food={allFood}
          toggleToGet={toggleToGet}
          allFoodCont={true}
        ></FoodCardList>
      </View>
      <View style={styles.addFood}>
        <TextInput
          style={styles.input}
          blurOnSubmit
          value={enteredText}
          onChangeText={textInputHandler}
          placeholder="Add new food..."
        ></TextInput>
        <Button title="Add Food" onPress={handleAddFood} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  allFoodCont: {
    flex: 1,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerAndList: {
    width: "100%",
    alignItems: "center",
  },
  header: {
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: "#31aa31",
    width: "100%",
  },
  headerFont: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },
  addFood: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 15,
    width: "90%",
    alignItems: "center",
    marginBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    borderColor: "grey",
    width: "70%",
    borderWidth: 1,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
});

export default AllFoodCont;
