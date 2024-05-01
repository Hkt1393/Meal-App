import {Button, StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import {Category} from '../../components/Data/Data';
import MealList from '../../components/MealList';
import {useSelector} from 'react-redux';

export default function CategoriesMealScreen({navigation, route}) {
  const {categoriesId} = route.params;

  const avilableMeals = useSelector(state => state.filteredMeals);

  const selectedCategory = Category.find(cat => cat.id === categoriesId);

  const displayedMeals = avilableMeals.filter(
    meals => meals.categoryId.indexOf(categoriesId) >= 0,
  );

  useEffect(() => {
    navigation.setOptions({
      headerTitle: selectedCategory.title,
    });
  }, [selectedCategory.title]);

  return <MealList data={displayedMeals} navigation={navigation} />;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
