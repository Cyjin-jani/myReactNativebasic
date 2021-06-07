import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Button({ onClick1, onClick2 }) {
  return (
    <View style={styles.view}>
      <TouchableOpacity style={styles.btn} onPress={onClick1}>
        <Text style={styles.prev}>이전</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={onClick2}>
        <Text style={styles.next}>다음</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  btn: {
    width: 100,
    height: 48,
    backgroundColor: 'blue',
    color: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  prev: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  next: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
