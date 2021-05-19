import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';

export default function App() {
  const [name, setName] = useState('kaka');
  const [person, setPerson] = useState({ name: 'mario', age: 40 });
  const [people, setPeople] = useState([
    { name: 'DK', key: '1' },
    { name: 'RNG', key: '2' },
    { name: 'MAL', key: '3' },
    { name: 'C9', key: '4' },
    { name: 'RNG', key: '5' },
    { name: 'MAL', key: '6' },
    { name: 'C9', key: '7' },
  ]);

  const clickHandler = () => {
    setName('ricardo');
    setPerson({ name: 'maka', age: 50 });
  };

  const pressHandler = (id) => {
    console.log(id);
    setPeople((prevPeople) => {
      return prevPeople.filter((p) => p.key != id);
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      {/* <View style={styles.header}>
        <Text style={styles.boldText}> Hello world! {name} </Text>
        <Text>
          His name is {person.name} and his age is {person.age}{' '}
        </Text>
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
      </View> */}
      <View style={styles.containerBox}>
        {/* FlatList 를 이용한 리스트 보여주기 */}
        {/* flatlist는 처음부터 전체 데이터 가져와서 렌더링 하는게 아니라, 화면에 보여지는 만큼만 가져와서 렌더링 한 뒤, 이후 스크롤을 하면 새로 데이터 그려줌 */}
        {/* 단, data에 들어가는 객체 배열에는 key라는 property가 필요하다 (자동 키 맵핑) 혹은 구별자가 있다면, keyExtractor를 이용하여 key로 만들어 줄 수가 있다. */}
        {/* <FlatList
          keyExtractor={(item) => item.id}
          data={people}
          renderItem={({ item }) => (
            <Text style={styles.item}>{item.name}</Text>
          )}
        /> */}
        {/* grid 처럼 한 줄에 몇개의 칼럼을 보여줄지 나타내는 numColumns 프로퍼티 */}
        <FlatList
          numColumns={2}
          data={people}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => pressHandler(item.key)}>
              <Text style={styles.item}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  containerBox: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
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
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
    marginHorizontal: 10,
  },
});
