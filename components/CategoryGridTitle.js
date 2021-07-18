import React from "react";
import { StyleSheet, Text, TouchableNativeFeedback, View } from "react-native";

function CategoryGridTitle(props) {
  return <View style={styles.gridItem}>
    <TouchableNativeFeedback
      style={{flex:1}}
      onPress={props.onSelect}
    >
      <View style={{ ...styles.container, backgroundColor: props.color }}>
        <Text style={styles.title} numberOfLines={2}>
          {props.itemData.item.title}
        </Text>
      </View>
    </TouchableNativeFeedback>
  </View>;
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    padding: 10,
    height: 150,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    padding: 15,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    shadowColor: "black",
    elevation: 2,
    borderWidth: 1,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "right",
  },
});

export default CategoryGridTitle;
