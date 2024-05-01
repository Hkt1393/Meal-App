import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import {moderateScale, scale, verticalScale} from '../src/utils/scaling';

const MealItems = ({
  onSelectMeal,
  title,
  duration,
  affordability,
  complexity,
  image,
}) => {
  return (
    <TouchableOpacity onPress={onSelectMeal}>
      <View style={styles.mealContainer}>
        <ImageBackground source={{uri: image}} style={styles.backgroundImage}>
          <View>
            <Text style={styles.title} numberOfLines={1}>
              {title}
            </Text>
          </View>
        </ImageBackground>
        <View style={styles.infoContainer}>
          <Text>{duration}m</Text>
          <Text>{complexity.toUpperCase()}</Text>
          <Text>{affordability.toUpperCase()}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: scale(15),
  },
  backgroundImage: {
    height: '90%',
    width: '100%',
    justifyContent: 'flex-end',
    paddingVertical: 10,
  },
  mealContainer: {
    height: verticalScale(190),
    width: scale(340),
    backgroundColor: 'lightgrey',
    marginVertical: verticalScale(5),
    borderRadius: verticalScale(5),
    overflow: 'hidden',
  },
  title: {
    color: 'white',
    fontWeight: '900',
    fontSize: moderateScale(20),
    padding: scale(5),
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    textAlign: 'center',
  },
});

export default MealItems;
