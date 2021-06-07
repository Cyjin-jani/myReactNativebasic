import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { globalStyles } from '../styles/global';

import Btn from '../components/Molecules/Button';
import { useState } from 'react';

const reviewDatas = [
  {
    title: 'zelda breath of fresh air',
    rating: 5,
    body: 'lorem ipsum',
    key: '1',
  },
  { title: 'gotta catch them all', rating: 4, body: 'lorem ipsum', key: '2' },
  { title: 'not so final fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
];

export default function Home({ navigation }) {
  const [reviews, setReviews] = useState(reviewDatas);

  const pressHandler = () => {
    navigation.navigate('About');
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}> Home Screen </Text>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ReviewDetails', item)}
          >
            <Text style={globalStyles.titleText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />

      <Btn
        onClick1={() => console.log('hi')}
        onClick2={() => console.log('hello')}
      />
    </View>
  );
}
