import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import FoodCardList from "../components/FoodCardList";
import Test from "../components/Test";

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
      <View style={styles.header}>
        <Text style={styles.headerFont}>All Food</Text>
      </View>
      <FoodCardList food={allFood} toggleToGet={toggleToGet}></FoodCardList>
      <View>
        <TextInput
          style={styles.input}
          blurOnSubmit
          value={enteredText}
          onChangeText={textInputHandler}
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
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: "yellow",
    width: "100%",
  },
  headerFont: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
  },
  input: {
    height: 30,
    width: 50,
    textAlign: "center",
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginBottom: 5,
  },
});

export default AllFoodCont;
