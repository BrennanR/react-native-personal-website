import React, { Component } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

const styles = StyleSheet.create({
  main: {
    // Set margin horizontal negative and padding horizontal to offset it so that the text still lines up with 
    // our main page padding, but the border sits outside of that (to look stylish).
    marginHorizontal: -5,
    paddingHorizontal: 5,

    marginBottom: 20,
    paddingVertical: 10,
    borderRadius: 2,
    backgroundColor: 'lightgrey'
  },
  companyName: {

  },
  buttonStyle: {
    textAlign: "left",
    // Offset the container padding so our button can manage its own padding in the already offset container.
    marginTop: -10,
  }
});

export default class JobSection extends Component {
  render() {
    return (
      <View style={styles.main}>
        <View><Text>{this.props.headingText}</Text></View>
        <View><Text>{this.props.secondaryText}</Text></View>
      </View>
    )
  }
}