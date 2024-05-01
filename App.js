import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet} from 'react-native';
import MealNavigation from './components/navigation/MealNavigation';
import {Provider} from 'react-redux';
import {store} from './src/store/store';

export default function App() {
  return (
    <Provider store={store}>
      <MealNavigation />
    </Provider>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
