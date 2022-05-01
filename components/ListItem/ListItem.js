import React from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";

const ListItem = (props) => {
  return (
    <TouchableWithoutFeedback onPress={props.onItemPressed}>
      <View style={styles.listItem} >
        <Text>{props.placeName}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    padding: 10,
    backgroundColor: "#eee",
    margin: 5,
  },
});

export default ListItem;