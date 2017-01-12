import React from 'react';
import { View } from 'react-native';

// Functional Component Section
const CardSection = (props) =>
  <View style={styles.containerStyle}>
    {props.children}
  </View>;

// Styles Section
const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

// Export Section
export { CardSection };
