import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const GoalItem = ({ itemData }) => {
  return (
    <View style={styles.listItem}>
      <Text>{itemData.item.value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  },
});
