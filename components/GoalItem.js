import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export const GoalItem = ({ itemData, onDelete }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onDelete}>
      <View style={styles.listItem}>
        <Text>{itemData.item.value}</Text>
      </View>
    </TouchableOpacity>
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
