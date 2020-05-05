import React, { Component } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import DraggableFlatList from "react-native-draggable-flatlist";
import FoodCard from "./FoodCard";

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.exampleData,
    };
  }

  exampleData = this.props.food.map((food, index) => ({
    food: food,
    key: `item-${index}`,
    label: food.name,
    margin: 10,
  }));

  renderItem = ({ item, index, drag, isActive }) => {
    return (
      <TouchableOpacity
        style={{
          height: 100,
          borderColor: "black",
          borderWidth: 2,
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
          toggleToGet={this.props.toggleToGet}
        ></FoodCard>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          borderColor: "black",
          borderWidth: 2,
          margin: 10,
          marginTop: 50,
        }}
      >
        {this.exampleData}
        <DraggableFlatList
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => `draggable-item-${item.key}`}
          onDragEnd={({ data }) => this.setState({ data })}
        />
      </View>
    );
  }
}

export default Test;
