// Import Libraries for making a Component
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

// Make a Component
const Header = (props) => (
  <View style={styles.viewStyle}>
    <Text style={styles.textStyle}>{props.headerText}</Text>
  </View>
);

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#F8F8F8',
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
    height: 60,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    elevation: 2,
    position: 'relative',
  },
  textStyle: {
    fontSize: 20,
  },
});

// Make the component available to other parts of the app
export { Header };
