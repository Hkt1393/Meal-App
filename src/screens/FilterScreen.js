import React, {useEffect, useState, useCallback} from 'react';
import {StyleSheet, Text, View, Switch, TouchableOpacity} from 'react-native';
import {moderateScale, scale, verticalScale} from '../utils/scaling';
import Colors from '../../constants/Colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {filteredMeals} from '../features/featureSlice';
import {useDispatch} from 'react-redux';

export default function FilterScreen({navigation}) {
  const [glutenFree, setGlutenFree] = useState(false);
  const [lactoseFree, setLactoseFree] = useState(false);
  const [vegetarian, setVegetarian] = useState(false);
  const [vegan, setVegan] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={saveFilters}>
          <MaterialIcons name="save" size={28} color="white" />
        </TouchableOpacity>
      ),
    });
  }, [glutenFree, lactoseFree, vegetarian, vegan]);

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: glutenFree,
      lactoseFree: lactoseFree,
      vegetarian: vegetarian,
      vegan: vegan,
    };
    dispatch(filteredMeals(appliedFilters));
  }, [glutenFree, lactoseFree, vegetarian, vegan]);

  const FilterSwitch = ({label, value, onChange}) => {
    return (
      <View style={styles.filterContainer}>
        <Text>{label}</Text>
        <Switch
          value={value}
          onValueChange={onChange}
          trackColor={{true: Colors.primaryColor}}
          thumbColor={Colors.primaryColor}
        />
      </View>
    );
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FilterSwitch
        label="Gluten-Free"
        value={glutenFree}
        onChange={newValue => setGlutenFree(newValue)}
      />
      <FilterSwitch
        label="Lactose-Free"
        value={lactoseFree}
        onChange={newValue => setLactoseFree(newValue)}
      />
      <FilterSwitch
        label="Vegan"
        value={vegan}
        onChange={newValue => setVegan(newValue)}
      />
      <FilterSwitch
        label="Vegetarian"
        value={vegetarian}
        onChange={newValue => setVegetarian(newValue)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: moderateScale(18),
    textAlign: 'center',
    margin: 20,
    color: 'black',
    fontWeight: '600',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: scale(10),
    width: '90%',
    marginVertical: verticalScale(10),
  },
});
