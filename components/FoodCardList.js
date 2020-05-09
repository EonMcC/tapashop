import React, { Component } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import DraggableFlatList from "react-native-draggable-flatlist";
import FoodCard from "./FoodCard";

class FoodCardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.food.map((d, index) => ({
        key: `item-${index}`, // For example only -- don't use index as your key!
        food: d,
        toGet: d.toGet,
        inBasket: d.inBasket,
      })),
    };
  }

  renderItem = ({ item, index, drag }) => {
    return (
      <TouchableOpacity
        style={{
          height: 100,
          width: 300,
          alignItems: "center",
          justifyContent: "center",
        }}
        onLongPress={drag}
        // onPress={console.log(this.props.toggleToGet)}
      >
        <View>
          <FoodCard
            food={item.food}
            key={index}
            toggleToGet={this.props.toggleToGet}
            toggleBasket={this.props.toggleBasket}
            showBasketBtn={this.props.showBasketBtn}
            inBasketCont={this.props.inBasketCont}
            allFoodCont={this.props.allFoodCont}
          ></FoodCard>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
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

export default FoodCardList;

// import React from "react";
// import { View, Text, StyleSheet } from "react-native";
// import FoodCard from "./FoodCard";
// import DraggableFlatList from "react-native-draggable-flatlist";

// const FoodCardList = ({
//   food,
//   toggleToGet,
//   toggleBasket,
//   showBasketBtn,
//   inBasketCont,
//   allFoodCont,
// }) => {
//   let foodList = food.map((food, index) => (
{
  /* <FoodCard
  food={food}
  key={index}
  toggleToGet={toggleToGet}
  toggleBasket={toggleBasket}
  showBasketBtn={showBasketBtn}
  inBasketCont={inBasketCont}
  allFoodCont={allFoodCont}
></FoodCard> */
}
//   ));

//   return (
//     <View style={styles.foodCardList}>
//       <View>{foodList}</View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   foodCardList: {
//     borderColor: "grey",
//     backgroundColor: "#e4e9e3",
//     elevation: 25,
//     shadowColor: "black",
//     shadowOffset: {
//       width: 0,
//       height: 10,
//     },
//     borderWidth: 2,
//     borderRadius: 15,
//     width: "90%",
//     alignItems: "center",
//     marginTop: 10,
//     padding: 20,
//   },
// });

// export default FoodCardList;
