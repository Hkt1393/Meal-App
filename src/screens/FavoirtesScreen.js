import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MealList from '../../components/MealList';
import {useSelector} from 'react-redux';

export default function FavoirtesScreen({navigation}) {
  const favoriteMeals = useSelector(state => state.favoriteMeals);

  if (favoriteMeals.length === 0 || !favoriteMeals) {
    return (
      <View style={styles.main}>
        <Text>No favorite food selected !!!</Text>
      </View>
    );
  }

  return <MealList data={favoriteMeals} navigation={navigation} />;
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
