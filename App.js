import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [name, setName] = useState('kaka');
  const [person, setPerson] = useState({ name: 'mario', age: 40 });

  const clickHandler = () => {
    setName('ricardo');
    setPerson({ name: 'maka', age: 50 });
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.header}>
        <Text style={styles.boldText}> Hello world! {name} </Text>
        {/* <Text>
          His name is {person.name} and his age is {person.age}{' '}
        </Text> */}
        <Text>Enter Name:</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. johe"
          onChangeText={(value) => setName(value)}
          keyboardType="numeric"
          multiline
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="update Name" onPress={clickHandler} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'yellow',
    padding: 20,
  },
  boldText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: 'skyblue',
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  },
});
