import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTitle from "../components/CategoryGridTitle";

function CategoriesScreen(props) {
  function renderGridItem(itemData) {
    return <CategoryGridTitle
      itemData={itemData}
      onSelect={() =>
        props.navigation.navigate({
          routeName: "CategoryMeals",
          params: {
            categoryId: itemData.item.id,
          },
        })}
      color={itemData.item.color}
    />;
  }

  return (<FlatList
    data={CATEGORIES}
    renderItem={renderGridItem}
    numColumns={2}
  />);
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoriesScreen;
