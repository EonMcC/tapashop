import React, { Component } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import DraggableFlatList from "react-native-draggable-flatlist";
import FoodCard from "./FoodCard";

class FoodCardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.mapFood();
  }

  mapFood = () => {
    if (this.props.toGetCont) {
      let toGetFoods = this.props.food.filter((food, index) => food.toGet);
      let allFoods = toGetFoods.map((fd) => ({
        id: fd.id,
        name: fd.name,
        inBasket: fd.inBasket,
        toGet: fd.toGet,
        key: `item-${fd.id}`,
      }));
      this.setState({ data: allFoods });
    } else if (this.props.inBasketCont) {
      let toGetFoods = this.props.food.filter((food, index) => food.inBasket);
      let allFoods = toGetFoods.map((fd) => ({
        id: fd.id,
        name: fd.name,
        inBasket: fd.inBasket,
        toGet: fd.toGet,
        key: `item-${fd.id}`,
      }));
      this.setState({ data: allFoods });
    } else {
      let allFoods = this.props.food.map((fd) => ({
        id: fd.id,
        name: fd.name,
        inBasket: fd.inBasket,
        toGet: fd.toGet,
        key: `item-${fd.id}`,
      }));
      this.setState({ data: allFoods });
    }
  };

  handleDragEnd = (data) => {
    console.log(data);
    this.setState({ data });
    this.props.setAllFood(data);
  };

  renderItem = ({ item, index, drag }) => {
    return (
      <TouchableOpacity
        style={{
          height: 100,
          width: 400,
          alignItems: "center",
          justifyContent: "center",
        }}
        onLongPress={drag}
      >
        <View style={styles.draggable}>
          <FoodCard
            food={item}
            key={item.id}
            toggleToGet={this.props.toggleToGet}
            toggleBasket={this.props.toggleBasket}
            showBasketBtn={this.props.showBasketBtn}
            inBasketCont={this.props.inBasketCont}
            allFoodCont={this.props.allFoodCont}
            mapFood={this.mapFood}
          ></FoodCard>
          <Text style={styles.draggableText}> = </Text>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      // <View style={{ flex: 1 }}>
      <DraggableFlatList
        data={this.state.data}
        renderItem={this.renderItem}
        keyExtractor={(item, index) => `draggable-item-${item.key}`}
        onDragEnd={({ data }) => this.handleDragEnd(data)}
        extraData={this.state.data}
      />
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  draggable: {
    flexDirection: "row",
  },
  draggableText: {
    fontSize: 30,
    textAlignVertical: "center",
  },
});

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
