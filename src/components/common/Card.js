import React from 'react';
import { View } from 'react-native';

// Functional Component section
const Card = (props) =>
    <View style={styles.containerStyle}>
      {props.children}
    </View>;

// Styles section
const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
};

// Export component
export { Card };
