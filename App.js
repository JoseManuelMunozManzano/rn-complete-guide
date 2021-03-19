import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';

import { v4 as uuidv4 } from 'uuid';

import { GoalInput } from './components/GoalInput';
import { GoalItem } from './components/GoalItem';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = enteredGoal => {
    if (enteredGoal.length === 0) {
      return;
    }
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { uid: uuidv4(), value: enteredGoal },
    ]);
    setIsAddMode(false);
  };

  const cancelGoalHandler = () => {
    setIsAddMode(false);
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.uid !== goalId);
    });
  };

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput
        visible={isAddMode}
        onAddGoal={addGoalHandler}
        onCancelGoal={cancelGoalHandler}
      />
      <FlatList
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem onDelete={removeGoalHandler} itemData={itemData} />
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
