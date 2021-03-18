import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import { GoalInput } from './components/GoalInput';
import { GoalItem } from './components/GoalItem';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  return (
    <View style={styles.screen}>
      <GoalInput setCourseGoals={setCourseGoals} />
      <FlatList
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem
            onDelete={() => console.log('Does that work?')}
            itemData={itemData}
          />
        )}
        keyExtractor={item => item.uid}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
