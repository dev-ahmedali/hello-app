import React from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native'

const InputPlace = props => {
    return (
        <View style={styles.inputView}>
        <TextInput
          style={{
            width: "80%",
            borderBottomWidth: 1,
            borderColor: "green",
            padding: 7,
          }}
          placeholder="Add a Place"
          value={props.inputValue}
          onChangeText={(text) => props.setInputValue(text)}
        />
        <Button
          title="Add"
          onPress={() => {
            if (props.inputValue !== "") {
              props.setPlaceList([...props.placeList, {
              key:Math.random().toString(), 
              value: props.inputValue,
              image: {
                uri: "https://media.worldnomads.com/travel-safety/bangladesh/dhaka-at-night-gettyimages-519856065.jpg"
              }
            }]);
            }
          }}
        />
      </View>
    );
}
const styles = StyleSheet.create({
    inputView: {
      width: "100%",
      padding: 20,
      marginTop: 50,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
  });
export default InputPlace;