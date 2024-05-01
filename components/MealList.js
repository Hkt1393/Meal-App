import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import MealItems from './MealItems';

export default function MealList({navigation, data}) {
  const renderItem = ({item}) => {
    return (
      <MealItems
        title={item.title}
        onSelectMeal={() =>
          navigation.navigate('MealDetailScreen', {id: item.id})
        }
        duration={item.duration}
        complexity={item.complexity}
        affordability={item.affordability}
        image={item.imgurl}
      />
    );
  };
  return (
    <View style={styles.screen}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
