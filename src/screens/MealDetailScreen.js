import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {moderateScale, scale, verticalScale} from '../utils/scaling';
import {useSelector, useDispatch} from 'react-redux';
import {toggleFavorite} from '../features/featureSlice';

export default function MealDetailScreen({navigation, route}) {
  const {id} = route.params;
  const [favt, setFavt] = useState(false);
  const dispatch = useDispatch();

  const availableMeals = useSelector(state => state.meals);
  const favoriteMeals = useSelector(state => state.favoriteMeals);

  const selectedMeal = availableMeals.find(meal => meal.id === id);
  const isFavorite = favoriteMeals.some(meal => meal.id === id);

  const toggleHandler = () => {
    dispatch(toggleFavorite(id));
  };

  useEffect(() => {
    navigation.setOptions({
      headerTitle: selectedMeal ? selectedMeal.title : 'Meal Detail',
      headerRight: () => (
        <TouchableOpacity onPress={toggleHandler}>
          <FontAwesome
            name={isFavorite ? 'star' : 'star-o'}
            size={20}
            color={'white'}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation, selectedMeal, isFavorite]);

  if (!selectedMeal) {
    return (
      <View style={styles.screen}>
        <Text>Meal not found!</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={styles.screen}>
        <Image source={{uri: selectedMeal.imgurl}} style={styles.image} />
        <View style={styles.infoContainer}>
          <Text>{selectedMeal.duration}m</Text>
          <Text>{selectedMeal.complexity.toUpperCase()}</Text>
          <Text>{selectedMeal.affordability.toUpperCase()}</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>Ingredients</Text>
          {selectedMeal.ingredient ? (
            selectedMeal.ingredient.map((item, index) => (
              <Text key={index} style={styles.listItems}>
                {item}
              </Text>
            ))
          ) : (
            <Text>No ingredients available</Text>
          )}
          <Text style={styles.title}>Steps</Text>
          {selectedMeal.steps.length > 0 ? (
            selectedMeal.steps.map((step, index) => (
              <Text key={index} style={styles.listItems}>
                {step}
              </Text>
            ))
          ) : (
            <Text>No steps available</Text>
          )}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: scale(15),
    paddingVertical: verticalScale(10),
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: moderateScale(18),
  },
  image: {
    height: verticalScale(200),
    width: '100%',
  },
  container: {
    marginVertical: verticalScale(25),
    paddingHorizontal: scale(15),
  },
  listItems: {
    marginVertical: verticalScale(5),
    padding: verticalScale(5),
    borderWidth: 0.5,
    borderColor: '#ccc',
  },
});
