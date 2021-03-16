import React from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={{ padding: 50 }}>
      <View>
        <TextInput
          placeholder="Course Goal"
          style={{ borderColor: 'black', borderWidth: 1, padding: 10 }}
        />
        <Button title="ADD" />
      </View>
    </View>
  );
}

// A React Native app is all about using components and then adding the right layout to
// the components.

const styles = StyleSheet.create({});
