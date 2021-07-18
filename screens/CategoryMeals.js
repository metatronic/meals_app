import React from "react";
import { Button, StyleSheet, Text, View, FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import { MEALS } from "../data/dummy-data";

function CategoryMeals(props) {
  const catId = props.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  const displayedMeals = MEALS.filter((meal) =>
    meal.categoryIds.indexOf(catId) >= 0
  );

  function renderMealItem(itemData){
    return<View>
      <Text>
        {itemData.item.title}
      </Text>
    </View>
  }

  return (<View style={styles.screen}>
  <FlatList data={displayedMeals} renderItem={renderMealItem}/>
  </View>);
}

CategoryMeals.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  return {
    headerTitle: selectedCategory.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMeals;
