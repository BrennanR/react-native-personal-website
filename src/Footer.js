import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { siteWideHorizontalPadding } from './styles';

const styles = StyleSheet.create({
  footer: {
    paddingHorizontal: siteWideHorizontalPadding,
    height: 80,
    backgroundColor: "black",
    justifyContent: "center",
  },
  copyrightNotice: {
    fontSize: 18,
    color: "white",
  }
});

export default class Footer extends Component {
  render() {
    return (
      <View style={styles.footer}>
        <Text style={styles.copyrightNotice}>Copyright © {new Date().getFullYear()} Brennan Rauert</Text>
      </View>
    );
  }
}