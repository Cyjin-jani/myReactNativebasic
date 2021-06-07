import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function Form() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My TODOs</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 38,
    backgroundColor: 'black',
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
