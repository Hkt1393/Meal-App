import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Category} from '../../components/Data/Data';
import {moderateScale, scale, verticalScale} from '../utils/scaling';

export default function CategoriesScreen({navigation}) {
  const renderGridItem = ({item}) => {
    return (
      <TouchableOpacity
        style={[styles.gridItems, {backgroundColor: item.color}]}
        onPress={() =>
          navigation.navigate('CategoriesMealScreen', {
            categoriesId: item.id,
          })
        }>
        <View>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      numColumns={2}
      data={Category}
      renderItem={renderGridItem}
      keyExtractor={(item, index) => item.id}
    />
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridItems: {
    flex: 1,
    margin: scale(10),
    height: verticalScale(150),
    borderRadius: 10,
    elevation: 5,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    padding: verticalScale(15),
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  title: {
    fontFamily: 'BebasNeue-Regular',
    fontWeight: '600',
    fontSize: moderateScale(18),
    textAlign: 'right',
  },
});
